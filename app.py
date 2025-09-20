import os
from flask import Flask, render_template, request, abort, send_file, jsonify
from flask import Response

from .ObjectDefinition import get_objects_with_gltf

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('BabylonTest.html')


# Development helper: serve the example objects JSON from project root
@app.get("/651.json")
def serve_objects_651():
    try:
        root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
        path = os.path.join(root_dir, "651.json")
        if not os.path.exists(path):
            abort(404)
        return send_file(path, mimetype="application/json")
    except Exception as e:
        abort(500, description=str(e))


@app.get('/favicon.ico')
def favicon():
    """Serve favicon if present under static, else return 204 to avoid 404 noise."""
    try:
        static_dir = os.path.join(os.path.dirname(__file__), 'static')
        ico_path = os.path.join(static_dir, 'favicon.ico')
        if os.path.exists(ico_path):
            return send_file(ico_path, mimetype='image/vnd.microsoft.icon')
        return Response(status=204)
    except Exception:
        return Response(status=204)


@app.post("/api/gltf")
def generate_and_send_gltf():
    """
    Accepts JSON with a list of (object_id, model_type) pairs and returns the GLTF for the first item.
    Expected JSON shapes:
      { "objects": [[123, 10]] }  OR  { "objects": [{"id":123, "type":10}] }

    For each object in the list, the exporter writes the GLTF into babylon/static/objects.
    For now, this endpoint returns the GLTF file for the first pair only.
    """
    data = request.get_json(silent=True)
    print("data: ", data)
    if not data or "objects" not in data:
        return jsonify({"error": "Expected JSON: { 'objects': [[id, type], ...] }"}), 400

    objects = data.get("objects")
    if not isinstance(objects, list) or len(objects) == 0:
        return jsonify({"error": "'objects' must be a non-empty list"}), 400

    # Normalize to list[tuple[int,int]]
    pairs: list[tuple[int, int]] = []
    try:
        for item in objects:
            if isinstance(item, dict):
                oid = int(item.get("id"))
                typ = int(item.get("type"))
            else:
                oid = int(item[0])
                typ = int(item[1])
            pairs.append((oid, typ))
    except Exception:
        return jsonify({"error": "Each item must be [id, type] or {id, type}"}), 400

    # Output directory under static
    objects_dir = os.path.join(os.path.dirname(__file__), "static", "objects")
    os.makedirs(objects_dir, exist_ok=True)

    # Generate/export as needed using provided utility
    print("/api/gltf request:", pairs)
    results = get_objects_with_gltf(pairs, out_dir=objects_dir, hide_untextured=False)

    # For now, return only the first GLTF produced
    first_key = next(iter(results.keys()))
    entry = results[first_key]
    gltf_path = entry.get("gltf") if isinstance(entry, dict) else None
    if not gltf_path or gltf_path == "no model" or not os.path.exists(gltf_path):
        print("/api/gltf: generation failed:", entry)
        def json_safe(x):
            if isinstance(x, (str, int, float, bool)) or x is None:
                return x
            if isinstance(x, bytes):
                try:
                    return x.decode('utf-8', 'replace')
                except Exception:
                    return repr(x)
            if isinstance(x, dict):
                return {k: json_safe(v) for k, v in x.items()}
            if isinstance(x, (list, tuple)):
                return [json_safe(v) for v in x]
            return str(x)
        return jsonify({
            "error": "No GLTF generated for the requested object",
            "detail": json_safe(entry)
        }), 404

    # Serve the GLTF directly and include tile footprint metadata so the client can scale it
    try:
        filename = os.path.basename(gltf_path)
        print("/api/gltf: sending", filename)
        size_meta = entry.get("objectdef", {}) if isinstance(entry, dict) else {}
        size_x = size_meta.get("sizeX", 1)
        size_y = size_meta.get("sizeY", 1)
        resp = send_file(gltf_path, mimetype="model/gltf+json", download_name=filename, as_attachment=False)
        resp.headers["X-Object-SizeX"] = str(size_x)
        resp.headers["X-Object-SizeY"] = str(size_y)
        return resp
    except Exception as e:
        abort(500, description=str(e))


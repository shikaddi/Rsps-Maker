import os
from flask import Flask, render_template, request, abort, send_file, jsonify
from flask import Response
from flask_compress import Compress
from .ObjectDefinition import get_objects_with_gltf

app = Flask(__name__)
compress = Compress()
compress.init_app(app)

def json_safe(value):
    if isinstance(value, (str, int, float, bool)) or value is None:
        return value
    if isinstance(value, bytes):
        try:
            return value.decode("utf-8")
        except Exception:
            return value.hex()
    if isinstance(value, dict):
        return {k: json_safe(v) for k, v in value.items()}
    if isinstance(value, (list, tuple, set)):
        return [json_safe(v) for v in value]
    return str(value)


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
    Accepts JSON with a list of (object_id, model_type) pairs and returns
    metadata for every unique pair. Duplicate entries in the request are
    deduplicated so the exporter only runs once per object.

    Expected JSON shapes:
      { "objects": [[123, 10], ...] }
      { "objects": [{"id": 123, "type": 10}, ...] }

    Response JSON shape:
      {
        "objects": [ { ... per unique object ... } ],
        "request_map": [int index into objects for each request item]
      }
    """
    data = request.get_json(silent=True)
    if not data or "objects" not in data:
        return jsonify({"error": "Expected JSON: { 'objects': [[id, type], ...] }"}), 400

    raw_objects = data.get("objects")
    if not isinstance(raw_objects, list) or len(raw_objects) == 0:
        return jsonify({"error": "'objects' must be a non-empty list"}), 400

    unique_pairs: list[tuple[int, int]] = []
    pair_index: dict[tuple[int, int], int] = {}
    request_map: list[int] = []

    def parse_item(item):
        if isinstance(item, dict):
            oid = item.get("id")
            typ = item.get("type")
        else:
            try:
                oid, typ = item
            except Exception as exc:
                raise ValueError("Each item must be [id, type] or {id, type}") from exc
        if oid is None or typ is None:
            raise ValueError("Each item must include both id and type")
        return int(oid), int(typ)

    try:
        for item in raw_objects:
            oid, typ = parse_item(item)
            key = (oid, typ)
            if key not in pair_index:
                pair_index[key] = len(unique_pairs)
                unique_pairs.append(key)
            request_map.append(pair_index[key])
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception:
        return jsonify({"error": "Each item must be [id, type] or {id, type}"}), 400

    objects_dir = os.path.join(os.path.dirname(__file__), "static", "objects")
    os.makedirs(objects_dir, exist_ok=True)

    results = get_objects_with_gltf(unique_pairs, out_dir=objects_dir, hide_untextured=False)
    response_objects = []
    for oid, typ in unique_pairs:
        key = f"{oid}-{typ}"
        entry = results.get(key, {}).copy() if key in results else {}
        entry.setdefault("object_id", oid)
        entry.setdefault("model_type", typ)
        response_objects.append(json_safe(entry))
        if(key == "1011-10"):
            print(entry)

    return jsonify({
        "objects": response_objects,
        "request_map": request_map
    })




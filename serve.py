#!/usr/bin/env python3
import os
import sys
from typing import Tuple
from flask import Flask, send_from_directory, abort, Response


ROOT_DIR = os.path.dirname(os.path.abspath(__file__))


def create_app(root: str) -> Flask:
    """Create and configure the Flask application serving files from root."""
    app = Flask(__name__, static_folder=None)

    # CORS for local dev
    @app.after_request
    def add_cors_headers(resp: Response) -> Response:  # type: ignore[override]
        resp.headers["Access-Control-Allow-Origin"] = "*"
        resp.headers["Access-Control-Allow-Methods"] = "GET, OPTIONS"
        resp.headers["Access-Control-Allow-Headers"] = "*"
        return resp

    # Handle preflight
    @app.route("/", methods=["OPTIONS"])  # root preflight
    @app.route("/<path:subpath>", methods=["OPTIONS"])  # any path preflight
    def options(subpath: str = ""):
        return ("", 200)

    def _safe_join(path: str) -> Tuple[str, bool]:
        # Compute absolute path and ensure it remains within root
        abs_path = os.path.abspath(os.path.join(root, path))
        is_dir = os.path.isdir(abs_path)
        if not abs_path.startswith(os.path.abspath(root) + os.sep) and abs_path != os.path.abspath(root):
            abort(403)
        return abs_path, is_dir

    def _directory_listing(rel_path: str) -> str:
        abs_path, _ = _safe_join(rel_path)
        try:
            entries = sorted(os.listdir(abs_path))
        except FileNotFoundError:
            abort(404)
        base = "/" if not rel_path else f"/{rel_path.strip('/')}/"
        parts = [
            "<!doctype html>",
            "<meta charset='utf-8'>",
            f"<title>Index of {base}</title>",
            f"<h1>Index of {base}</h1>",
            "<ul>",
        ]
        if rel_path:
            parent = "/" + "/".join(rel_path.strip("/").split("/")[:-1])
            if parent != "/":
                parent += "/"
            parts.append(f"<li><a href='{parent}'>..</a></li>")
        for name in entries:
            href = name
            if os.path.isdir(os.path.join(abs_path, name)):
                href += "/"
            parts.append(f"<li><a href='{href}'>{name}</a></li>")
        parts.append("</ul>")
        return "\n".join(parts)

    @app.route("/", methods=["GET"])
    def root_index():
        # If there's a common entry file, serve it; otherwise list directory
        for candidate in ("index.html", "index.htm", "BabylonTest.html"):
            candidate_path = os.path.join(root, candidate)
            if os.path.exists(candidate_path):
                return send_from_directory(root, candidate)
        return _directory_listing("")

    @app.route("/<path:requested>", methods=["GET"])
    def serve_path(requested: str):
        abs_path, is_dir = _safe_join(requested)
        if is_dir:
            # Try to serve index file from directory, fallback to listing
            for candidate in ("index.html", "index.htm"):
                candidate_path = os.path.join(abs_path, candidate)
                if os.path.exists(candidate_path):
                    rel = os.path.relpath(candidate_path, root)
                    return send_from_directory(root, rel)
            return _directory_listing(requested)
        if not os.path.exists(abs_path):
            abort(404)
        rel = os.path.relpath(abs_path, root)
        return send_from_directory(root, rel)

    return app


def main():
    # Port from argv or default 8000
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"Invalid port: {sys.argv[1]}")
            sys.exit(1)

    app = create_app(ROOT_DIR)
    print(f"Serving {ROOT_DIR} at http://127.0.0.1:{port}/ (Ctrl+C to stop)")
    # Use Flask's development server for convenience; threaded like previous server
    app.run(host="127.0.0.1", port=port, debug=False, threaded=True)


if __name__ == "__main__":
    main()


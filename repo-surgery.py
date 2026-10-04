#!/usr/bin/env python3
"""One-off repo surgery for rawmware/TZ-taste using the stored custom.github credential.

Does what `gh put` cannot: multi-file tree commits (moves + deletes in one commit)
and GitHub Pages enablement. Authenticated requests go only to api.github.com.
Never prints the credential.
"""
from __future__ import annotations

import base64
import json
import sys
import urllib.request
import urllib.error

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response

CRED = "custom.github"
HOSTS = ["api.github.com"]
API = "https://api.github.com"
REPO = "rawmware/TZ-taste"


def api(method, path, payload=None):
    url = API + path
    data = None
    req = urllib.request.Request(url, method=method)
    if payload is not None:
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(url, data=data, method=method)
        req.add_header("Content-Type", "application/json")
    req.add_header("Accept", "application/vnd.github+json")
    add_surrogate_to_request(req, CRED, allowed_hosts=HOSTS)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.status, read_json_response(resp)
    except urllib.error.HTTPError as exc:
        try:
            body = exc.read().decode("utf-8", errors="replace")
        except Exception:
            body = ""
        return exc.code, {"http_error": exc.code, "body": body[:800]}


def tree_commit(message, changes, base_branch="main"):
    """changes: list of (path, content_bytes|None). None = delete."""
    s, ref = api("GET", f"/repos/{REPO}/git/ref/heads/{base_branch}")
    assert s == 200, ref
    base_sha = ref["object"]["sha"]
    s, commit = api("GET", f"/repos/{REPO}/git/commits/{base_sha}")
    assert s == 200, commit
    base_tree = commit["tree"]["sha"]

    tree = []
    for path, content in changes:
        if content is None:
            tree.append({"path": path, "mode": "100644", "sha": None})
        else:
            s, blob = api("POST", f"/repos/{REPO}/git/blobs",
                          {"content": base64.b64encode(content).decode(), "encoding": "base64"})
            assert s == 201, blob
            tree.append({"path": path, "mode": "100644", "type": "blob", "sha": blob["sha"]})

    s, new_tree = api("POST", f"/repos/{REPO}/git/trees",
                      {"base_tree": base_tree, "tree": tree})
    assert s == 201, new_tree
    s, new_commit = api("POST", f"/repos/{REPO}/git/commits",
                        {"message": message, "tree": new_tree["sha"], "parents": [base_sha]})
    assert s == 201, new_commit
    s, upd = api("PATCH", f"/repos/{REPO}/git/refs/heads/{base_branch}",
                 {"sha": new_commit["sha"]})
    assert s == 200, upd
    return new_commit["sha"]


if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "archive":
        # Move the v1 studio app into archive/studio-v1/ (keeps history, clears root)
        import os
        src_dir = sys.argv[2]
        files = ["README.md", "STATUS.md", "app.js", "catalog.json", "index.html",
                 "llms.txt", "publish-build.cjs", "style.css", "vercel.json", "verify.cjs"]
        changes = []
        for f in files:
            with open(os.path.join(src_dir, f), "rb") as fh:
                changes.append((f"archive/studio-v1/{f}", fh.read()))
            changes.append((f, None))  # delete from root
        note = ("# Studio v1 (archived)\n\nThe original personal design-reference studio built "
                "in the first session. Superseded by the agent-first TZ-taste rebuild "
                "(AGENT.md, style DNAs, patterns, prompts). Kept here for history.\n").encode()
        changes.append(("archive/studio-v1/README.md", note))
        sha = tree_commit("chore: archive v1 studio app to archive/studio-v1/", changes)
        print("archive commit:", sha[:7])
    elif mode == "pages":
        s, cur = api("GET", f"/repos/{REPO}/pages")
        print("pages GET:", s, json.dumps(cur)[:300])
        if s == 404:
            s, created = api("POST", f"/repos/{REPO}/pages",
                             {"source": {"branch": "main", "path": "/docs"}})
            print("pages POST:", s, json.dumps(created)[:500])
        else:
            s, upd = api("PUT", f"/repos/{REPO}/pages",
                         {"source": {"branch": "main", "path": "/docs"}})
            print("pages PUT:", s, json.dumps(upd)[:500])
    elif mode == "pages-status":
        s, cur = api("GET", f"/repos/{REPO}/pages")
        print("pages status:", s)
        print(json.dumps(cur, indent=2)[:1500])

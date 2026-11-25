#!/usr/bin/env python3
"""Domolux Continuous Integration Guardrail.

Verifies that:
1. Domolux public key and key ID are correctly registered in packs.py.
2. Official publisher keys are preserved.
3. No private signing keys or PEM secrets exist in the repository.
4. Manifest version matches the expected release version.
"""

from __future__ import annotations

import ast
import json
import os
from pathlib import Path
import sys

EXPECTED_DOMOLUX_KEY_ID = "d08c59237e4f"
EXPECTED_DOMOLUX_PUBKEY = "DotaQnEA7y0HE6vIYmw7Rgn00q72tPfZqhTecf3g7r8="
EXPECTED_OFFICIAL_KEYS = {
    "62863e45df5a": "D3sbiEQibaCVm1OWcYUrQc424c2t+pmSQqWg6l6fNSE=",
    "867371cc70e6": "uP74xZzFJ2yysjdIZVq5q9G/yn5hVX4HJ6wHv7pqqwo=",
    "bdac241ae58b": "+oU/fcdvK7sfvpmz/aq63Y1QIymqK5+pKYGrGksrco8=",
}
EXPECTED_RELEASE_VERSION = "4.0.2.1"

ROOT = Path(__file__).resolve().parent.parent


def check_public_keys() -> None:
    packs_path = ROOT / "custom_components" / "neonplan3d" / "packs.py"
    if not packs_path.exists():
        sys.exit(f"FAIL: {packs_path} not found")

    tree = ast.parse(packs_path.read_text(encoding="utf-8"), filename="packs.py")
    public_keys: dict[str, str] = {}

    for node in ast.walk(tree):
        # Handle annotated assignment (PACK_PUBLIC_KEYS: dict[str, str] = {...})
        if isinstance(node, ast.AnnAssign) and isinstance(node.target, ast.Name) and node.target.id == "PACK_PUBLIC_KEYS":
            if isinstance(node.value, ast.Dict):
                for k, v in zip(node.value.keys, node.value.values):
                    if isinstance(k, ast.Constant) and isinstance(v, ast.Constant):
                        public_keys[k.value] = v.value
        # Handle standard assignment (PACK_PUBLIC_KEYS = {...})
        elif isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name) and target.id == "PACK_PUBLIC_KEYS":
                    if isinstance(node.value, ast.Dict):
                        for k, v in zip(node.value.keys, node.value.values):
                            if isinstance(k, ast.Constant) and isinstance(v, ast.Constant):
                                public_keys[k.value] = v.value

    # Check Domolux Key
    if EXPECTED_DOMOLUX_KEY_ID not in public_keys:
        sys.exit(f"FAIL: Domolux Key ID {EXPECTED_DOMOLUX_KEY_ID} missing from PACK_PUBLIC_KEYS")
    if public_keys[EXPECTED_DOMOLUX_KEY_ID] != EXPECTED_DOMOLUX_PUBKEY:
        sys.exit("FAIL: Domolux Public Key value mismatch")

    # Check Official Mastershort Keys
    for kid, val in EXPECTED_OFFICIAL_KEYS.items():
        if kid not in public_keys:
            sys.exit(f"FAIL: Official publisher key {kid} missing from PACK_PUBLIC_KEYS")
        if public_keys[kid] != val:
            sys.exit(f"FAIL: Official publisher key {kid} altered")

    print(f"PASS: Public keys verified ({len(public_keys)} keys registered, Domolux key {EXPECTED_DOMOLUX_KEY_ID} intact)")


def check_manifest() -> None:
    manifest_path = ROOT / "custom_components" / "neonplan3d" / "manifest.json"
    if not manifest_path.exists():
        sys.exit(f"FAIL: {manifest_path} not found")

    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except Exception as err:
        sys.exit(f"FAIL: manifest.json is invalid JSON: {err}")

    version = manifest.get("version")
    if version != EXPECTED_RELEASE_VERSION:
        sys.exit(f"FAIL: manifest version '{version}' != expected '{EXPECTED_RELEASE_VERSION}'")

    print(f"PASS: Manifest version verified ({version})")


def check_secrets() -> None:
    # Construct markers dynamically to avoid self-detection
    prefixes = ["", "EC ", "RSA ", "OPENSSH ", "ED25519 "]
    forbidden_markers = ["BEGIN " + p + "PRIVATE KEY" for p in prefixes]

    violations: list[str] = []
    ignored_dirs = {".git", "__pycache__", "node_modules", ".pytest_cache"}

    for root, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in ignored_dirs]
        for file in files:
            file_path = Path(root) / file
            # Skip self, binary, and archive files
            if file_path == Path(__file__).resolve():
                continue
            if file_path.suffix in {".png", ".jpg", ".zip", ".tar", ".gz", ".pyc"}:
                continue
            try:
                content = file_path.read_text(encoding="utf-8", errors="ignore")
                for marker in forbidden_markers:
                    if marker in content:
                        violations.append(str(file_path.relative_to(ROOT)))
                        break
            except Exception:
                pass

    if violations:
        sys.exit(f"FAIL: Potential private key material detected in: {', '.join(violations)}")

    print("PASS: Secret scanning clean (zero private key material detected in repository)")


def main() -> None:
    print("=== Running Domolux CI Guardrail Checks ===")
    check_public_keys()
    check_manifest()
    check_secrets()
    print("=== All Domolux Guardrail Checks Passed Successfully ===")


if __name__ == "__main__":
    main()

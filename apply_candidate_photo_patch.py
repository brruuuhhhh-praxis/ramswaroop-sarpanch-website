#!/usr/bin/env python3
from pathlib import Path
from datetime import datetime
import shutil, sys

root = Path.cwd()
src = root / "src"
patch = root / "patch"
if not (src / "App.jsx").exists() or not (src / "App.css").exists():
    sys.exit("ERROR: Project root नहीं मिला। पहले वेबसाइट के project folder में जाएँ।")
for name in ("App.jsx", "App.css", "candidate-face.png", "candidate-full.png"):
    if not (patch / name).exists():
        sys.exit(f"ERROR: patch/{name} नहीं मिली। ZIP को project root में extract करें।")

stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
for name in ("App.jsx", "App.css"):
    shutil.copy2(src / name, src / f"{name}.before-photo-patch-{stamp}")
public = root / "public"
public.mkdir(exist_ok=True)
shutil.copy2(patch / "App.jsx", src / "App.jsx")
shutil.copy2(patch / "App.css", src / "App.css")
shutil.copy2(patch / "candidate-face.png", public / "candidate-face.png")
shutil.copy2(patch / "candidate-full.png", public / "candidate-full.png")
print("Photo patch applied.")
print("Changed only: src/App.jsx, src/App.css and public/candidate-face.png/public/candidate-full.png")
print("Backups saved with suffix:", stamp)

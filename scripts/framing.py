"""Sets how a finished video is framed on its page.

usage: framing.py <slug> [poster second]

It finds where ZK is in the frame (the background is already the page colour,
so he is whatever is not that colour), and writes a `crop` to his letter so the
page zooms in until his head and shoulders fill the player, however far from
the camera he sat. It also saves the frame at [poster second] as
public/video/<slug>.jpg, which the page shows before the video is played.
"""
import re
import subprocess
import sys
from io import BytesIO

from PIL import Image

slug = sys.argv[1]
poster_at = float(sys.argv[2]) if len(sys.argv) > 2 else 0.6
video = f"public/video/{slug}.mp4"
letter = f"outreach/{slug}.ts"
CREAM = (251, 248, 241)
SHAPE = 1.3  # width / height of the framed player


def frame(t, width=None):
    vf = ["-vf", f"scale={width}:-2"] if width else []
    png = subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-ss", str(t), "-i", video, "-frames:v", "1", *vf, "-f", "image2pipe", "-vcodec", "png", "-"],
        check=True, capture_output=True,
    ).stdout
    return Image.open(BytesIO(png)).convert("RGB")


duration = float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", video]))
tops, centres, widths = [], [], []
for i in range(12):
    im = frame(duration * (i + 0.5) / 12, 240)
    w, h = im.size
    px = im.load()
    person = lambda x, y: max(abs(px[x, y][c] - CREAM[c]) for c in range(3)) > 30
    rows = [y for y in range(h) if sum(person(x, y) for x in range(w)) > w * 0.03]
    if not rows:
        continue
    top = rows[0]
    xs = [x for y in range(top, min(h, top + int(h * 0.3))) for x in range(w) if person(x, y)]
    tops.append(top / h)
    centres.append(sum(xs) / len(xs) / w)
    # how wide his head is: the widest row in the band just under the top of his hair
    widths.append(max(sum(person(x, y) for x in range(w)) for y in range(top, min(h, top + int(h * 0.22)))) / w)
tops.sort()
centres.sort()
widths.sort()
head_w = widths[len(widths) // 2]
top = tops[len(tops) // 5]  # near his highest point, ignoring a stray frame
centre = centres[len(centres) // 2]

full = frame(0)
W, H = full.size
# a head is about 1.3 times as tall as it is wide; frame him so it takes up
# roughly two thirds of the player's height, as in a close talking-head shot
head_h = head_w * W * 1.3 / H
ch = min(1.0, head_h / 0.66)
y = max(0.0, min(top - ch * 0.06, 1 - ch))
cw = min(1.0, ch * H * SHAPE / W)
x = min(max(0.0, centre - cw / 2), 1 - cw)
crop = [round(v, 4) for v in (x, y, cw, ch)]

frame(poster_at).save(f"public/video/{slug}.jpg", quality=88)

src = re.sub(r"\n  (poster|crop): .*,", "", open(letter).read())
src, n = re.subn(r"(\n  cutout: true,)", rf'\1\n  poster: "/video/{slug}.jpg",\n  crop: {crop},', src)
assert n == 1, f"no 'cutout: true' line in {letter}"
open(letter, "w").write(src)
print(f"{slug}: crop {crop}, poster at {poster_at}s")

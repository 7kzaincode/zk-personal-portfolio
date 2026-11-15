"""Transcribes a video's speech with word timings (Whisper, on this machine).

usage: transcribe.py <video> <out.json>
Prints the transcript with the second each phrase starts, and saves every
word's start time to <out.json>, which is what a letter's `cues` come from.
"""
import json
import subprocess
import sys
import tempfile
import warnings

warnings.filterwarnings("ignore")
import whisper  # noqa: E402

video, out = sys.argv[1], sys.argv[2]
with tempfile.NamedTemporaryFile(suffix=".wav") as wav:
    subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-y", "-i", video, "-ac", "1", "-ar", "16000", wav.name],
        check=True,
    )
    result = whisper.load_model("small.en").transcribe(wav.name, word_timestamps=True, fp16=False)

words = [
    {"t": round(w["start"], 1), "w": w["word"].strip()}
    for s in result["segments"]
    for w in s.get("words", [])
]
json.dump({"words": words}, open(out, "w"))
for s in result["segments"]:
    print(f'{s["start"]:6.1f}s  {s["text"].strip()}')

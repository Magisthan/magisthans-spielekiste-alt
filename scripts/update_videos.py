import json
import re
import sys
import requests

CHANNEL_URL = "https://www.youtube.com/@MagisthansSpielekiste/videos"

try:
    response = requests.get(
        CHANNEL_URL,
        headers={
            "User-Agent": "Mozilla/5.0"
        },
        timeout=20
    )

    response.raise_for_status()

    html = response.text

except Exception as e:

    print(f"Fehler beim Abrufen der Kanalseite: {e}")

    sys.exit(0)

# Video IDs suchen
video_ids = []

matches = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)

for video_id in matches:

    if video_id not in video_ids:
        video_ids.append(video_id)

# Nur die ersten 3 Videos verwenden
video_ids = video_ids[:3]

if not video_ids:

    print("Keine Videos gefunden.")

    sys.exit(0)

videos = []

for video_id in video_ids:

    videos.append({
        "title": "YouTube Video",
        "videoId": video_id,
        "url": f"https://www.youtube.com/watch?v={video_id}",
        "thumbnail": f"https://img.youtube.com/vi/{video_id}/hqdefault.jpg"
    })

with open("data/latest-videos.json", "w", encoding="utf-8") as f:

    json.dump(videos, f, indent=2, ensure_ascii=False)

print(f"{len(videos)} Videos aktualisiert.")

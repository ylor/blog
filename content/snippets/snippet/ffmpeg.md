---
title: "ffmpeg"
---

Transcoding only one audio stream in a file. Leave all others intact.
```bash
ffmpeg -i foo.mp4 -map 0 -c copy -c:a:1 aac bar.mp4
```

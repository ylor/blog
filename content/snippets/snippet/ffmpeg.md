---
title: "ffmpeg"
---

Transcoding only one audio stream in a file. Leave all others intact. In this example, just the first.
```bash
ffmpeg -i "foo.mp4" -map 0 -c copy -c:a:0 aac "bar.mp4"
```

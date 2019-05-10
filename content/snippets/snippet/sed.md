---
title: "sed"
---

# Replace all instances of foo with bar
```
sed -i -e 's/foo/bar/g' /path/to/file.txt
```

# Delete all lines containing foo
```
sed -i '' '/foo/d' /path/to/file.txt
```
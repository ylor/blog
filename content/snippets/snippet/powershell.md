---
title: "powershell"
---

## For Loop
```powershell
$files = Get-ChildItem -Path "C:\Path\To\Folder" *foo*.bar -Recurse
foreach ($file in $files) {
  Start-Process $file.Fullname -Wait
}
```

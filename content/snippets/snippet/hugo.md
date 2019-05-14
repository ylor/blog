---
title: "hugo"
---
* Make development site available for other devices

```bash
hugo server  --bind=0.0.0.0 --baseUrl=$(hostname)
```

* Same command, but in [fish](../fish)

```bash
hugo server --bind=0.0.0.0 --baseUrl=(hostname)
```
# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - link "Dashboard" [ref=e3] [cursor=pointer]:
      - /url: /
      - img [ref=e5] [cursor=pointer]
    - button "Open Users Dialog" [ref=e10] [cursor=pointer]:
      - img [ref=e13] [cursor=pointer]
  - main [ref=e16]:
    - generic [ref=e17]:
      - heading "Please select a tenant" [level=1] [ref=e18]
      - combobox [active] [ref=e19] [cursor=pointer]:
        - generic: Select a tenant
        - img [ref=e20] [cursor=pointer]
  - alert [ref=e22]
```
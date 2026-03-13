# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link "Dashboard" [ref=e3] [cursor=pointer]:
      - /url: /
      - img [ref=e5] [cursor=pointer]
    - button "Open Users Dialog" [ref=e10] [cursor=pointer]:
      - img [ref=e13] [cursor=pointer]
  - main [ref=e15]:
    - generic [ref=e16]:
      - heading "Please select a tenant" [level=1] [ref=e17]
      - combobox [ref=e18] [cursor=pointer]:
        - generic: Select a tenant
        - img [ref=e19] [cursor=pointer]
      - combobox [ref=e21]
```
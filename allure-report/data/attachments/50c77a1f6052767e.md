# Page snapshot

```yaml
- generic [ref=e1]:
  - button [ref=e13] [cursor=pointer]:
    - generic:
      - img
  - generic [ref=e15] [cursor=pointer]:
    - alert [ref=e16] [cursor=pointer]:
      - banner [ref=e18] [cursor=pointer]:
        - img "logo" [ref=e20] [cursor=pointer]
        - generic [ref=e21] [cursor=pointer]:
          - heading "Heads up, you’ve been redirected to Browser Isolation!" [level=2] [ref=e22] [cursor=pointer]
          - paragraph [ref=e23] [cursor=pointer]:
            - generic [ref=e25] [cursor=pointer]: The website you were trying to access is now rendered in a fully isolated environment to protect you from malicious content.
    - button "close" [ref=e26] [cursor=pointer]:
      - img [ref=e27] [cursor=pointer]
    - progressbar "notification timer" [ref=e29] [cursor=pointer]
  - generic [ref=e30]:
    - generic [ref=e31]: Type and hit ENTER
    - textbox [active] [ref=e32]
```
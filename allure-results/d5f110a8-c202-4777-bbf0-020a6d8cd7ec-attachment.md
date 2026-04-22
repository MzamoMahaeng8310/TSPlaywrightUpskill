# Page snapshot

```yaml
- main [ref=e2]:
  - generic [ref=e4]:
    - img "Form logo" [ref=e8]
    - generic [ref=e15]:
      - generic [ref=e17]:
        - heading "Sign in" [level=2] [ref=e19]
        - paragraph [ref=e21]: Sign in to your account.
      - form "primary-form" [ref=e26]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - generic [ref=e31]: Username
            - textbox "Username" [active] [ref=e36]
          - generic [ref=e38]:
            - generic [ref=e40]: Password
            - textbox "Password" [ref=e45]
            - generic [ref=e47]:
              - generic:
                - generic [ref=e50]:
                  - generic [ref=e51]:
                    - img [ref=e52]
                    - checkbox "Show password" [ref=e54]
                  - generic [ref=e56]: Show password
                - link "Forgot your password?" [ref=e59]:
                  - /url: /forgotPassword?client_id=1tl3nq7m0quho0aaqegji1lett&prompt=none&redirect_uri=https%3A%2F%2Fpm-nonprod.wbs-wealth.com&response_type=code&scope=email+openid
          - button "Sign in" [ref=e63] [cursor=pointer]:
            - generic [ref=e64] [cursor=pointer]: Sign in
```
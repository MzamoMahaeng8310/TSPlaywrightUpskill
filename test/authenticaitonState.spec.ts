// // Below is a **complete, production-ready Playwright + TypeScript setup** that:

// // ✅ Logs in **once**
// // ✅ Saves the **authentication state** (`storageState`)
// // ✅ Reuses it across **all tests**
// // ✅ Uses **Playwright config** properly
// // ✅ Is **clean, reusable, and scalable**

// // ---

// // ## 1️⃣ Folder Structure (Recommended)

// // ```
// // playwright-auth/
// // │
// // ├── playwright.config.ts
// // ├── package.json
// // │
// // ├── tests/
// // │   ├── auth.setup.ts        # Runs once to login
// // │   ├── example.spec.ts      # Uses authenticated state
// // │
// // ├── storage/
// // │   └── auth.json            # Saved auth state
// // │
// // └── utils/
// //     └── login.ts             # Optional reusable login logic
// // ```

// // ---

// // ## 2️⃣ Playwright Config (`playwright.config.ts`)

// // This is where authentication reuse is wired in.

// // ```ts
// import { defineConfig, devices } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',

//   timeout: 30 * 1000,

//   use: {
//     baseURL: 'https://example.com',
//     trace: 'on-first-retry',
//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//   },

//   projects: [
//     // 🔹 Setup project (runs FIRST)
//     {
//       name: 'setup',
//       testMatch: /auth\.setup\.ts/,
//     },

//     // 🔹 Authenticated tests
//     {
//       name: 'chromium',
//       use: {
//         ...devices['Desktop Chrome'],
//         storageState: 'storage/auth.json',
//       },
//       dependencies: ['setup'],
//     },
//   ],
// });
// // ```

// // 📌 **Key points**

// // * `auth.setup.ts` runs **once**
// // * All other tests depend on it
// // * `storageState` is injected automatically

// // ---

// // ## 3️⃣ One-Time Login Setup (`tests/auth.setup.ts`)

// // This test logs in and saves authentication state.

// // ```ts
// import { test } from '@playwright/test';
// import path from 'path';

// test('authenticate and save state', async ({ page }) => {
//   await page.goto('/login');

//   await page.fill('#username', 'testuser');
//   await page.fill('#password', 'password123');
//   await page.click('button[type="submit"]');

//   // ✅ Verify login succeeded
//   await page.waitForURL('/dashboard');

//   // ✅ Save auth state
//   await page.context().storageState({
//     path: path.resolve(__dirname, '../storage/auth.json'),
//   });
// });
// // ```

// // 📌 This file:

// // * Runs **only once**
// // * Creates `auth.json`
// // * No assertions needed beyond login success

// // ---

// // ## 4️⃣ Authenticated Test (`tests/example.spec.ts`)

// // No login required 🚀

// // ```ts
// import { test, expect } from '@playwright/test';

// test('access protected page without logging in again', async ({ page }) => {
//   await page.goto('/dashboard');

//   await expect(page.locator('h1')).toHaveText('Dashboard');
// });
// // ```

// // ✔️ The user is already logged in
// // ✔️ Auth state is auto-injected from `auth.json`

// // ---

// // ## 5️⃣ (Optional) Reusable Login Helper (`utils/login.ts`)

// // Useful if you need login logic elsewhere.

// // ```ts
// import { Page } from '@playwright/test';

// export async function login(page: Page) {
//   await page.goto('/login');
//   await page.fill('#username', 'testuser');
//   await page.fill('#password', 'password123');
//   await page.click('button[type="submit"]');
//   await page.waitForURL('/dashboard');
// }
// // ```

// // Then in `auth.setup.ts`:

// // ```ts
// import { test } from '@playwright/test';
// import { login } from '../utils/login';

// test('authenticate and save state', async ({ page }) => {
//   await login(page);

//   await page.context().storageState({
//     path: 'storage/auth.json',
//   });
// });
// // ```

// // ---

// // ## 6️⃣ Run the Tests

// // ```bash
// npx playwright test
// // ```

// // ✔️ Login happens once
// // ✔️ All tests reuse authentication
// // ✔️ Fast and stable execution

// // ---

// // ## 7️⃣ When This Pattern Is Ideal

// // ✅ Enterprise apps
// // ✅ SSO / token-based login
// // ✅ UI login is slow
// // ✅ CI pipelines
// // ✅ Electron / desktop automation
// // ✅ FX trading or secured dashboards (like your previous projects)

// // ---

// // If you want, I can also show you:

// // * 🔐 **API-based authentication (faster than UI)**
// // * 🔄 **Multiple users / roles**
// // * 🧪 **Per-test auth isolation**
// // * ⚡ **Electron app authentication reuse**
// ////////////////////////////  how do i iject authentication state in Playwright tests?  ////////////////////////////
// // Just tell me 👍


// // Great question — this is the **core Playwright concept**, and once it clicks, everything becomes simple 👍

// // There are **three correct ways** to inject authentication state into different tests. I’ll explain **how it actually works**, then show **clean examples**.

// // ---

// // ## 🔑 The Key Idea (Important)

// // 👉 **You do NOT manually inject auth state in each test**

// // Playwright injects it **automatically** via:

// // * `storageState` in **playwright.config.ts**
// // * Or `test.use()` at test / file level

// // Once injected, **every `page` is already authenticated**.

// // ---

// // # ✅ METHOD 1 (BEST PRACTICE): Inject via `playwright.config.ts`

// // ### 🔹 How injection happens

// // This line in your config:

// // ```ts
// use: {
//   storageState: 'storage/auth.json',
// }
// // ```

// // means:

// // > “Before each test, create a browser context and load cookies + localStorage from `auth.json`.”

// // So **every test automatically starts logged in**.

// // ---

// // ### 🔹 Config Example (Injection Point)

// // ```ts
// // playwright.config.ts
// projects: [
//   {
//     name: 'setup',
//     testMatch: /auth\.setup\.ts/,
//   },
//   {
//     name: 'chromium',
//     use: {
//       storageState: 'storage/auth.json', // ✅ injected here
//     },
//     dependencies: ['setup'],
//   },
// ];
// // ```

// // ---

// // ### 🔹 Test Example (No Auth Code Needed)

// // ```ts
// test('already authenticated', async ({ page }) => {
//   await page.goto('/dashboard');
//   // 🔓 already logged in
// });
// // ```

// // ✅ Injection happens **before the test starts**
// // ✅ `page` is created inside an authenticated context

// // ---

// // # ✅ METHOD 2: Inject Per Test File (Selective Auth)

// // Use this when **some tests need auth, others don’t**.

// // ---

// // ### 🔹 File-Level Injection

// // ```ts
// // tests/protected.spec.ts
// import { test } from '@playwright/test';

// test.use({ storageState: 'storage/auth.json' });

// test('protected page', async ({ page }) => {
//   await page.goto('/dashboard');
// });
// // ```

// // 📌 Applies to **all tests in this file**

// // ---

// // # ✅ METHOD 3: Inject Per Test (Rare but Useful)

// // Use this for **role-based or multi-user testing**.

// // ---

// // ### 🔹 Per-Test Injection

// // ```ts
// test('admin user test', async ({ browser }) => {
//   const context = await browser.newContext({
//     storageState: 'storage/admin.json',
//   });

//   const page = await context.newPage();
//   await page.goto('/admin');
// });
// ```

// 📌 You manually control context creation
// 📌 Not recommended for normal UI flows

// ---

// # 🧠 WHAT IS ACTUALLY IN `auth.json`?

// Example:

// ```json
// {
//   "cookies": [
//     {
//       "name": "session_id",
//       "value": "abc123",
//       "domain": "example.com"
//     }
//   ],
//   "origins": [
//     {
//       "origin": "https://example.com",
//       "localStorage": [
//         {
//           "name": "token",
//           "value": "jwt-token-here"
//         }
//       ]
//     }
//   ]
// }
// ```

// This is what gets injected.

// ---

// # 🚀 HOW PLAYWRIGHT WIRES IT ALL TOGETHER

// ### Execution Flow

// ```text
// 1️⃣ auth.setup.ts logs in
// 2️⃣ storage/auth.json is saved
// 3️⃣ Playwright starts tests
// 4️⃣ Browser context is created
// 5️⃣ storageState is loaded
// 6️⃣ page is created
// 7️⃣ test runs (already authenticated)
// ```

// ---

// # 🔥 Common Mistakes (Avoid These)

// ❌ Trying to `import auth.json`
// ❌ Logging in inside every test
// ❌ Calling `storageState()` inside tests
// ❌ Mixing manual contexts with config injection

// ---

// # 🧪 RECOMMENDED PATTERN (TL;DR)

// ✔ Login **once** in setup
// ✔ Save `storageState`
// ✔ Inject in **playwright.config.ts**
// ✔ Write clean tests with **no auth logic**

// ---

// If you want, next I can show you:

// * 🔁 **Multiple users / roles**
// * 🔐 **API token auth (no UI login at all)**
// * ⚡ **Electron app auth reuse**
// * 🧩 **Auth + test fixtures pattern**

// Just tell me what you want next 👌

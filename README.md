# playwright-ariaselector


https://playwright.dev/docs/api/class-locator#locator-aria-snapshot

https://playwright.dev/docs/aria-snapshots#using-the-locatorariasnapshot-method


Setup:

`npm i`

Run:

`node --loader ts-node/esm test-aria-snapshot.ts`

Example Aria Snapshot:

```
(node:56825) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
ARIA Snapshot: - navigation [ref=s1e4]:
  - link "About" [ref=s1e5]:
    - /url: https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header
  - link "Store" [ref=s1e6]:
    - /url: https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US
  - link "Gmail" [ref=s1e14]:
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images" [ref=s1e16]:
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps" [ref=s1e21]:
    - img [ref=s1e22]
  - link "Sign in" [ref=s1e25]:
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_ctr_og_so_72776761_p
- img [ref=s1e29]
- search [ref=s1e37]:
  - img [ref=s1e45]
  - combobox "Search" [ref=s1e49]
  - button "Search by voice" [ref=s1e52]:
    - img [ref=s1e53]
  - button "Search by image" [ref=s1e55]:
    - img [ref=s1e56]
  - button "Google Search" [ref=s1e61]
  - button "I'm Feeling Lucky" [ref=s1e62]
- contentinfo [ref=s1e80]:
  - link "Advertising" [ref=s1e83]:
    - /url: https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business" [ref=s1e84]:
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works" [ref=s1e85]:
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Applying AI towards science and the environment" [ref=s1e87]:
    - /url: https://ai.google/advancing-ai/social-impact/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=
  - link "Privacy" [ref=s1e91]:
    - /url: https://policies.google.com/privacy?hl=en&fg=1
  - link "Terms" [ref=s1e92]:
    - /url: https://policies.google.com/terms?hl=en&fg=1
  - button "Settings" [ref=s1e96]
- dialog "Sign in to Google" [ref=s1e104]:
  - text: Sign in to Google Get the most from your Google account
  - button "Stay signed out" [ref=s1e119]
  - button "Sign in" [ref=s1e125]
  ```
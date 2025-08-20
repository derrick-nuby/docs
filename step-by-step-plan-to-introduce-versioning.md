# Step-by-step: Partial versioning (same app)

(the file app\[lang]\docs\layout.tsx is already implementated, you just create folders and edit stuff, make the first version 0.1.27, and the second current make it version 1.0.0)

1. **Make a folder per version**
   Create version folders under your docs content and duplicate the relevant pages per version:

```
content/docs/
├─ v1/
│  └─ getting-started.mdx
└─ v2/
   └─ getting-started.mdx
```

This is exactly what the docs call “Partial Versioning.” ([Fumadocs][1])

2. **(Option A – automatic) Show a version switcher via Root Folders**
   If you prefer automatic tabs, add `meta.json` to each version folder:

```json
// content/docs/v1/meta.json
{ "title": "v1", "root": true }

// content/docs/v2/meta.json
{ "title": "v2", "root": true }
```

Root folders render as **Sidebar Tabs** in `<DocsLayout />`. ([Fumadocs][2])

3. **(Option B – manual) Keep your custom tabs (what you chose)**
   Define your own tabs in the docs layout (remember: the tab trigger only shows when the current path matches one of the tab URLs):

```tsx
// app/[lang]/docs/layout.tsx (example)
<DocsLayout
  tree={source.pageTree[lang]}
  sidebar={{
    tabs: [
      { title: "v1", url: `/${lang}/docs/v1` },
      { title: "v2", url: `/${lang}/docs/v2` },
    ],
  }}
>
  {children}
</DocsLayout>
```

- Use locale-aware URLs if you’re using i18n.
- If you want the control visible on additional routes (e.g., `/[lang]/docs`), add `urls: new Set([...])` to a tab.
  (The manual tabs API, activation behavior, and optional `urls` set are shown in the Sidebar docs.) ([Fumadocs][2])

4. **(Optional) Decorate the tabs**
   You can change tab icons/styles via the `sidebar.tabs.transform(option, node)` hook if you want per-version colors or icons. ([Fumadocs][2])

5. **Linking between versions**
   Inside your pages, link to the corresponding path under the target version folder (e.g., `/docs/v2/getting-started`). If you used automatic Root Folders, the page tree and tabs handle scoping to the active version. ([Fumadocs][2])

6. **(For reference) Full versioning is a different model**
   You don’t need this, but the docs also describe “Full Versioning” (separate deploys like `v2.my-site.com`). It’s mentioned only so you know you’re on the supported “partial” path. ([Fumadocs][1])

## Quick checklist

- [ ] Version folders created (`v1`, `v2`) with duplicated/edited pages. ([Fumadocs][1])
- [ ] Either **Root Folders** (`meta.json` + automatic tabs) **or** manual `sidebar.tabs` configured. ([Fumadocs][2])
- [ ] Test on a URL under a tab (e.g., `/docs/v1/...`) so the tab control appears. ([Fumadocs][2])
- [ ] (Optional) Add tab icon/style customization via `transform`. ([Fumadocs][2])

If you want, I can adapt this to your exact repo paths and i18n “hide default locale” setting so the tab URLs always resolve correctly.

[1]: https://fumadocs.dev/docs/ui/versioning "Versioning | Fumadocs"
[2]: https://fumadocs.dev/docs/ui/navigation/sidebar "Sidebar Links | Fumadocs"

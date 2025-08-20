# Step-by-Step Plan to Introduce Internationalization (i18n) to Fumadocs

(execute all the below tasks and read Read https://fumadocs.dev/docs/ui/internationalization.mdx, and https://fumadocs.dev/docs/headless/internationalization.mdx when you get an issue)

## Overview

This plan implements internationalization for your Fumadocs project using the "dir" parser approach with separate language directories for English and French.

## Phase 1: Core Configuration Setup

### 1. Create i18n Configuration File

- **File:** `lib/i18n.ts`
- **Action:** Create new file with i18n configuration
- **Content:**

  ```typescript
  import type { I18nConfig } from "fumadocs-core/i18n";

  export const i18n: I18nConfig = {
    defaultLanguage: "en",
    languages: ["en", "fr"],
    hideLocale: "default-locale", // Hide /en prefix for default language
    parser: "dir", // Use directory-based structure
  };
  ```

### 2. Update Source Configuration

- **File:** `lib/source.ts`
- **Action:** Modify existing file to include i18n config
- **Changes:**
  - Import i18n configuration
  - Add i18n to loader options

### 3. Create Middleware

- **File:** `middleware.ts` (root level)
- **Action:** Create new file for routing middleware
- **Content:** I18n middleware to handle locale routing and redirects

## Phase 2: Directory Structure Restructuring

### 4. Restructure App Directory for Locale Routing

- **Current:** `app/docs/` and `app/(home)/`
- **New:** `app/[lang]/docs/` and `app/[lang]/(home)/`
- **Actions:**
  1. Create `app/[lang]/` directory
  2. Move existing layouts and pages into `[lang]` folder
  3. Keep route handlers (like `api/`) at root level
  4. Update import paths for global.css and other assets

### 5. Restructure Content Directory

- **Current:** `content/docs/index.mdx`, `content/docs/test.mdx`
- **New:** Language-specific directories
- **Structure:**
  ```
  content/
    docs/
      en/
        meta.json
        index.mdx
        test.mdx
      fr/
        meta.json
        index.mdx
        test.mdx
  ```

## Phase 3: Layout and Component Updates

### 6. Update Root Layout

- **File:** `app/[lang]/layout.tsx` (moved from `app/layout.tsx`)
- **Changes:**
  - Accept `lang` parameter from URL
  - Configure RootProvider with i18n settings
  - Add locale and translations support
  - Define translation objects for French

### 7. Update Layout Configuration

- **File:** `app/layout.config.tsx`
- **Changes:**
  - Convert `baseOptions` from object to function
  - Accept locale parameter
  - Return locale-specific configuration

### 8. Update Home Layout

- **File:** `app/[lang]/(home)/layout.tsx`
- **Changes:**
  - Accept and extract `lang` parameter
  - Pass locale to baseOptions function

### 9. Update Docs Layout

- **File:** `app/[lang]/docs/layout.tsx`
- **Changes:**
  - Accept and extract `lang` parameter
  - Pass locale to baseOptions function
  - Use locale-specific page tree: `source.pageTree[lang]`

### 10. Update Docs Page

- **File:** `app/[lang]/docs/[[...slug]]/page.tsx`
- **Changes:**
  - Accept `lang` parameter along with `slug`
  - Pass locale to source methods: `source.getPage(slug, lang)`
  - Update generateStaticParams for locale support
  - Update generateMetadata to handle locale

## Phase 4: Content Creation and Translation

### 11. Create English Content

- **Directory:** `content/docs/en/`
- **Files:**
  - `meta.json` - Navigation structure for English
  - `index.mdx` - Welcome page in English
  - `test.mdx` - Test page in English

### 12. Create French Content

- **Directory:** `content/docs/fr/`
- **Files:**
  - `meta.json` - Navigation structure for French
  - `index.mdx` - Welcome page in French
  - `test.mdx` - Test page in French

### 13. Create UI Translations

- **Location:** In `app/[lang]/layout.tsx`
- **Content:** Translation objects for UI elements (search, navigation, etc.)
- **Languages:** English (default) and French translations

## Phase 5: Search Configuration

### 14. Update Search Route (if using built-in search)

- **File:** `app/api/search/route.ts`
- **Changes:** Configure search to handle multiple languages
- **Note:** This may need locale-specific search indexes

## Phase 6: Navigation and Links

### 15. Update Internal Links

- **Action:** Review and update any hardcoded links
- **Approach:** Use dynamic linking with locale prefixes
- **Tools:** Leverage `fumadocs-core/dynamic-link` for MDX content

### 16. Add Language Switcher

- **Location:** Navigation component
- **Feature:** Allow users to switch between English and French
- **Implementation:** Use locale configuration from RootProvider

## Phase 7: Testing and Validation

### 17. Test URL Routing

- **URLs to test:**
  - `/` (should redirect to `/en`)
  - `/en/docs` (English docs)
  - `/fr/docs` (French docs)
  - `/en/docs/test` (English test page)
  - `/fr/docs/test` (French test page)

### 18. Validate Content Loading

- **Check:** Each language loads correct content
- **Verify:** Navigation works within each locale
- **Test:** Search functionality (if implemented)

### 19. SEO and Metadata Verification

- **Check:** Proper `lang` attribute in HTML
- **Verify:** Locale-specific metadata
- **Test:** URL canonicalization

## Success Criteria

- [ ] Users can navigate to `/en` and `/fr` URLs
- [ ] Content displays in correct language
- [ ] Navigation and UI elements are translated
- [ ] Search works within each locale (if implemented)
- [ ] No broken links or missing content
- [ ] Default language (`en`) accessible without `/en` prefix
- [ ] Language switcher allows easy locale changes

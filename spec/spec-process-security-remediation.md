---
title: Security Remediation — Develop Branch Findings
version: 1.0
date_created: 2026-03-12
last_updated: 2026-03-12
owner: migsilva89
tags: [process, security, infrastructure]
---

# Introduction

This specification documents all security findings identified during a code review of the `develop` branch (diffed against `origin/main`) of the MarkMind landing site. It defines the required remediations, their priority, acceptance criteria, and validation steps so that an AI or developer can resolve every item without ambiguity.

## 1. Purpose & Scope

**Purpose:** Provide a single, actionable reference for fixing every security issue found in the `origin/main...origin/develop` diff before the branch is merged to `main`.

**Scope:**

- Repository: `markmind-landing`
- Branch under review: `develop`
- Files affected: `.gitignore`, `.DS_Store`, `pnpm-lock.yaml`, `next.config.mjs`, `lib/contentful.ts`, `app/api/blog/route.ts`, `.env.example`
- Out of scope: application logic, UI/UX, performance, SEO (except where security intersects)

**Intended audience:** Any developer or AI agent performing the remediation work on this repository.

**Assumptions:**

- The project uses `npm` as its package manager (not pnpm)
- The project deploys to Vercel
- The `develop` branch will be merged into `main` via pull request

## 2. Definitions

| Term | Definition |
|---|---|
| **CORS** | Cross-Origin Resource Sharing — HTTP mechanism that allows a server to indicate which origins may read its responses |
| **JSON-LD** | JSON for Linking Data — structured data format used for SEO schema markup |
| **Source map** | A file that maps minified/bundled production code back to original source code |
| **CDA** | Contentful Delivery API — read-only API for published content |
| **CMA** | Contentful Management API — read/write API for content management (dangerous in client contexts) |
| **CPA** | Contentful Preview API — read-only API for draft/unpublished content |

## 3. Requirements, Constraints & Guidelines

### High Severity

- **REQ-001**: Remove `.DS_Store` from git tracking. The file MUST be added to `.gitignore` and removed from the index without deleting it from the local filesystem.
  - File: `.gitignore`
  - Commands: `echo ".DS_Store" >> .gitignore && git rm --cached .DS_Store`

- **REQ-002**: Remove `pnpm-lock.yaml` from git tracking. The project uses `npm` and `package-lock.json`. A competing lockfile causes dependency resolution confusion and potential supply-chain risk.
  - File: `pnpm-lock.yaml`, `.gitignore`
  - Commands: Add `pnpm-lock.yaml` to `.gitignore` and run `git rm --cached pnpm-lock.yaml`

### Medium Severity

- **REQ-003**: Disable production browser source maps. The `productionBrowserSourceMaps: true` setting in `next.config.mjs` exposes the full original source code (variable names, comments, file paths) to any visitor in production.
  - File: `next.config.mjs`
  - Action: Remove the `productionBrowserSourceMaps: true` line entirely (Next.js defaults to `false`)

- **REQ-004**: Replace top-level `throw` in `lib/contentful.ts` with lazy initialization. The current module-scope guard (`if (!SPACE_ID || !ACCESS_TOKEN) { throw ... }`) crashes the entire application at import time if environment variables are missing. This breaks builds and local development for contributors who do not need the blog subsystem.
  - File: `lib/contentful.ts`
  - Action: Move the env-var validation inside the `getClient()` function so it only throws when a Contentful client is actually requested. The module-level `createClient` calls must also be deferred.
  - Pattern:
    ```typescript
    let _client: ContentfulClientApi<undefined> | null = null
    let _previewClient: ContentfulClientApi<undefined> | null = null

    export const getClient = (preview = false): ContentfulClientApi<undefined> => {
      if (preview) {
        const token = process.env.CONTENTFUL_PREVIEW_TOKEN
        if (!token) throw new Error("Missing CONTENTFUL_PREVIEW_TOKEN env var")
        if (!_previewClient) {
          _previewClient = createClient({
            space: process.env.CONTENTFUL_SPACE_ID!,
            accessToken: token,
            host: "preview.contentful.com",
          })
        }
        return _previewClient
      }

      const spaceId = process.env.CONTENTFUL_SPACE_ID
      const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
      if (!spaceId || !accessToken) {
        throw new Error("Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN env vars")
      }
      if (!_client) {
        _client = createClient({ space: spaceId, accessToken })
      }
      return _client
    }
    ```

- **SEC-001**: Document the CORS development-mode behavior in `app/api/blog/route.ts`. In development (`NODE_ENV === "development"`), any `chrome-extension://` origin is allowed by the CORS policy. This is acceptable for local testing but MUST remain gated behind the `NODE_ENV` check. No code change required — this item is an acknowledgement and documentation requirement only.
  - File: `app/api/blog/route.ts` (line 14)
  - Action: Add an inline comment explaining the dev-only relaxation:
    ```typescript
    // DEV ONLY: Allow any chrome-extension origin for local testing.
    // In production NODE_ENV !== "development", so only the explicit
    // extension ID in ALLOWED_ORIGINS is permitted.
    ```

### Low Severity

- **GUD-001**: Remove `CONTENTFUL_MANAGEMENT_TOKEN` from `.env.example`. The CMA token grants read/write access to the entire Contentful space and is not used anywhere in the application code. Listing it in `.env.example` encourages contributors to generate and store a high-privilege token unnecessarily.
  - File: `.env.example`
  - Action: Delete the `CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here` line

- **GUD-002**: The `dangerouslySetInnerHTML` usage for JSON-LD structured data is properly sanitized. Blog pages escape `<` as `\u003c`. The root layout uses only static data. No action required — this item is recorded as a verified pass.

## 4. Interfaces & Data Contracts

### 4.1 `.gitignore` additions

```gitignore
# macOS metadata
.DS_Store

# pnpm (project uses npm)
pnpm-lock.yaml
```

### 4.2 `next.config.mjs` target state

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
}

export default nextConfig
```

### 4.3 `lib/contentful.ts` target state

```typescript
import { createClient, type ContentfulClientApi } from "contentful"

let _client: ContentfulClientApi<undefined> | null = null
let _previewClient: ContentfulClientApi<undefined> | null = null

export const getClient = (preview = false): ContentfulClientApi<undefined> => {
  if (preview) {
    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const token = process.env.CONTENTFUL_PREVIEW_TOKEN
    if (!spaceId || !token) {
      throw new Error("Missing CONTENTFUL_SPACE_ID or CONTENTFUL_PREVIEW_TOKEN env vars")
    }
    if (!_previewClient) {
      _previewClient = createClient({
        space: spaceId,
        accessToken: token,
        host: "preview.contentful.com",
      })
    }
    return _previewClient
  }

  const spaceId = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!spaceId || !accessToken) {
    throw new Error("Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN env vars")
  }
  if (!_client) {
    _client = createClient({ space: spaceId, accessToken })
  }
  return _client
}
```

### 4.4 `.env.example` target state

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here
CONTENTFUL_PREVIEW_TOKEN=your_preview_token_here
```

## 5. Acceptance Criteria

- **AC-001**: Given the `.gitignore` has been updated, When `git status` is run, Then `.DS_Store` MUST NOT appear as a tracked file.
- **AC-002**: Given the `.gitignore` has been updated, When `git status` is run, Then `pnpm-lock.yaml` MUST NOT appear as a tracked file.
- **AC-003**: Given `next.config.mjs` has been updated, When `npm run build` completes, Then no `.map` files are generated in `.next/static/`.
- **AC-004**: Given `lib/contentful.ts` uses lazy initialization, When the module is imported without `CONTENTFUL_SPACE_ID` or `CONTENTFUL_ACCESS_TOKEN` set, Then no error is thrown at import time.
- **AC-005**: Given `lib/contentful.ts` uses lazy initialization, When `getClient()` is called without `CONTENTFUL_SPACE_ID` or `CONTENTFUL_ACCESS_TOKEN` set, Then an `Error` with a descriptive message is thrown.
- **AC-006**: Given the blog API route, When a request arrives from `chrome-extension://random-id` in production (`NODE_ENV=production`), Then the CORS `Access-Control-Allow-Origin` header MUST be an empty string (request denied).
- **AC-007**: Given `.env.example`, When a contributor reads the file, Then `CONTENTFUL_MANAGEMENT_TOKEN` MUST NOT be listed.

## 6. Test Automation Strategy

- **Test Levels**: Manual verification (git status checks, build output inspection) and optional integration tests.
- **Frameworks**: No additional test framework required. Validation is via CLI commands.
- **CI/CD Integration**:
  - Add a CI step that fails if `.DS_Store` or `pnpm-lock.yaml` are tracked: `git ls-files --error-unmatch .DS_Store pnpm-lock.yaml && exit 1 || true`
  - Add a CI step that greps `next.config.mjs` for `productionBrowserSourceMaps` and fails if found
- **Coverage Requirements**: N/A — these are config/infrastructure changes, not application logic.

## 7. Rationale & Context

| Finding | Rationale |
|---|---|
| `.DS_Store` tracked | Leaks macOS directory structure metadata; adds noise to diffs; universally ignored in open-source projects |
| Dual lockfiles | `pnpm-lock.yaml` + `package-lock.json` can cause CI to resolve different dependency trees depending on the installer used, creating supply-chain ambiguity |
| Source maps in prod | Exposes original source code, internal file paths, and comments to any user who opens browser DevTools — intellectual property and reconnaissance risk |
| Top-level throw in contentful.ts | Module-scope guards prevent the app from starting at all if env vars are missing, even if the blog feature is not needed. This blocks contributors, breaks preview deployments, and violates the principle of graceful degradation |
| CMA token in .env.example | The management token is never referenced in code but its presence in the example file encourages contributors to generate a write-access token and store it locally, increasing the blast radius of any `.env` leak |

## 8. Dependencies & External Integrations

### External Systems
- **EXT-001**: Contentful CDA/CPA — Read-only content delivery for blog posts. Requires `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` environment variables at runtime (not at import time after this fix).

### Infrastructure Dependencies
- **INF-001**: Vercel — Hosting platform. `NODE_ENV` is automatically set to `production` in deployed environments, which gates the CORS dev-mode relaxation (SEC-001).

### Technology Platform Dependencies
- **PLT-001**: Next.js 16.x — Framework. `productionBrowserSourceMaps` is a Next.js-specific config flag (defaults to `false`).
- **PLT-002**: npm — Package manager. `package-lock.json` is the authoritative lockfile.

## 9. Examples & Edge Cases

### Edge Case: Contributor without Contentful credentials

```bash
# Before fix (REQ-004): app crashes at import time
$ npm run dev
Error: Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN env vars

# After fix: app starts normally; error only when navigating to /blog
$ npm run dev
✓ Ready in 2.1s
# Visiting /blog → 500 with clear error in server logs
```

### Edge Case: CORS in production vs development

```typescript
// Production: only the hardcoded extension ID is allowed
// origin: "chrome-extension://some-other-id" → Access-Control-Allow-Origin: ""

// Development: any chrome-extension:// origin is allowed
// origin: "chrome-extension://some-other-id" → Access-Control-Allow-Origin: "chrome-extension://some-other-id"
```

## 10. Validation Criteria

| # | Check | Command / Method | Expected Result |
|---|---|---|---|
| V-001 | `.DS_Store` not tracked | `git ls-files .DS_Store` | Empty output |
| V-002 | `pnpm-lock.yaml` not tracked | `git ls-files pnpm-lock.yaml` | Empty output |
| V-003 | No source maps in prod build | `find .next/static -name "*.map" \| wc -l` | `0` |
| V-004 | Contentful import without env vars | Import `lib/contentful.ts` without env vars set | No error at import time |
| V-005 | Contentful call without env vars | Call `getClient()` without env vars set | Error thrown with descriptive message |
| V-006 | `.env.example` clean | `grep MANAGEMENT_TOKEN .env.example` | No match |
| V-007 | `.gitignore` includes `.DS_Store` | `grep "\.DS_Store" .gitignore` | Match found |
| V-008 | `.gitignore` includes `pnpm-lock.yaml` | `grep "pnpm-lock.yaml" .gitignore` | Match found |

## 11. Related Specifications / Further Reading

- [CLAUDE.md](/CLAUDE.md) — Project rules and conventions
- [Next.js Source Maps Documentation](https://nextjs.org/docs/app/api-reference/next-config-js/productionBrowserSourceMaps)
- [Contentful Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- [OWASP CORS Misconfiguration](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/11-Client-side_Testing/07-Testing_Cross_Origin_Resource_Sharing)

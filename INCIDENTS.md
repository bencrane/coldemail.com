# Incident Log

## [2025-10-03] Vercel Deployment 404 Error

**Error**: 404 NOT_FOUND error on production deployment to Vercel. Site worked locally but failed in production.

**Root Cause**: Next.js 15 deprecated `viewport` and `themeColor` in the Metadata export. These needed to be moved to a separate Viewport export. Additionally, missing explicit Vercel configuration caused routing issues.

**Impact**: Production site inaccessible - showing 404 error instead of landing page

**Decision**: Fix Next.js 15 deprecations and add explicit Vercel configuration

**Rationale**:
- Next.js 15 requires viewport configuration in separate export for proper SSR/SSG
- Explicit vercel.json ensures correct framework detection and build process
- Fixes build warnings that could cause deployment issues
- Maintains compatibility with Vercel's deployment infrastructure

**Action Taken**:
1. Created separate `viewport` export in `app/layout.tsx`
2. Moved `themeColor` and viewport settings from Metadata to Viewport export
3. Added `vercel.json` with explicit Next.js framework configuration
4. Created favicon icons (`app/icon.tsx`, `app/apple-icon.tsx`) for proper branding
5. Tested production build locally - all warnings resolved
6. Deployed to Vercel via GitHub push

**Prevention**:
- Always test production builds locally before deploying (`npm run build`)
- Keep Next.js dependencies updated and follow migration guides for major versions
- Use explicit Vercel configuration for production deployments
- Monitor build logs for deprecation warnings

**Resolution**: Deployed successfully at commit `bdbfe19`

---

## [2025-10-03] Tailwind CSS v4 PostCSS Incompatibility

**Error**: Build failure - `Error: It looks like you're trying to use 'tailwindcss' directly as a PostCSS plugin`

**Root Cause**: npm installed Tailwind CSS v4.1.14 (latest), which moved PostCSS plugin to separate `@tailwindcss/postcss` package. Our `postcss.config.mjs` tried to use the old v3 approach.

**Impact**: Site unable to compile or run locally (HTTP 500 error)

**Decision**: Downgrade to Tailwind CSS v3.4.15

**Rationale**:
- v3 is stable and battle-tested with Next.js 14/15
- v4 is bleeding edge with potential additional breaking changes
- Landing page prioritizes stability over cutting-edge features
- v3 has complete documentation and community support

**Action Taken**:
1. Stopped dev server
2. Uninstalled `tailwindcss@4.1.14`
3. Installed `tailwindcss@3.4.15`
4. Kept existing PostCSS config (works with v3)

**Prevention**: Consider pinning critical dependencies to specific major versions in package.json to avoid automatic breaking upgrades.

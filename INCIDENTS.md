# Incident Log

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

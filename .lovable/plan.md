

## Plan: Fix Favicon — Replace with Bird Logo

### Root Cause
The `index.html` references (`/favicon.png?v=2`, `/favicon.ico?v=2`) are correct, but the actual image files at `public/favicon.png` and `public/favicon.ico` still contain the old lightbulb graphic. They were never overwritten with the bird logo.

### Fix (2 steps)

**Step 1 — Replace favicon files**
- Copy `src/assets/logos/elluminate-logo.png` (the bird logo used in Navbar/Footer) to both `public/favicon.png` and `public/favicon.ico`
- This overwrites the old lightbulb image files with the correct bird logo

**Step 2 — Bump cache-buster in `index.html`**
- Change `?v=2` to `?v=3` on all three favicon references (lines 22-24) to force browsers to re-fetch the new image and bypass cached versions

### Files modified
- `public/favicon.png` — replaced with bird logo
- `public/favicon.ico` — replaced with bird logo
- `index.html` — cache-buster bump `v=2` → `v=3`

### No other changes
- "Explore Services" button stays as-is (confirmed fine by you)


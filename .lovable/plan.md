

## Plan: Replace All Logos with New Elluminate Branding

The user provided three logo assets. Here's how they'll be used:

| Asset | Usage |
|---|---|
| `Elluminate_Logo.png` (bird logo from prior message) | **Primary logo** - Navbar and Footer icon |
| `Elluminate_Words.png` (wordmark with "Take Flight & Shine") | **Full wordmark** - Contact Modal branding panel |
| `Elluminate_Favicon.png` (bird in lightbulb) | **Favicon** |

### Changes

**1. Copy assets into the project**
- `user-uploads://Elluminate_Logo.png` → `src/assets/logos/elluminate-logo.png` (for React imports)
- `user-uploads://Elluminate_Words.png` → `src/assets/logos/elluminate-words.png` (for React imports)
- `user-uploads://Elluminate_Favicon.png` → `public/favicon.png` (for favicon)

**2. Update Navbar (`src/components/Navbar.tsx`)**
- Replace the Lightbulb icon div + "Elluminate" text span with `<img>` of the bird logo (~h-9)
- Remove `Lightbulb` from imports

**3. Update Footer (`src/components/Footer.tsx`)**
- Replace the Lightbulb icon div + text with `<img>` of the bird logo (~h-10)
- Remove `Lightbulb` from imports

**4. Update Contact Modal (`src/components/ContactModal.tsx`)**
- Replace the "elluminate." text branding with `<img>` of the wordmark logo

**5. Update favicon (`index.html`)**
- Change `<link rel="icon">` to point to `/favicon.png`

**6. Update Structured Data (`src/components/StructuredData.tsx`)**
- Change `logo` URL from `favicon.ico` to the new logo path

### Files Modified

| File | Change |
|---|---|
| `src/assets/logos/elluminate-logo.png` | New file (bird logo) |
| `src/assets/logos/elluminate-words.png` | New file (wordmark) |
| `public/favicon.png` | New file (favicon bird) |
| `src/components/Navbar.tsx` | Bird logo image replaces icon+text |
| `src/components/Footer.tsx` | Bird logo image replaces icon+text |
| `src/components/ContactModal.tsx` | Wordmark image replaces text |
| `index.html` | Favicon reference updated |
| `src/components/StructuredData.tsx` | Logo URL updated |


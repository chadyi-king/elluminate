

## Plan: Hero Characters, Logo Sizing, and Layout Fixes

### Summary of Changes

**1. Replace wordmark logo asset (`src/assets/logos/elluminate-words.png`)**
- Copy the newly uploaded `Elluminate_Words-2.png` to replace the existing wordmark

**2. Logo sizing increases**
| Location | Current | New |
|---|---|---|
| Navbar (`Navbar.tsx`) | `h-16` | `h-32` (~2x) |
| Footer (`Footer.tsx`) | `h-28` | `h-56` (~2x) |
| Contact Modal (`ContactModal.tsx`) | `h-36` | `h-48` + use new wordmark asset |

**3. Hero Characters (`HeroCharacters.tsx`) — major rework**
- **3x size increase**: From ~180x330 to ~540x900 (scaled proportionally)
- **Remove flip** on right-side characters (user already flipped images, they point left naturally)
- **Reposition bottom characters** to overlap slightly with top characters (head/shoulders cover the cut-off of top figures)
- **Add fade-to-white gradient** at the bottom of each character to mask the cut-off edges, using a CSS gradient overlay that transitions from transparent to white
- **Hover effect**: Duotone filter transitions to original colors (`filter: none`) + a colored glow behind the character matching their primary color (blue/red/green/yellow)

**4. Remove ServicePills from hero (`HeroSection.tsx`)**
- Remove `<ServicePills />` component and its import
- Remove `mb-10` gap below CTA buttons (shift everything up)

**5. Bottom character masking**
- Add a gradient overlay div at the bottom of each character container that fades from transparent to the page background color (white), so the cut-off bottom edges blend seamlessly

### Files Modified

| File | Change |
|---|---|
| `src/assets/logos/elluminate-words.png` | Replace with new uploaded wordmark |
| `src/components/Navbar.tsx` | Logo `h-16` → `h-32` |
| `src/components/Footer.tsx` | Logo `h-28` → `h-56` |
| `src/components/ContactModal.tsx` | Wordmark `h-36` → `h-48` |
| `src/components/hero/HeroCharacters.tsx` | 3x size, remove flip, overlap positioning, fade-to-white bottom mask, hover glow + full color transition |
| `src/components/HeroSection.tsx` | Remove `<ServicePills />` import and usage |


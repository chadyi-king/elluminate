## Plan: Fix Navbar Styling and Hero Character Hover Zones

### Problem Analysis

1. **Navbar**: Has `top-[10px]` gap, `backdrop-blur-lg`, and font needs to be smaller with more letter-spacing
2. **Hero characters**: Red woman (480×820) and yellow boy (440×780) containers are enormous. Positioned from `bottom`, their divs extend upward and cover the blue/green characters entirely, stealing all hover events. The fix is to shrink the container heights so only the visible portion of red/yellow has pointer events, allowing blue/green to receive hover.

### 1. Navbar (`Navbar.tsx`)

- Change `top-[10px]` → `top-0` (remove gap above)
- Replace `backdrop-blur-lg` with `bg-white` (pure white, no blur)
- Add `pt-[10px]` from the top of the nav to push logo content down slightly inside the bar
- Reduce nav link font: `text-sm` → `text-xs` and add `tracking-[0.15em]` for letter spacing
- Keep `h-20` container height so logo isn't clipped

### 2. Hero Character Hit Zones (`HeroCharacters.tsx`)

- **Red woman**: Reduce container from `{ w: 480, h: 820 }` to `{ w: 480, h: 500 }` — keeps the visible lower portion but stops the div from reaching up into blue man's zone
- **Yellow boy**: Reduce from `{ w: 440, h: 780 }` to `{ w: 440, h: 480 }` — same approach
- Keep `bottom-[-18%]` positioning so the image still appears in the same visual spot
- Change `object-contain object-bottom` ensures the image anchors to the bottom of the smaller container, showing the same visible portion
- Blue man and green woman containers will be same height as red woman and now receive hover events properly since red/yellow no longer overlap them

### Files Modified


| File                                     | Change                                                      |
| ---------------------------------------- | ----------------------------------------------------------- |
| `src/components/Navbar.tsx`              | Remove gap/blur, white bg, smaller font with letter-spacing |
| `src/components/hero/HeroCharacters.tsx` | Shrink red/yellow container heights to fix hover zones      |

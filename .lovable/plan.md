## Plan: Fix Hero Characters, Contact Modal, and Hover Effects

### Problem Analysis

The characters are already positioned as separate absolute divs (not columns), so hover should work independently. The issue is positioning — blue/green heads need to be at "IGNITE THE" text level, and red/yellow need to be lower and less out-of-frame. Their bodies and faces need to be seen, just like how the blue and green humans are at. Only part out of frame is just a small portion of the body so it doesnt look so cut The glow is too intense on red/yellow. Contact modal needs wordmark size reduction and email fix.

### 1. Hero Characters (`HeroCharacters.tsx`) — Repositioning


| Character                 | Current Position             | New Position                                                        |
| ------------------------- | ---------------------------- | ------------------------------------------------------------------- |
| Blue man (top-left)       | `left-[-6%] top-[-8%]`       | `left-[-4%] top-[-15%]` — shift up so head is at "IGNITE THE" level |
| Green woman (top-right)   | `right-[-6%] top-[-8%]`      | `right-[-4%] top-[-15%]` — same vertical as blue man                |
| Red woman (bottom-left)   | `left-[-16%] bottom-[-18%]`  | `left-[-4%] bottom-[-18%]` — shift less left (was too far)          |
| Yellow boy (bottom-right) | `right-[-16%] bottom-[-18%]` | `right-[-4%] bottom-[-18%]` — shift less right (was too far)        |


- Reduce glow opacity on red/yellow by ~20% (from `0.45` to `0.35`)
- Verify each character has independent hover (they already use separate `useState` — will confirm this works)

### 2. Contact Modal (`ContactModal.tsx`)

- Reduce wordmark from `h-36` to `h-24` (~70% size)
- Wordmark aligned to left with the texts
- Change email from `hello@elluminate.sg` to `info@elluminate.sg`
- Make "Plan My Event" CTA button text uppercase (already in Navbar, need to check modal header)

### 3. Navbar CTA (`Navbar.tsx`)

- Make "Plan My Event" button text all caps: `PLAN MY EVENT`

### Files Modified


| File                                     | Change                                                 |
| ---------------------------------------- | ------------------------------------------------------ |
| `src/components/hero/HeroCharacters.tsx` | Reposition all 4 characters, reduce glow on red/yellow |
| `src/components/ContactModal.tsx`        | Wordmark `h-36` → `h-24`, email → `info@elluminate.sg` |
| `src/components/Navbar.tsx`              | "Plan My Event" → uppercase                            |

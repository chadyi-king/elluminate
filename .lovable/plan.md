## Upload service videos

Copy the 6 uploaded MP4s into `public/videos/` using slug-based filenames. No code, components, or service pages will be touched, and no existing videos will be replaced.

### Files to add

| Source upload | Destination |
|---|---|
| `user-uploads://amazing-race.mp4` | `public/videos/amazing-race.mp4` |
| `user-uploads://builders-cross.mp4` | `public/videos/builders-cross.mp4` |
| `user-uploads://monopoly-dash.mp4` | `public/videos/monopoly-dash.mp4` |
| `user-uploads://mtwi.mp4` | `public/videos/mtwi.mp4` |
| `user-uploads://running-man.mp4` | `public/videos/running-man.mp4` |
| `user-uploads://sotong-game.mp4` | `public/videos/sotong-game.mp4` |

### Notes
- None of the new filenames collide with existing files in `public/videos/` (e.g. existing `amazing-race-decathlon.mp4` is preserved).
- All original `.mp4` formats preserved; no conversion.
- No code, service pages, or components modified.

## Upload service thumbnails

Create `public/images/service-thumbnails/` and copy the 6 uploaded thumbnails into it, preserving each original format. No code, components, or service pages will be touched.

### Files to add

| Source upload | Destination |
|---|---|
| `user-uploads://amazing-race-tn.PNG` | `public/images/service-thumbnails/amazing-race-tn.png` |
| `user-uploads://builders-cross-tn.jpg` | `public/images/service-thumbnails/builders-cross-tn.jpg` |
| `user-uploads://monopoly-dash-tn.jpg` | `public/images/service-thumbnails/monopoly-dash-tn.jpg` |
| `user-uploads://mtwi-tn.png` | `public/images/service-thumbnails/mtwi-tn.png` |
| `user-uploads://running-main-tn.png` | `public/images/service-thumbnails/running-man-tn.png` (filename normalized to `running-man-tn` per your naming convention) |
| `user-uploads://sotong-game-tn.jpg` | `public/images/service-thumbnails/sotong-game-tn.jpg` |

### Notes
- The `amazing-race-tn.PNG` extension will be lowercased to `.png` for consistency with the rest of `/public/images/`.
- The uploaded file `running-main-tn.png` appears to be a typo of `running-man-tn` (the image shows "RUNNING MAN ADVENTURE"); saving it as `running-man-tn.png` to match your naming convention. Let me know if you'd rather keep `running-main-tn.png`.
- No existing files will be modified or replaced.

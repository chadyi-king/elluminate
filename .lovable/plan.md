## Wire real videos + thumbnails into 5 service pages

Note on paths: `/videos/builders-cross.mp4`, `monopoly-dash.mp4`, `running-man.mp4`, and `sotong-game.mp4` were externalized to the CDN — only `.asset.json` pointers exist at those literal paths, so the raw `/videos/*.mp4` URL returns 404. I'll swap in each file's CDN URL from its pointer (same approach used for Amazing Race). `mtwi.mp4` is a real file on disk and can stay as `/videos/mtwi.mp4`.

### Edits in `src/data/servicesData.ts`

**Builders Cross** (lines 7800–7801)
- `videoUrl`: `/__l5e/assets-v1/907ab204-8b56-4c6b-bfd9-48f917586db7/builders-cross.mp4`
- `thumbnailImage`: `/images/service-thumbnails/builders-cross-tn.jpg`

**Minute To Win It** (lines 8474–8475)
- `videoUrl`: `/videos/mtwi.mp4`
- `thumbnailImage`: `/images/service-thumbnails/mtwi-tn.png`

**Monopoly Dash** (lines 8817–8818)
- `videoUrl`: `/__l5e/assets-v1/0199ba31-5e1b-4891-b4af-d271f59a62dc/monopoly-dash.mp4`
- `thumbnailImage`: `/images/service-thumbnails/monopoly-dash-tn.jpg`

**Running Man Adventure** (lines 9486–9487)
- `videoUrl`: `/__l5e/assets-v1/1f7d858a-40c7-493e-ad1d-b239c73cc6fe/running-man.mp4`
- `thumbnailImage`: `/images/service-thumbnails/running-man-tn.png`

**Sotong Game** (lines 9822–9823)
- `videoUrl`: `/__l5e/assets-v1/9ec7b422-594f-44fd-9abc-6ff7b15f0413/sotong-game.mp4`
- `thumbnailImage`: `/images/service-thumbnails/sotong-game-tn.jpg`

No other changes. Component, layout, animations, FAQs, and copy stay untouched. Verify with `bun run build`.

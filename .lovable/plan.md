## Plan

1. **Correct the broken Sotong Game video URL**
   - Update Sotong Game from the invalid `/video/sotong-game.mp4` path to its uploaded CDN video URL:
     - `/__l5e/assets-v1/9ec7b422-594f-44fd-9abc-6ff7b15f0413/sotong-game.mp4`
   - Keep its existing thumbnail unchanged because it is already correct.

2. **Confirm the other three video mappings stay matched to their uploaded files**
   - Builders Cross:
     - Video: `/__l5e/assets-v1/907ab204-8b56-4c6b-bfd9-48f917586db7/builders-cross.mp4`
     - Thumbnail: `/images/service-thumbnails/builders-cross-tn.jpg`
   - Monopoly Dash:
     - Video: `/__l5e/assets-v1/0199ba31-5e1b-4891-b4af-d271f59a62dc/monopoly-dash.mp4`
     - Thumbnail: `/images/service-thumbnails/monopoly-dash-tn.jpg`
   - Running Man Adventure:
     - Video: `/__l5e/assets-v1/1f7d858a-40c7-493e-ad1d-b239c73cc6fe/running-man.mp4`
     - Thumbnail: `/images/service-thumbnails/running-man-tn.png`

3. **Fix the “need to refresh before video/button works” issue in the shared service video component**
   - Keep the current layout, styling, animation, spacing, thumbnails, and responsive behavior unchanged.
   - Add a video ref and controlled playback lifecycle so the click directly loads and plays the video after the element is mounted.
   - Add safe loading/error handling so the play button does not get stuck if a video URL fails.
   - Use the same component for all affected service pages, including Amazing Race, without changing page copy or FAQ content.

4. **Verify only the intended pages are affected**
   - Check the four service pages in the preview:
     - Builders Cross
     - Monopoly Dash
     - Running Man Adventure
     - Sotong Game
   - Confirm thumbnail is visible, click works without refresh, and the video starts loading/playing.
   - Run a build check after the code changes.
## Update Cloudinary Credentials

Your old Cloudinary account was deleted, causing the "disabled customer" 401 errors. We'll swap in the credentials from your new Cloudinary account.

### What I'll do

1. **Trigger the secure secret-update form** for the three existing Cloudinary secrets:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

   You'll get a popup to paste each new value. Lovable stores them encrypted — I never see them.

2. **Verify** by calling the `cloudinary-folder` edge function (e.g. `?folder=website/client-logo`) and confirming it returns assets instead of a 401.

3. **No code changes needed.** The edge function already reads these from environment variables, so once updated, everything works immediately (no redeploy required).

### What you'll need ready

From your new Cloudinary console (https://cloudinary.com/console), grab from the Dashboard:
- **Cloud name** (top of dashboard)
- **API Key**
- **API Secret** (click "reveal")

### Important note about asset URLs

If the new Cloudinary account has a **different cloud name**, all hardcoded image URLs in the codebase that point to `res.cloudinary.com/<OLD_CLOUD_NAME>/...` will 404 until the assets are re-uploaded to the new account under matching folder paths (e.g. `website/client-logo`, etc.). The folder-listing function will work, but individual asset URLs won't unless:
- (a) the new cloud name is the same, OR
- (b) you re-upload assets into the new account using the same folder structure.

Let me know if the cloud name is changing — if so, after credentials are updated I can do a sweep of hardcoded `res.cloudinary.com/<old>/...` references and update them to the new cloud name.

Click **Implement plan** to proceed and I'll open the secret-update form.
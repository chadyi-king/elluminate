

## Plan: Create Cloudinary Folder API Endpoint

### Overview
Create a backend function that securely fetches assets from a Cloudinary folder, keeping API credentials server-side only.

### Steps

**1. Add Cloudinary secrets**
- Request three secrets via the secrets tool: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- These will be available as environment variables in the backend function

**2. Create edge function `supabase/functions/cloudinary-folder/index.ts`**
- Accept `folder` query parameter
- Use Cloudinary's Admin API (`/resources/search`) via REST (since Deno doesn't support the Node.js SDK directly) to search assets by folder
- Return only: `secure_url`, `public_id`, `width`, `height`, `format`
- Include CORS headers for frontend access
- Validate the `folder` parameter, return 400 if missing

**3. Frontend usage pattern**
- Call via `supabase.functions.invoke('cloudinary-folder', { body: { folder } })` or construct the URL using the project ID
- No secrets exposed to the client

### Technical details
- **No Node.js SDK**: Edge functions run on Deno, so we'll use Cloudinary's REST API directly (`https://api.cloudinary.com/v1_1/{cloud}/resources/search`) with Basic Auth (`API_KEY:API_SECRET`)
- The search expression will be `folder:{folderName}/*` with `max_results=500`
- Response will be mapped to return only the five requested fields

### Files
- `supabase/functions/cloudinary-folder/index.ts` (new)




## Plan: Strengthen Cloudinary Logo Matching

### Problem
The current matching requires an exact normalized match between brand name and Cloudinary `public_id`, which fails for most logos since filenames contain extra words like "Bank", "Logo", "Corporation", etc.

### Solution
Replace the simple exact-match with a two-tier approach:

1. **Explicit mapping table** — a hardcoded dictionary mapping each brand name to its known Cloudinary filename fragment (as provided by the user). This guarantees matches for all 24 brands.

2. **Fuzzy fallback** — for any brand not in the map, strip noise words (`logo`, `bank`, `group`, `corporation`, `limited`, `plc`, `singapore`) from both sides, then check if either normalized string contains the other (partial match both ways).

### Changes

**File: `src/components/SocialProofSection.tsx`**

- Add an explicit brand-to-filename map:
```ts
const brandToFilename: Record<string, string> = {
  "DBS": "dbs_bank_logo",
  "OCBC": "logo-ocbc",
  "UOB": "uob_logo",
  "Singtel": "singtel_logo",
  "Grab": "singapore-grab-logo",
  "Shopee": "shopee",
  "NTUC": "ntuc_logo",
  "GovTech": "govtech_logo",
  "Sentosa": "sentosa-logo",
  "SP Group": "sp_group_logo",
  "SMRT": "smrt_corporation_logo",
  "Prudential": "prudentialgroup_logo",
  "Marina Bay Sands": "marina_bay_sands_logo",
  "CapitaLand": "capitaland_logo",
  "Singapore Airlines": "singapore_airlines_logo",
  "Changi Airport": "changi_logo",
  "StarHub": "starhub_logo",
  "POSB": "posb_logo",
  "Great Eastern": "great_eastern_logo",
  "AIA": "aia-logo",
  "HSBC": "hsbc",
  "Standard Chartered": "standard_chartered_logo",
  "Maybank": "maybank_logo",
  "M1": "m1_logo",
};
```

- Replace the matching logic inside the `useEffect` with:
  1. First try explicit map: normalize the map value and compare against normalized `public_id` filename (partial contains both ways).
  2. If no explicit match, try fuzzy: strip noise words from both brand name and filename, then check partial containment.

- No changes to layout, styling, carousel, or fallback behavior.

### Files modified
- `src/components/SocialProofSection.tsx` — matching logic only (lines 33, 67–78)


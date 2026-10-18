# Elluminate offline ads draft pack (KOTLER-LOVABLE-DRAFT-TRIAL-20261019)

Offline draft only. No live changes, no budget, no launch. Approving this plan does not authorise any campaign change.

Evidence ledger (short): page list and page titles read from project files only (source). Homepage H1 and title mix team building, retreats and training, so it is a weak match for "corporate team building" searches. `/services/team-building` exists in source but is not recommended as a switch. No live page rendering or Keyword Planner data was checked.

```json
{
  "brand": "Elluminate (elluminate.sg)",
  "project_id": "04c8a568-2d2e-4a26-b58c-143d4ef0a9f1",
  "inspected_sources": [
    {"path": "src/App.tsx", "status": "SOURCE_ONLY", "note": "Routes /, /services/team-building, /services/:slug, /thank-you-contact exist in source"},
    {"path": "src/data/seoRoutes.js", "status": "SOURCE_ONLY", "note": "Homepage H1 'Team Building, Company Retreats & Training in Singapore'; title 'Team Building and Company Experiences Singapore | Elluminate'"},
    {"path": "src/data/serviceCommercialProfiles.js", "status": "SOURCE_ONLY", "note": "Physical from SGD 45-55/pax, minimum 10, 3-4h, lead time 2 weeks"},
    {"path": "docs/google-ads-approval-sheet-2026-07.md", "status": "SOURCE_ONLY_HISTORICAL", "note": "Campaign 23854777096 snapshot dated 15 Jul 2026; not re-read from provider"},
    {"path": "docs/google-ads-final-url-map.md", "status": "SOURCE_ONLY_SUPERSEDED", "note": "Maps to /services/team-building; owner decision now uses https://elluminate.sg/"},
    {"path": "docs/forger/TRUTH_AND_ASSET_REGISTER.md", "status": "SOURCE_ONLY", "note": "Shared-history claims need qualification"},
    {"path": "src/lib/trackingConfig.ts", "status": "SOURCE_ONLY", "note": "Default IDs present in code; not independently verified against provider"},
    {"path": "public/images/services/*", "status": "SOURCE_ONLY", "note": "Folder list read; images not viewed"},
    {"url": "https://elluminate.sg/", "status": "NOT_LIVE_VERIFIED", "note": "No live render done in this turn"}
  ],
  "native_ads_capability": {
    "google_ads": "Tools exist in this session (list accounts, setup, search, mutate) but NOT_ATTEMPTED by design; connection state unknown",
    "meta_ads": "Tools exist (list accounts, setup) but NOT_ATTEMPTED; connection state unknown",
    "keyword_planner": "UNAVAILABLE in this run; no volume or CPC data",
    "semrush": "Available but NOT_ATTEMPTED"
  },
  "evidence_ledger": [
    {"fact": "Homepage mixes team building, retreats and training", "source": "seoRoutes.js", "confidence": "SOURCE"},
    {"fact": "Physical activities start at SGD 45/pax", "source": "serviceCommercialProfiles.js + seoRoutes.js", "confidence": "SOURCE; owner-confirmation needed"},
    {"fact": "Physical catalogue: Amazing Race, CSI Bones, Cultural Race, Amongst Us, Alice in Motherland, Battle of the Olympians, Builder Cross, Minute To Win It, Running Man, Sotong Game, Treasure Heist, Archery Tag, Gel Blitz, Nerf War, Laser Tag", "source": "serviceCommercialProfiles.js", "confidence": "SOURCE"},
    {"fact": "Indoor and outdoor/sheltered options listed per activity", "source": "serviceCommercialProfiles.js", "confidence": "SOURCE"},
    {"fact": "Campaign 23854777096 exists, Search, Maximise Conversions, 0 reported conversions May-Jul 2026", "source": "approval sheet (historical)", "confidence": "HISTORICAL; not a proof of current tracking failure"}
  ],
  "candidate_ranking": [
    {"rank": 1, "service": "Corporate team building (physical)", "reason": "Core brand keyword, existing campaign lane"},
    {"rank": 2, "service": "Corporate team bonding (physical)", "reason": "Same buyer, different wording"},
    {"rank": 3, "service": "Indoor team building activities", "reason": "Deferred; would split intent"},
    {"rank": 4, "service": "Retreats / training", "reason": "Excluded by brief; belong elsewhere"}
  ],
  "campaign_drafts": [
    {
      "name": "PROPOSED IN-PLACE ALTERNATIVE for campaign 23854777096 (no new campaign)",
      "market": "Singapore, English",
      "objective": "Genuine corporate enquiries from HR and admin buyers",
      "status": "OFFLINE_DRAFT_ONLY",
      "budget": "UNASSIGNED",
      "bidding_recommendation_and_reason": "Keep existing strategy untouched. Only after the enquiry conversion is verified as server-confirmed and isolated (Elluminate-only goal), consider Maximise Conversions on that goal. Until then, judgement is UNKNOWN.",
      "settings_recommendation": "Search network only, no Display or Search Partners, Singapore presence targeting, English, exact and phrase match only, AI Max, broad match, auto-created assets and final URL expansion OFF.",
      "ad_groups": [
        {
          "name": "Corporate Team Building",
          "buyer_intent": "HR/admin planning a company physical team building event",
          "final_url": "https://elluminate.sg/",
          "url_verification": "Route exists in source; live render NOT verified; homepage relevance is mixed",
          "keywords": [
            {"text": "corporate team building singapore", "match_type": "EXACT"},
            {"text": "corporate team building singapore", "match_type": "PHRASE"},
            {"text": "corporate team building", "match_type": "EXACT"},
            {"text": "company team building singapore", "match_type": "PHRASE"},
            {"text": "team building for companies", "match_type": "PHRASE"},
            {"text": "corporate team building activities", "match_type": "PHRASE"},
            {"text": "team building company singapore", "match_type": "EXACT"}
          ],
          "rsa": {
            "headlines": [
              "Corporate Team Building SG",
              "Team Building For Companies",
              "Facilitated Team Building",
              "Indoor Or Outdoor Formats",
              "Plan Around Your Team's Goal",
              "Share Your Date, Pax And Goal",
              "Get A Corporate Quote",
              "Team Building In Singapore",
              "Physical Team Activities",
              "Elluminate Team Building",
              "Activities Run By Facilitators",
              "Races, Mysteries And Arenas",
              "Built For HR And Admin Teams",
              "Indoor Options If It Rains",
              "Request A Team Building Quote"
            ],
            "descriptions": [
              "Share your date, pax and goal. We suggest physical activities that fit your team.",
              "Facilitated indoor and outdoor team building for companies in Singapore.",
              "Tell us your venue preference and we will shape a corporate quote around your brief.",
              "Races, mysteries and arena games, run by our facilitators from briefing to scoring."
            ],
            "path1": "team-building",
            "path2": "singapore",
            "pins": []
          },
          "rationale": "Mirrors the planner-relief promise (date, pax, goal, facilitation, indoor/outdoor, quote) with no proof claims."
        },
        {
          "name": "Corporate Team Bonding",
          "buyer_intent": "HR/admin seeking a staff bonding activity",
          "final_url": "https://elluminate.sg/",
          "url_verification": "Same as above; homepage does not use the word 'bonding' in H1 or title",
          "keywords": [
            {"text": "corporate team bonding singapore", "match_type": "EXACT"},
            {"text": "corporate team bonding", "match_type": "PHRASE"},
            {"text": "team bonding activities singapore", "match_type": "PHRASE"},
            {"text": "company team bonding", "match_type": "PHRASE"},
            {"text": "staff bonding activities singapore", "match_type": "PHRASE"},
            {"text": "team bonding for companies", "match_type": "EXACT"}
          ],
          "rsa": {
            "headlines": [
              "Corporate Team Bonding SG",
              "Team Bonding For Companies",
              "Facilitated Team Bonding",
              "Team Bonding In Singapore",
              "Indoor Or Outdoor Bonding",
              "Bonding Activities For Staff",
              "Share Your Date, Pax And Goal",
              "Get A Corporate Quote",
              "Plan Around Your Team's Goal",
              "Physical Team Activities",
              "Elluminate Team Bonding",
              "Activities Run By Facilitators",
              "Built For HR And Admin Teams",
              "Bring Departments Together",
              "Request A Team Bonding Quote"
            ],
            "descriptions": [
              "Company team bonding in Singapore, planned around your date, pax and team goal.",
              "Facilitated physical activities, indoor or outdoor, to fit your venue and group.",
              "Send your brief and get a corporate quote shaped around your team's needs.",
              "From briefing to scoring, our facilitators run the activity so you can join in."
            ],
            "path1": "team-bonding",
            "path2": "corporate",
            "pins": []
          },
          "rationale": "Separate wording group so bonding searches see bonding language."
        }
      ],
      "negative_keywords": ["school", "student", "kids", "birthday", "party", "community", "retreat", "training", "workshop", "course", "jobs", "career", "free", "cheap", "ideas", "pdf", "virtual", "online", "golf", "cocktail", "pickleball", "barista"],
      "assets": {
        "sitelinks": [
          {"text": "Request A Quote", "description1": "Share date, pax and goal", "description2": "Get a corporate quote", "final_url": "https://elluminate.sg/"},
          {"text": "Indoor Activities", "description1": "Mysteries and indoor games", "description2": "Not weather-dependent options", "final_url": "https://elluminate.sg/"},
          {"text": "Outdoor Activities", "description1": "Races and arena games", "description2": "Sheltered backup planned", "final_url": "https://elluminate.sg/"},
          {"text": "How We Plan", "description1": "Tell us your team goal", "description2": "Facilitators run the day", "final_url": "https://elluminate.sg/"}
        ],
        "sitelinks_risk": "All four share one URL per owner decision; Google may reject or limit duplicate-destination sitelinks. NOT launch-ready until distinct existing routes or anchors are approved.",
        "callouts": ["Facilitated Activities", "Indoor Or Outdoor", "Corporate Quotes", "Scoring Included", "Materials Provided", "Singapore Based"],
        "structured_snippet": {"header": "Types", "values": ["Amazing Race", "CSI Bones", "Running Man", "Archery Tag", "Treasure Heist", "Battle Of The Olympians"]}
      },
      "launch_conditions": ["Owner approval", "Enquiry conversion verified server-confirmed and Elluminate-only", "Homepage relevance accepted or improved", "Sitelink destinations resolved", "Policy and character check in provider", "Budget assigned by owner"]
    }
  ],
  "meta_drafts": [
    {
      "name": "Planner relief",
      "buyer": "HR/admin organising a company activity",
      "primary_text": "Planning your next company team building? Tell us your date, pax and goal. We suggest indoor or outdoor activities and our facilitators run the day.",
      "headline": "Corporate Team Building, Planned",
      "description": "Share your brief for a quote",
      "cta": "GET_QUOTE",
      "final_url": "https://elluminate.sg/",
      "visual_source_or_required_asset": "public/images/services/amazing-race/ and team-building-gallery (owned; rights to show participants must be confirmed)",
      "storyboard_15s": [
        {"seconds": "0-3", "visual": "Office desk, planner with blank calendar", "spoken_or_overlay": "Planning team building?"},
        {"seconds": "3-8", "visual": "Owned clips: Amazing Race outdoor, CSI Bones indoor", "spoken_or_overlay": "Indoor or outdoor, run by facilitators"},
        {"seconds": "8-12", "visual": "Team scoring moment", "spoken_or_overlay": "Share date, pax and goal"},
        {"seconds": "12-15", "visual": "Logo end card", "spoken_or_overlay": "Get a corporate quote"}
      ],
      "objective": "OUTCOME_LEADS, website, LEAD event",
      "readiness": "DEFER: Meta pixel and server-confirmed lead event not verified; no Meta account access checked"
    },
    {
      "name": "Indoor option for any weather",
      "buyer": "Admin worried about rain or venue",
      "primary_text": "Rain on the day? Choose indoor team building like mystery and heist games, or an outdoor race with a sheltered backup. Send your brief for a corporate quote.",
      "headline": "Indoor Or Outdoor Team Building",
      "description": "Built around your venue",
      "cta": "LEARN_MORE",
      "final_url": "https://elluminate.sg/",
      "visual_source_or_required_asset": "public/videos/csi-bones.mp4.asset.json, public/images/services/treasure-heist/ (owned); asset-needed: short weather transition clip",
      "storyboard_15s": [
        {"seconds": "0-3", "visual": "Rain on window (asset needed)", "spoken_or_overlay": "Rain on event day?"},
        {"seconds": "3-9", "visual": "Owned CSI Bones indoor footage", "spoken_or_overlay": "Indoor mysteries and heists"},
        {"seconds": "9-12", "visual": "Owned outdoor race footage", "spoken_or_overlay": "Or outdoor, with a backup"},
        {"seconds": "12-15", "visual": "End card", "spoken_or_overlay": "Send your brief"}
      ],
      "objective": "OUTCOME_LEADS, website, LEAD event",
      "readiness": "DEFER: same as above; no AI UGC posing as customers"
    }
  ],
  "asset_plan": {
    "reuse": ["public/videos/amazing-race.mp4.asset.json", "public/videos/csi-bones.mp4.asset.json", "public/videos/running-man.mp4.asset.json", "public/videos/archery-tag.mp4.asset.json", "public/images/services/amazing-race/", "public/images/services/treasure-heist/", "public/images/services/team-building-gallery/"],
    "limits": "Participant consent for ads use and client logo permissions unverified; images not viewed this turn",
    "production_briefs": ["Square and 9:16 crops of real event photos with no text overlay", "3s weather transition clip"]
  },
  "claim_register": [
    {"claim": "From $45/pax", "status": "Source only; homepage and team-building page list prices; not used in ads", "conflict": "Activities range 45-55; ensure ads never imply single price"},
    {"claim": "4.8/5, 800+ reviews", "status": "Team Elevate profile, not Elluminate; NOT used"},
    {"claim": "1,000+ events, 100,000+ participants, 8+ years", "status": "Shared history; banned by brief; NOT used"},
    {"claim": "24h quote", "status": "Banned; removed"},
    {"claim": "Facilitators, materials, scoring included", "status": "Source inclusions list; owner to confirm"}
  ],
  "measurement_plan": {
    "success_event": "Fire only after the enquiry is confirmed saved by the server, with a unique lead ID as transaction ID",
    "attribution_checks": "Verify gclid/gbraid/wbraid capture and consent route; verify no duplicate fire on refresh or thank-you revisit",
    "layers": "Website event fired vs provider received vs attributed conversion are reported separately",
    "primary_secondary": "Elluminate enquiry primary only; GA4 generate_lead, calls, WhatsApp and email clicks secondary",
    "manual_reconciliation": "Weekly match of manual enquiries (business truth) to click IDs; no Google credit without evidence",
    "review_schedule": {"72h": "Delivery, search terms, disapprovals", "7d": "Negatives, query match, enquiry receipt", "14d": "Qualified enquiries vs spend, keep or pause decision"},
    "tests_performed": "NONE"
  },
  "blockers": ["Tracking IDs not independently verified", "Homepage relevance mixed for physical team building", "Sitelinks share one URL", "No Keyword Planner data: volume, CPC, CPL UNKNOWN; need Singapore Keyword Planner export for listed keywords", "Live page render not verified"],
  "deferred_items": ["Budget", "Meta campaigns", "YouTube storyboard production", "Broad, AI Max, PMax, Demand Gen, Shopping (LOCKED)", "Competitor research"],
  "no_mutation_confirmation": {
    "code_written": false,
    "provider_entities_written": false,
    "budget_set": false,
    "launched": false,
    "only_file_written": ".lovable/plan.md",
    "unverified": ["Live site rendering", "Current campaign state", "Tracking IDs", "Image rights", "Prices and inclusions with owner"]
  }
}
```

Homepage relevance (candid): the homepage headline sells three things at once, which may lower ad relevance and enquiry quality for physical team building searches. No edit proposed here.

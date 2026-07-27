# Google Ads Final URL Map

Use the dedicated parent landing page for each service campaign.

| Campaign lane | Final URL | Search intent |
| --- | --- | --- |
| Corporate team building | `https://elluminate.sg/services/team-building` | Corporate team building Singapore |
| Company retreats | `https://elluminate.sg/services/retreats` | Company retreats, offsites and retreat planning |
| Corporate training | `https://elluminate.sg/services/training` | Corporate training, workshops and team profiling |

## Tracking

Google auto-tagging should remain enabled so the site can capture `gclid`, `gbraid`, `wbraid` and `gad_source`.

If campaign reporting also uses manual UTM parameters, apply them through the Google Ads Final URL suffix instead of creating duplicate landing-page URLs:

`utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}`

The enquiry form stores the landing page, submission page, Google click identifiers and UTM values with the saved lead. The `generate_lead` event and Google Ads conversion event fire only after the lead insert succeeds.

## Live account boundary

This map defines and tests the website destinations. Updating an enabled Google Ads campaign is a separate live account action and should be performed only after its current ad and asset URLs have been read back and compared with this map.

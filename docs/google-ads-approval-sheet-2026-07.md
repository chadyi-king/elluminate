# Elluminate Google Ads Approval Sheet

Prepared 15 July 2026. This document records read-only findings and proposed changes for owner approval. No campaign, budget, bid, keyword, ad, goal, or conversion setting was changed during the website rebuild.

## Verified Account State

| Item | Verified state |
| --- | --- |
| Google Ads account | `650-464-0211` |
| Campaign | `EL | Corporate Physical Team Building` (`23854777096`) |
| Campaign type and bidding | Search; Maximise Conversions |
| Review period | 15 May to 15 July 2026 |
| Delivery | 3,870 impressions, 233 clicks, SGD 1,027.95 spend, 0 reported conversions |
| Enabled-ad destination | `https://elluminate.sg/services/team-building` |
| Dedicated conversion | `EL | Website Enquiry Submitted` (`7683934237`) |
| Conversion destination | `AW-704277198/24mXCJ2Q_s8cEM7V6c8C` |
| Conversion settings | Enabled, primary, biddable, Submit lead form, Count One |

The dedicated Elluminate conversion is configured correctly. The campaign-level Submit lead form category currently contains multiple enabled primary website actions from other brands and sites, which can contaminate optimisation even though those actions are not Elluminate enquiries.

## Approval 1: Elluminate-Only Conversion Goal

**Recommendation:** Create a custom conversion goal named `EL | Website Enquiry Only`, include only conversion action `7683934237`, and apply it to campaign `23854777096`.

**Reason:** This keeps bidding focused on a successful Elluminate website enquiry and excludes unrelated account-wide lead actions.

**Live impact:** Changes campaign optimisation inputs. Requires explicit owner approval before execution.

## Approval 2: Replace Claim-Risk RSAs

Two serving responsive search ads, `816721446877` and `816721446874`, contain claims that no longer match the landing page, including a 24-hour quote, two or three matched options, fixed pax ranges, premium facilitation, and HR-only language.

**Recommended replacement direction**

Headlines:

- Corporate Team Building SG
- Team Activities For Companies
- Indoor Or Outdoor Activities
- Facilitated Team Building
- Plan Around Your Team
- Share Pax, Date And Goal
- Physical Or Virtual Formats
- Plan Your Team Activity
- Corporate Team Bonding SG
- Elluminate Team Building

Descriptions:

- Plan corporate team building around your group size, venue, timing and event goal.
- Explore facilitated indoor, outdoor, physical and virtual formats for company teams.
- Share your pax, preferred date and venue. Elluminate helps shape the right activity plan.
- Planning a company activity in Singapore? Send your event details to start the discussion.

**Live impact:** Replaces serving ads. Requires owner approval and a final policy/character-limit check before execution.

## Approval 3: Search-Term Negatives

The following phrase-level exclusions are recommended from observed mismatched spend:

- `"corporate workshop"`
- `"team building workshop"`
- `"golf team building"`
- `"cocktail making"`
- `"pickleball"`
- `"barista"`
- `"cheap"`

Do not broadly exclude ideas, retreats, virtual activities, family days, sports days, or location terms until their business relevance is reviewed separately.

**Live impact:** Can prevent future ad delivery for matching searches. Requires owner approval before execution.

## Measurement Gates

- Keep the website conversion tied only to a successful `contact_submissions` insert.
- Keep the unique generated lead ID as the Google Ads `transaction_id`.
- Retain GA4 `generate_lead` for analysis, but do not import it as another primary Ads conversion.
- Verify Google Ads and GA4 property `534734504` linking in an authorised Analytics account.
- Verify Tag Diagnostics after deployment.
- Reconcile the first genuine post-deployment enquiry across Supabase, email logs, GA4 and Google Ads before calling end-to-end measurement proven.

## Explicitly Out Of Scope

- No budget, bid, bidding-strategy or campaign-status change.
- No enhanced conversions or new customer-data use.
- No production enquiry submitted for testing.
- No live Ads mutation without a separately recorded approval.

# Elluminate tracking repair: 14 September 2026

## Confirmed live evidence, not a blanket tracking guarantee

- Google Ads account 6504640211, action 7683934237 (`EL | Website Enquiry Submitted`) is Active. The authenticated UI reports its last recorded conversion on 11 September 2026 at 20:00. It is Primary, Website, Submit lead forms, One conversion, with a 30-day click-through window and data-driven Google paid-channel attribution.
- Elluminate GA4 property 534734504 reports 7 new leads for 31 August through 13 September 2026: Paid Search 4, Direct 1, Organic Search 1, Referral 1. These are the report's metrics, not a reconciled count of unique qualified enquiries. Internal tests may be included. First-user channel is not the same as Ads attribution.
- Public bundle `/assets/index-ByYablMh.js` contains `G-DW7WKD7NFX` and `AW-704277198/24mXCJ2Q_s8cEM7V6c8C`. Neither ID is changed by this repair.
- A production PostgREST query selecting only `id,lead_id,gbraid,wbraid,gad_source,attribution_captured_at` with `limit=0` returned HTTP 200 and `[]`. The historical missing-column error is not reproduced. No customer rows were retrieved.
- Browser: the locked Chrome extension instance 9d509f57-9859-4584-b11d-48d13b0185fa, browser ID 5 for this session, with Google dashboard header energizesg@gmail.com. Never substitute Brave.

## Reproduced defects and narrow changes

1. `tracking.ts`: a throwing GA4 generate_lead call prevented the direct Ads call. Isolate that failure so the Ads attempt still runs once with the saved lead ID as transaction_id. Record GA4 queued/failed separately. Queued and callback_completed are client states, not Google receipt or attribution confirmation.
2. `tracking.ts`: throwing funnel telemetry could interrupt form handlers; diagnostics could throw after Ads dispatch. Optional telemetry is now failure-isolated.
3. `leadSubmissionFlow.js`: a tracking exception after database acceptance skipped email queueing and reported the saved enquiry as failed. Continue queueing both existing emails; expose trackingFailed and a bounded diagnostic callback. Do not retry the database insert or fabricate another conversion.
4. `attribution.ts`: malformed percent-encoding in the attribution cookie threw before the JSON guard. Ignore malformed/non-object values.
5. `attribution.ts`: localStorage access errors aborted capture before the click-attribution cookie was written. Preserve cookie capture when localStorage is unavailable. This does not bypass blocked cookies, consent, or all browser storage restrictions.

## Verification

- Baseline: 21 existing Ads-readiness tests passed.
- Added regression cases failed on the original code for the intended errors before implementation.
- Expanded suite: 29 passing tests, including exact Ads destination and one shared transaction ID, failed insert emits nothing, analytics exception isolation, malformed cookies and blocked localStorage.
- Typecheck and production build pass. Existing build warnings concern stale Browserslist data and a large bundle. Generated sitemap churn was discarded, not included in the repair.
- No production test enquiry was submitted in this run. The approved 9 September test was not repeated.

## Scope and deployment gate

Base: fresh origin/main 6411806 in the existing isolated conversion-delivery worktree. Preserve the dirty canonical checkout and all owner/Lovable changes. No design, copy, URLs, campaign budgets, bidding, conversion actions, shared Google tags, or Team Elevate changes.

Lovable project: https://lovable.dev/projects/04c8a568-2d2e-4a26-b58c-143d4ef0a9f1

The signed-in account energizesg@gmail.com cannot open this project. Lovable says it lacks access to `Exstatic Google Search Console - Elluminate`, owned by CalbeeChips. Do not use the offered Unlink connection admin override. The connection owner must share access with the signed-in project operator. Git synchronization is not proof of public publication.

## Remaining acceptance

1. Restore legitimate Lovable project access, verify the synced commit and publish only this narrow repair.
2. Check the published JS for the repaired functions and unchanged correct IDs.
3. Preview the complete labelled test enquiry to Chad and obtain approval before submitting. Use a unique test reference, no paid-ad click and no invented attribution ID. Record the accepted lead ID, business and confirmation emails, one GA4 generate_lead and one direct Ads request with the correct destination/transaction ID. A direct QA visit is not expected to become an Ads-attributed conversion.
4. Reconcile subsequent real enquiries against saved metadata and Google reports in matching date windows. Do not replay historical leads merely because they are missing from a campaign column.

Rollback: revert only this repair commit on main, synchronize and republish. Do not reset the site, change IDs or delete existing enquiries/conversions.

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Calendar, Users, Award } from "lucide-react";

// TODO(content): Keep a permission/evidence checklist for client logo usage before adding or restoring brand proof.
// Repository logo archive. Rendering below is restricted to the approved public set.
const defaultClientLogos = [
  // Page 1 — Financial & Tech
  {
    id: 1,
    name: "DBS",
    logo: "/images/client-logos/dbs_bank_logo_p1zixs.png",
  },
  {
    id: 2,
    name: "OCBC",
    logo: "/images/client-logos/logo-ocbc.svg_khvach.png",
  },
  { id: 3, name: "UOB", logo: "/images/client-logos/uob_logo_n4hrvh.png" },
  {
    id: 4,
    name: "Singtel",
    logo: "/images/client-logos/singtel_logo_nmsek6.svg",
  },
  {
    id: 5,
    name: "Grab",
    logo: "/images/client-logos/grab-logo_h3i5lc.jpg",
  },
  {
    id: 6,
    name: "Shopee",
    logo: "/images/client-logos/shopee-logo_sce8bs_r7xa9k.png",
  },
  { id: 7, name: "NTUC", logo: "/images/client-logos/ntuc_logo_v2xyjl.png" },
  {
    id: 8,
    name: "GovTech",
    logo: "/images/client-logos/govtech_logo_lctwtl.png",
  },
  {
    id: 9,
    name: "CapitaLand",
    logo: "/images/client-logos/capitaland_logo_lswm7l.png",
  },
  {
    id: 10,
    name: "Singapore Airlines",
    logo: "/images/client-logos/singapore-airlines-logo_jzs3bh_mngdzj.png",
  },
  {
    id: 11,
    name: "Changi Airport",
    logo: "/images/client-logos/changi_logo_uwhp7y.svg",
  },
  {
    id: 12,
    name: "StarHub",
    logo: "/images/client-logos/starhub_logo_cdoeat.svg",
  },
  { id: 13, name: "POSB", logo: "/images/client-logos/posb_logo_eiozw9.png" },
  {
    id: 14,
    name: "Prudential",
    logo: "/images/client-logos/prudentialgroup_logo_keiccj.png",
  },
  {
    id: 15,
    name: "Marina Bay Sands",
    logo: "/images/client-logos/marina_bay_sands_logo_hx5ui7.png",
  },
  {
    id: 16,
    name: "Great Eastern",
    logo: "/images/client-logos/great_eastern_logo_ice1ox.png",
  },
  {
    id: 17,
    name: "HSBC",
    logo: "/images/client-logos/hsbc-logo_clxve1_hjk23e.png",
  },
  {
    id: 18,
    name: "Standard Chartered",
    logo: "/images/client-logos/standard_chartered_logo_u1hs4g.png",
  },
  { id: 19, name: "AIA", logo: "/images/client-logos/aia-logo_x4n6n4.png" },
  {
    id: 20,
    name: "Maybank",
    logo: "/images/client-logos/maybank_logo_glhtjo.png",
  },
  { id: 21, name: "M1", logo: "/images/client-logos/m1_logo_mbjg9i.svg" },
  {
    id: 22,
    name: "Google",
    logo: "/images/client-logos/google-logo_zypuwu_iwiqig.webp",
  },
  {
    id: 23,
    name: "Meta",
    logo: "/images/client-logos/meta-logo_frbmem_f04jie.jpg",
  },
  {
    id: 24,
    name: "Amazon",
    logo: "/images/client-logos/amazon-logo_r27lcf_oarht6.webp",
  },
  {
    id: 25,
    name: "Microsoft",
    logo: "/images/client-logos/microsoft-logo_w9xb9x_a8w3cx.webp",
  },
  {
    id: 26,
    name: "Deloitte",
    logo: "/images/client-logos/deloitte-logo_d9hhkg_lbc5wh.png",
  },
  {
    id: 27,
    name: "PwC",
    logo: "/images/client-logos/pwc-logo_b0c7pi_lwfvoe.png",
  },
  {
    id: 28,
    name: "EY",
    logo: "/images/client-logos/ey-logo_r64589_ekhojp.png",
  },
  {
    id: 29,
    name: "KPMG",
    logo: "/images/client-logos/kpmg-logo_trr6d6_us4klt.png",
  },
  {
    id: 30,
    name: "Accenture",
    logo: "/images/client-logos/accenture-logo_onhlui_h5imj9.png",
  },
  {
    id: 31,
    name: "SAP",
    logo: "/images/client-logos/sap-logo_kpsn8q_yrlogx.png",
  },
  {
    id: 32,
    name: "Salesforce",
    logo: "/images/client-logos/salesforce-logo_qlfsey_zlifqn.png",
  },
  {
    id: 33,
    name: "IBM",
    logo: "/images/client-logos/ibm-logo_hzdojh_hr9wsd.png",
  },
  {
    id: 34,
    name: "Cisco",
    logo: "/images/client-logos/cisco-logo_puvl3g_mc0g60.png",
  },
  {
    id: 35,
    name: "Samsung",
    logo: "/images/client-logos/samsung-logo_hquoqv_ydeq5g.avif",
  },
  {
    id: 36,
    name: "JP Morgan",
    logo: "/images/client-logos/jp-morgan-logo_hvz1dp_c645qe.jpg",
  },
  {
    id: 37,
    name: "Goldman Sachs",
    logo: "/images/client-logos/goldman-sachs-logo_eteb8p_zp1ize.png",
  },
  {
    id: 38,
    name: "Citibank",
    logo: "/images/client-logos/citibank-logo_hh76yw_la5rgi.jpg",
  },
  {
    id: 39,
    name: "Shell",
    logo: "/images/client-logos/shell-logo_y1mpac_qyo8yw.png",
  },
  {
    id: 40,
    name: "Unilever",
    logo: "/images/client-logos/unilever-logo_p9nxah_bkti4t.svg",
  },
  {
    id: 41,
    name: "P&G",
    logo: "/images/client-logos/p_g-logo_j9lgmw_hxzdnp.jpg",
  },
  {
    id: 42,
    name: "Nestlé",
    logo: "/images/client-logos/nestle-logo_sm96rt_aeqkid.png",
  },
  {
    id: 43,
    name: "3M",
    logo: "/images/client-logos/3m-logo_twgmit_oh4dzn.jpg",
  },
  {
    id: 44,
    name: "Visa",
    logo: "/images/client-logos/visa-logo_pxsjvr_ob9xvm.jpg",
  },
  {
    id: 45,
    name: "Mastercard",
    logo: "/images/client-logos/mastercard-logo_astrll_vaks37.png",
  },
  {
    id: 46,
    name: "PayPal",
    logo: "/images/client-logos/paypal-logo_eg16l2_hv3lna.png",
  },
  {
    id: 47,
    name: "Stripe",
    logo: "/images/client-logos/stripe-logo_nx0y1j_a40afi.png",
  },
  {
    id: 48,
    name: "Dyson",
    logo: "/images/client-logos/dyson-logo_yatver_gauoba.png",
  },
  {
    id: 49,
    name: "ST Engineering",
    logo: "/images/client-logos/st-engineering-logo_ck91he_p9jxbh.png",
  },
  {
    id: 50,
    name: "Keppel",
    logo: "/images/client-logos/keppel-logo_lvhzwm_c5q1d6.png",
  },
  {
    id: 51,
    name: "ComfortDelGro",
    logo: "/images/client-logos/comfortdelgro-logo_orksye_qn9rtn.png",
  },
  {
    id: 52,
    name: "Mapletree",
    logo: "/images/client-logos/mapletree-logo_xjzaml_kv7ebj.png",
  },
  {
    id: 53,
    name: "Frasers",
    logo: "/images/client-logos/fraserz-logo_r3pqwz_ojtta8.jpg",
  },
  {
    id: 54,
    name: "NUS",
    logo: "/images/client-logos/nus-logo_aizbz0_zjyjwn.jpg",
  },
  {
    id: 55,
    name: "NTU",
    logo: "/images/client-logos/ntu-logo_efg9g4_bo33fl.svg",
  },
  {
    id: 56,
    name: "SMU",
    logo: "/images/client-logos/smu-logo_e2sjc5_pj7fva.png",
  },
  {
    id: 57,
    name: "DHL",
    logo: "/images/client-logos/dhl-logo_qpghdi_ypy6ex.png",
  },
  {
    id: 58,
    name: "FedEx",
    logo: "/images/client-logos/fedex-logo_hpsfr9_tuu21b.png",
  },
  {
    id: 59,
    name: "Lazada",
    logo: "/images/client-logos/lazada-logo_apzklm_ez3phz.svg",
  },
  {
    id: 60,
    name: "Razer",
    logo: "/images/client-logos/razer-logo_cazk3v_ovuwcf.png",
  },
  {
    id: 61,
    name: "Siemens",
    logo: "/images/client-logos/siemens-logo_ulbkot_z5rjtv.svg",
  },
  {
    id: 62,
    name: "Bosch",
    logo: "/images/client-logos/bosch-logo_jbsqnp_o1hmik.png",
  },
  {
    id: 63,
    name: "Mediacorp",
    logo: "/images/client-logos/mediacorp-logo_bmb774_lb8uti.svg",
  },
  {
    id: 64,
    name: "Income Insurance",
    logo: "/images/client-logos/income-insurance-logo_ulqioe_bx2s3x.png",
  },
  {
    id: 65,
    name: "SMRT",
    logo: "/images/client-logos/smrt_logo_hdwk9d.png",
  },
  {
    id: 66,
    name: "SP Group",
    logo: "/images/client-logos/sp_group_logo_zbi2wt.svg",
  },
  {
    id: 67,
    name: "Sentosa",
    logo: "/images/client-logos/sentosa-logo_pcriws.webp",
  },
  {
    id: 68,
    name: "Manulife",
    logo: "/images/client-logos/manulife-logo_nq6poz_wwxu0o.png",
  },
  {
    id: 69,
    name: "Zurich Insurance",
    logo: "/images/client-logos/zurich-insurance-logo_laalyc_ik4u9g.png",
  },
  {
    id: 70,
    name: "Roche",
    logo: "/images/client-logos/roche-logo_l4erol_vi6pea.png",
  },
  {
    id: 71,
    name: "Pfizer",
    logo: "/images/client-logos/pfizer-logo_icifpm_nzigpl.png",
  },
  {
    id: 72,
    name: "GlaxoSmithKline",
    logo: "/images/client-logos/glaxo-smithkline-logo_re8fe7_ipecgk.png",
  },
];

const approvedClientLogoNames = new Set([
  "DBS",
  "Singtel",
  "GovTech",
  "CapitaLand",
  "Singapore Airlines",
  "Changi Airport",
  "Google",
  "Microsoft",
  "Deloitte",
  "NUS",
  "DHL",
  "Mediacorp",
]);

const approvedClientLogos = defaultClientLogos.filter((logo) => approvedClientLogoNames.has(logo.name));

const stats = [
  {
    icon: Calendar,
    number: "1,000+",
    label: "Events",
    description: "Planned, produced and brought to life.",
  },
  {
    icon: Users,
    number: "100,000+",
    label: "Participants",
    description: "People who have joined the experience.",
  },
  {
    icon: Award,
    number: "8+",
    label: "Years of Experience",
    description: "Learning what makes a room come alive.",
  },
];

export const SocialProofSection = () => {
  const reduceMotion = useReducedMotion();
  const logoWallRef = useRef<HTMLDivElement | null>(null);
  const logoWallPointerInsideRef = useRef(false);
  const logoWallFocusWithinRef = useRef(false);
  const [logoWallPaused, setLogoWallPaused] = useState(false);
  const logoWallInView = useInView(logoWallRef, { margin: "-120px 0px" });
  const logoRows = Array.from({ length: 3 }, (_, rowIndex) =>
    approvedClientLogos.map(
      (_, logoIndex) => approvedClientLogos[(logoIndex + rowIndex * 4) % approvedClientLogos.length],
    ),
  );

  const syncLogoWallState = () => {
    setLogoWallPaused(logoWallPointerInsideRef.current || logoWallFocusWithinRef.current);
  };

  return (
    <section id="social-proof" className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-blue-50 py-20 sm:py-24">
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Proof Before the Pitch</span>
          <h2 className="font-display text-4xl font-black leading-none text-foreground sm:text-5xl lg:text-6xl">
            See the Energy. Check the Track Record.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            More than 1,000 events, 800+ reviews and a client list built one experience at a time.
          </p>
        </motion.header>

        <div className="mx-auto mb-16 grid max-w-6xl gap-4 lg:grid-cols-[1.2fr_2fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-[#071a2a] p-7 text-white shadow-xl sm:p-9"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200">Google Reviews</p>
            <div className="mt-5 flex gap-1" role="img" aria-label="4.8 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className="relative block h-6 w-6" aria-hidden="true">
                  <Star className="absolute inset-0 h-6 w-6 fill-amber-400/20 text-amber-400/45" />
                  <span className={`absolute inset-y-0 left-0 overflow-hidden ${index < 4 ? "w-full" : "w-4/5"}`}>
                    <Star className="h-6 w-6 max-w-none fill-amber-400 text-amber-400" />
                  </span>
                </span>
              ))}
            </div>
            <p className="mt-4 font-display text-5xl font-black leading-none sm:text-6xl">4.8 / 5</p>
            <p className="mt-3 text-base font-semibold text-white/[0.78]">800+ Google reviews</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/[0.58]">
              Combined across Elluminate and Team Elevate, another brand of ours.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
                className="rounded-[2rem] border border-primary/10 bg-white p-6 shadow-[0_16px_50px_rgba(20,40,80,0.08)]"
              >
                <span className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <stat.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-display text-4xl font-black leading-none text-primary">{stat.number}</p>
                <h3 className="mt-2 font-display text-lg font-black text-foreground">{stat.label}</h3>
                <p className="mt-2 text-sm leading-5 text-muted-foreground">{stat.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mb-7 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Trusted by Teams Across Singapore</span>
          <h3 className="mt-3 font-display text-2xl font-black text-foreground sm:text-3xl">Teams We&rsquo;ve Worked With</h3>
        </div>

        {reduceMotion ? (
          <div id="client-logo-wall" className="relative left-1/2 grid w-screen -translate-x-1/2 grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:px-6 lg:grid-cols-8">
            {approvedClientLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex h-16 min-w-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm sm:h-20"
              >
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  loading="lazy"
                  decoding="async"
                  width={180}
                  height={80}
                  className="max-h-10 max-w-full object-contain grayscale"
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            id="client-logo-wall"
            ref={logoWallRef}
            role="region"
            aria-label="Client logo wall. Hover or focus to pause the moving logos."
            tabIndex={0}
            className="relative left-1/2 w-screen -translate-x-1/2 space-y-3 overflow-hidden py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            onPointerEnter={(event) => {
              if (event.pointerType === "touch") return;
              logoWallPointerInsideRef.current = true;
              syncLogoWallState();
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "touch") return;
              logoWallPointerInsideRef.current = false;
              syncLogoWallState();
            }}
            onFocusCapture={() => {
              logoWallFocusWithinRef.current = true;
              syncLogoWallState();
            }}
            onBlurCapture={(event) => {
              if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
              logoWallFocusWithinRef.current = false;
              syncLogoWallState();
            }}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-36" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-36" />
            {logoRows.map((row, rowIndex) => {
              return (
                <div
                  key={rowIndex}
                  className="flex w-max"
                  style={{
                    animationName: rowIndex % 2 === 0 ? "elluminate-marquee-left" : "elluminate-marquee-right",
                    animationDuration: `${28 + rowIndex * 3}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: logoWallInView && !logoWallPaused ? "running" : "paused",
                  }}
                >
                  {[0, 1].map((copyIndex) => (
                    <div key={copyIndex} className="flex shrink-0 gap-3 pr-3" aria-hidden={copyIndex === 1 ? "true" : undefined}>
                      {row.map((logo) => (
                        <div
                          key={`${copyIndex}-${logo.id}`}
                          className="flex h-16 w-32 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm sm:h-20 sm:w-40"
                        >
                          <img
                            src={logo.logo}
                            alt={copyIndex === 0 ? `${logo.name} logo` : ""}
                            loading="lazy"
                            decoding="async"
                            width={180}
                            height={80}
                            className="max-h-10 max-w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

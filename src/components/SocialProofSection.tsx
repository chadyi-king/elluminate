import { motion, AnimatePresence } from "framer-motion";
import { Star, Calendar, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";

// Real client logos - 72 companies across 3 carousel pages
const defaultClientLogos = [
  // Page 1 — Financial & Tech
  {
    id: 1,
    name: "DBS",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465303/DBS_Bank_Logo_p1zixs.png",
  },
  {
    id: 2,
    name: "OCBC",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465310/Logo-ocbc.svg_khvach.png",
  },
  { id: 3, name: "UOB", logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465325/UOB_logo_n4hrvh.png" },
  {
    id: 4,
    name: "Singtel",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465322/Singtel_logo_nmsek6.svg",
  },
  {
    id: 5,
    name: "Grab",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465306/grab-logo_h3i5lc.jpg",
  },
  {
    id: 6,
    name: "Shopee",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465320/shopee-logo_sce8bs_r7xa9k.png",
  },
  { id: 7, name: "NTUC", logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465315/ntuc_logo_v2xyjl.png" },
  {
    id: 8,
    name: "GovTech",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465306/GovTech_logo_lctwtl.png",
  },
  {
    id: 9,
    name: "CapitaLand",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465300/capitaland_logo_lswm7l.png",
  },
  {
    id: 10,
    name: "Singapore Airlines",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465321/Singapore-Airlines-Logo_jzs3bh_mngdzj.png",
  },
  {
    id: 11,
    name: "Changi Airport",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465300/Changi_logo_uwhp7y.svg",
  },
  {
    id: 12,
    name: "StarHub",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465324/StarHub_logo_cdoeat.svg",
  },
  { id: 13, name: "POSB", logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465316/POSB_logo_eiozw9.png" },
  {
    id: 14,
    name: "Prudential",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465317/PrudentialGroup_Logo_keiccj.png",
  },
  {
    id: 15,
    name: "Marina Bay Sands",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465311/marina_bay_sands_logo_hx5ui7.png",
  },
  {
    id: 16,
    name: "Great Eastern",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465307/Great_Eastern_logo_ice1ox.png",
  },
  {
    id: 17,
    name: "HSBC",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465307/hsbc-logo_clxve1_hjk23e.png",
  },
  {
    id: 18,
    name: "Standard Chartered",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465324/Standard_Chartered_Logo_u1hs4g.png",
  },
  { id: 19, name: "AIA", logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465300/AIA-logo_x4n6n4.png" },
  {
    id: 20,
    name: "Maybank",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465312/MAYBANK_LOGO_glhtjo.png",
  },
  { id: 21, name: "M1", logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465310/M1_Logo_mbjg9i.svg" },
  {
    id: 22,
    name: "Google",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465306/google-logo_zypuwu_iwiqig.webp",
  },
  {
    id: 23,
    name: "Meta",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465313/meta-logo_frbmem_f04jie.jpg",
  },
  {
    id: 24,
    name: "Amazon",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465299/amazon-logo_r27lcf_oarht6.webp",
  },
  {
    id: 25,
    name: "Microsoft",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465313/microsoft-logo_w9xb9x_a8w3cx.webp",
  },
  {
    id: 26,
    name: "Deloitte",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465302/deloitte-logo_d9hhkg_lbc5wh.png",
  },
  {
    id: 27,
    name: "PwC",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465317/pwc-logo_b0c7pi_lwfvoe.png",
  },
  {
    id: 28,
    name: "EY",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465304/EY-logo_r64589_ekhojp.png",
  },
  {
    id: 29,
    name: "KPMG",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465309/kpmg-logo_trr6d6_us4klt.png",
  },
  {
    id: 30,
    name: "Accenture",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465300/accenture-logo_onhlui_h5imj9.png",
  },
  {
    id: 31,
    name: "SAP",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465321/SAP-logo_kpsn8q_yrlogx.png",
  },
  {
    id: 32,
    name: "Salesforce",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465319/Salesforce-logo_qlfsey_zlifqn.png",
  },
  {
    id: 33,
    name: "IBM",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465308/IBM-logo_hzdojh_hr9wsd.png",
  },
  {
    id: 34,
    name: "Cisco",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465301/cisco-logo_puvl3g_mc0g60.png",
  },
  {
    id: 35,
    name: "Samsung",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465319/Samsung-logo_hquoqv_ydeq5g.avif",
  },
  {
    id: 36,
    name: "JP Morgan",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465309/JP-Morgan-Logo_hvz1dp_c645qe.jpg",
  },
  {
    id: 37,
    name: "Goldman Sachs",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465305/Goldman-Sachs-logo_eteb8p_zp1ize.png",
  },
  {
    id: 38,
    name: "Citibank",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465301/citibank-logo_hh76yw_la5rgi.jpg",
  },
  {
    id: 39,
    name: "Shell",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465320/Shell-logo_y1mpac_qyo8yw.png",
  },
  {
    id: 40,
    name: "Unilever",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465325/Unilever-logo_p9nxah_bkti4t.svg",
  },
  {
    id: 41,
    name: "P&G",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465317/p_g-logo_j9lgmw_hxzdnp.jpg",
  },
  {
    id: 42,
    name: "Nestlé",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465314/Nestle-logo_sm96rt_aeqkid.png",
  },
  {
    id: 43,
    name: "3M",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465299/3m-logo_twgmit_oh4dzn.jpg",
  },
  {
    id: 44,
    name: "Visa",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465325/Visa-logo_pxsjvr_ob9xvm.jpg",
  },
  {
    id: 45,
    name: "Mastercard",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465312/Mastercard-logo_astrll_vaks37.png",
  },
  {
    id: 46,
    name: "PayPal",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465315/paypal-logo_eg16l2_hv3lna.png",
  },
  {
    id: 47,
    name: "Stripe",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465324/stripe-logo_nx0y1j_a40afi.png",
  },
  {
    id: 48,
    name: "Dyson",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465303/dyson-logo_yatver_gauoba.png",
  },
  {
    id: 49,
    name: "ST Engineering",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465323/ST-Engineering-logo_ck91he_p9jxbh.png",
  },
  {
    id: 50,
    name: "Keppel",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465309/Keppel-logo_lvhzwm_c5q1d6.png",
  },
  {
    id: 51,
    name: "ComfortDelGro",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465302/ComfortDelGro-logo_orksye_qn9rtn.png",
  },
  {
    id: 52,
    name: "Mapletree",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465311/MapleTree-logo_xjzaml_kv7ebj.png",
  },
  {
    id: 53,
    name: "Frasers",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465305/Fraserz-logo_r3pqwz_ojtta8.jpg",
  },
  {
    id: 54,
    name: "NUS",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465315/NUS-logo_aizbz0_zjyjwn.jpg",
  },
  {
    id: 55,
    name: "NTU",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465314/ntu-logo_efg9g4_bo33fl.svg",
  },
  {
    id: 56,
    name: "SMU",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465322/SMU-logo_e2sjc5_pj7fva.png",
  },
  {
    id: 57,
    name: "DHL",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465303/DHL-logo_qpghdi_ypy6ex.png",
  },
  {
    id: 58,
    name: "FedEx",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465304/FedEx-logo_hpsfr9_tuu21b.png",
  },
  {
    id: 59,
    name: "Lazada",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465310/Lazada-logo_apzklm_ez3phz.svg",
  },
  {
    id: 60,
    name: "Razer",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465318/Razer-logo_cazk3v_ovuwcf.png",
  },
  {
    id: 61,
    name: "Siemens",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465320/Siemens-logo_ulbkot_z5rjtv.svg",
  },
  {
    id: 62,
    name: "Bosch",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465300/Bosch-logo_jbsqnp_o1hmik.png",
  },
  {
    id: 63,
    name: "Mediacorp",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465314/Mediacorp-logo_bmb774_lb8uti.svg",
  },
  {
    id: 64,
    name: "Income Insurance",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465308/Income-Insurance-logo_ulqioe_bx2s3x.png",
  },
  {
    id: 65,
    name: "SMRT",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465322/SMRT_logo_hdwk9d.png",
  },
  {
    id: 66,
    name: "SP Group",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465323/SP_Group_Logo_zbi2wt.svg",
  },
  {
    id: 67,
    name: "Sentosa",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465319/sentosa-logo_pcriws.webp",
  },
  {
    id: 68,
    name: "Manulife",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465311/Manulife-logo_nq6poz_wwxu0o.png",
  },
  {
    id: 69,
    name: "Zurich Insurance",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465326/Zurich-Insurance-logo_laalyc_ik4u9g.png",
  },
  {
    id: 70,
    name: "Roche",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465318/Roche-logo_l4erol_vi6pea.png",
  },
  {
    id: 71,
    name: "Pfizer",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465316/Pfizer-logo_icifpm_nzigpl.png",
  },
  {
    id: 72,
    name: "GlaxoSmithKline",
    logo: "https://res.cloudinary.com/dk28ny4yj/image/upload/v1778465305/Glaxo-SmithKline-logo_re8fe7_ipecgk.png",
  },
];


const stats = [
  {
    icon: Calendar,
    number: "1,000+",
    label: "Events Executed",
    description: "Across all corporate formats.",
  },
  {
    icon: Users,
    number: "100,000+",
    label: "Participants Impacted",
    description: "Singapore & regional teams.",
  },
  {
    icon: Award,
    number: "8+",
    label: "Years Delivering",
    description: "Consistent experiences for teams across Singapore.",
  },
];

export const SocialProofSection = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const clientLogos = defaultClientLogos;

  // Split logos into groups of 24 (4 rows x 6 columns) for carousel
  const logoGroups = [clientLogos.slice(0, 24), clientLogos.slice(24, 48), clientLogos.slice(48, 72)];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % logoGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [logoGroups.length]);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/50 via-background to-secondary/30">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo Wall - 4x6 Grid Auto-scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-center text-primary text-sm tracking-[0.3em] uppercase font-display font-semibold mb-10">
            Trusted By Leading Brands
          </h3>

          {/* Logo Carousel - 4 rows x 6 columns */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGroup}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4"
              >
                {logoGroups[currentGroup].map((logo) => (
                  <div
                    key={logo.id}
                    className="group aspect-[3/2] bg-white border border-border rounded-xl flex items-center justify-center hover:border-primary/40 hover:shadow-lg transition-all duration-300 p-3 relative overflow-hidden"
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      loading="lazy"
                      decoding="async"
                      width={240}
                      height={160}
                      className="max-w-full max-h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector("[data-logo-fallback]")) {
                          const fallback = document.createElement("span");
                          fallback.className = "text-foreground text-xs font-display font-bold relative z-10";
                          fallback.dataset.logoFallback = "true";
                          fallback.textContent = logo.name;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-6">
            {logoGroups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentGroup(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentGroup ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Google Rating Panel - Centered with stars on top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-white border border-border rounded-2xl px-8 py-8 overflow-hidden max-w-xl mx-auto shadow-lg">
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Stars on top */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="w-10 h-10 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Rating text below stars */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-display font-black text-foreground">5.0 / 5.0</span>
              </div>

              <p className="text-muted-foreground font-display">
                Based on <span className="text-primary font-bold">700+</span> Google Reviews
              </p>

              <p className="text-muted-foreground/80 text-sm font-display">
                Trusted by companies all across Singapore.
              </p>

              <p className="text-muted-foreground/70 text-xs font-display mt-2 italic">
                Reviews collected via our parent brand,{" "}
                <a
                  href="https://teamelevate.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Team Elevate
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>

        {/* Event Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="relative inline-block mb-3">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary">
                    {stat.number}
                  </span>
                </div>
                <h4 className="text-lg md:text-xl font-display font-bold text-foreground mb-2">{stat.label}</h4>
                <p className="text-muted-foreground text-sm font-display">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

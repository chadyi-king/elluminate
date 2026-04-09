import { motion, AnimatePresence } from "framer-motion";
import { Star, Calendar, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";

// Real client logos - 72 companies across 3 carousel pages
const defaultClientLogos = [
  // Page 1 — Financial & Tech
  { id: 1, name: "DBS", logo: "https://logo.clearbit.com/dbs.com.sg" },
  { id: 2, name: "OCBC", logo: "https://logo.clearbit.com/ocbc.com" },
  { id: 3, name: "UOB", logo: "https://logo.clearbit.com/uobgroup.com" },
  { id: 4, name: "Singtel", logo: "https://logo.clearbit.com/singtel.com" },
  { id: 5, name: "Grab", logo: "https://logo.clearbit.com/grab.com" },
  { id: 6, name: "Shopee", logo: "https://logo.clearbit.com/shopee.sg" },
  { id: 7, name: "NTUC", logo: "https://logo.clearbit.com/fairprice.com.sg" },
  { id: 8, name: "GovTech", logo: "https://logo.clearbit.com/tech.gov.sg" },
  { id: 9, name: "CapitaLand", logo: "https://logo.clearbit.com/capitaland.com" },
  { id: 10, name: "Singapore Airlines", logo: "https://logo.clearbit.com/singaporeair.com" },
  { id: 11, name: "Changi Airport", logo: "https://logo.clearbit.com/changiairport.com" },
  { id: 12, name: "StarHub", logo: "https://logo.clearbit.com/starhub.com" },
  { id: 13, name: "POSB", logo: "https://logo.clearbit.com/posb.com.sg" },
  { id: 14, name: "Prudential", logo: "https://logo.clearbit.com/prudential.com.sg" },
  { id: 15, name: "Marina Bay Sands", logo: "https://logo.clearbit.com/marinabaysands.com" },
  { id: 16, name: "Great Eastern", logo: "https://logo.clearbit.com/greateasternlife.com" },
  { id: 17, name: "HSBC", logo: "https://logo.clearbit.com/hsbc.com.sg" },
  { id: 18, name: "Standard Chartered", logo: "https://logo.clearbit.com/sc.com" },
  { id: 19, name: "AIA", logo: "https://logo.clearbit.com/aia.com.sg" },
  { id: 20, name: "Maybank", logo: "https://logo.clearbit.com/maybank.com" },
  { id: 21, name: "M1", logo: "https://logo.clearbit.com/m1.com.sg" },
  { id: 22, name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { id: 23, name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { id: 24, name: "Amazon", logo: "https://logo.clearbit.com/amazon.sg" },
  // Page 2 — MNCs & Consulting
  { id: 25, name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { id: 26, name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
  { id: 27, name: "PwC", logo: "https://logo.clearbit.com/pwc.com" },
  { id: 28, name: "EY", logo: "https://logo.clearbit.com/ey.com" },
  { id: 29, name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
  { id: 30, name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { id: 31, name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
  { id: 32, name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { id: 33, name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { id: 34, name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
  { id: 35, name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { id: 36, name: "JP Morgan", logo: "https://logo.clearbit.com/jpmorgan.com" },
  { id: 37, name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com" },
  { id: 38, name: "Citibank", logo: "https://logo.clearbit.com/citigroup.com" },
  { id: 39, name: "Shell", logo: "https://logo.clearbit.com/shell.com" },
  { id: 40, name: "Unilever", logo: "https://logo.clearbit.com/unilever.com" },
  {
    id: 41,
    name: "P&G",
    logo: "https://res.cloudinary.com/dw1q8nz8z/image/upload/q_auto/f_auto/v1775634688/p_g-logo_j9lgmw.jpg",
  },
  { id: 42, name: "Nestlé", logo: "https://logo.clearbit.com/nestle.com" },
  { id: 43, name: "3M", logo: "https://logo.clearbit.com/3m.com" },
  { id: 44, name: "Visa", logo: "https://logo.clearbit.com/visa.com" },
  { id: 45, name: "Mastercard", logo: "https://logo.clearbit.com/mastercard.com" },
  { id: 46, name: "PayPal", logo: "https://logo.clearbit.com/paypal.com" },
  { id: 47, name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
  { id: 48, name: "Dyson", logo: "https://logo.clearbit.com/dyson.com" },
  // Page 3 — Singapore & Regional
  { id: 49, name: "ST Engineering", logo: "https://logo.clearbit.com/stengg.com" },
  { id: 50, name: "Keppel", logo: "https://logo.clearbit.com/kepcorp.com" },
  { id: 51, name: "ComfortDelGro", logo: "https://logo.clearbit.com/comfortdelgro.com" },
  { id: 52, name: "Mapletree", logo: "https://logo.clearbit.com/mapletree.com.sg" },
  { id: 53, name: "Frasers", logo: "https://logo.clearbit.com/frasersproperty.com" },
  { id: 54, name: "NUS", logo: "https://logo.clearbit.com/nus.edu.sg" },
  { id: 55, name: "NTU", logo: "https://logo.clearbit.com/ntu.edu.sg" },
  { id: 56, name: "SMU", logo: "https://logo.clearbit.com/smu.edu.sg" },
  { id: 57, name: "DHL", logo: "https://logo.clearbit.com/dhl.com" },
  { id: 58, name: "FedEx", logo: "https://logo.clearbit.com/fedex.com" },
  { id: 59, name: "Lazada", logo: "https://logo.clearbit.com/lazada.sg" },
  { id: 60, name: "Razer", logo: "https://logo.clearbit.com/razer.com" },
  { id: 61, name: "Siemens", logo: "https://logo.clearbit.com/siemens.com" },
  { id: 62, name: "Bosch", logo: "https://logo.clearbit.com/bosch.com" },
  { id: 63, name: "Mediacorp", logo: "https://logo.clearbit.com/mediacorp.sg" },
  { id: 64, name: "Income Insurance", logo: "https://logo.clearbit.com/income.com.sg" },
  { id: 65, name: "SMRT", logo: "https://logo.clearbit.com/smrt.com.sg" },
  { id: 66, name: "SP Group", logo: "https://logo.clearbit.com/spgroup.com.sg" },
  { id: 67, name: "Sentosa", logo: "https://logo.clearbit.com/sentosa.com.sg" },
  { id: 68, name: "Manulife", logo: "https://logo.clearbit.com/manulife.com.sg" },
  { id: 69, name: "Zurich Insurance", logo: "https://logo.clearbit.com/zurich.com" },
  { id: 70, name: "Roche", logo: "https://logo.clearbit.com/roche.com" },
  { id: 71, name: "Pfizer", logo: "https://logo.clearbit.com/pfizer.com" },
  { id: 72, name: "GlaxoSmithKline", logo: "https://logo.clearbit.com/gsk.com" },
];

const normalize = (s: string) => s.toLowerCase().replace(/[\s\-_\.]/g, "");

const noiseWords = ["logo", "bank", "group", "corporation", "limited", "plc", "singapore", "pte", "ltd"];
const stripNoise = (s: string) => {
  let result = normalize(s);
  for (const word of noiseWords) {
    result = result.split(word).join("");
  }
  return result;
};

const brandToFilename: Record<string, string> = {
  DBS: "dbs_bank_logo",
  OCBC: "logo-ocbc",
  UOB: "uob_logo",
  Singtel: "singtel_logo",
  Grab: "singapore-grab-logo",
  Shopee: "shopee",
  NTUC: "ntuc_logo",
  GovTech: "govtech_logo",
  CapitaLand: "capitaland_logo",
  "Singapore Airlines": "singapore_airlines_logo",
  "Changi Airport": "changi_logo",
  StarHub: "starhub_logo",
  POSB: "posb_logo",
  Prudential: "prudentialgroup_logo",
  "Marina Bay Sands": "marina_bay_sands_logo",
  "Great Eastern": "great_eastern_logo",
  HSBC: "hsbc",
  "Standard Chartered": "standard_chartered_logo",
  AIA: "aia-logo",
  Maybank: "maybank_logo",
  M1: "m1_logo",
  Sentosa: "sentosa-logo",
  "SP Group": "sp_group_logo",
  SMRT: "smrt_corporation_logo",
};

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
  const [clientLogos, setClientLogos] = useState(defaultClientLogos);

  // Fetch Cloudinary logos and match to brands
  useEffect(() => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    if (!supabaseUrl) return;

    fetch(`${supabaseUrl}/functions/v1/cloudinary-folder?folder=website/client-logo`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.assets || !Array.isArray(data.assets)) return;
        setClientLogos((prev) =>
          prev.map((brand) => {
            const assets = data.assets as any[];
            const explicitKey = brandToFilename[brand.name];

            // Tier 1: explicit mapping
            if (explicitKey) {
              const nKey = normalize(explicitKey);
              const match = assets.find((a) => {
                const filename = normalize(a.public_id?.split("/").pop() || "");
                return filename.includes(nKey) || nKey.includes(filename);
              });
              if (match) return { ...brand, logo: match.secure_url };
            }

            // Tier 2: fuzzy fallback
            const strippedBrand = stripNoise(brand.name);
            const match = assets.find((a) => {
              const strippedFile = stripNoise(a.public_id?.split("/").pop() || "");
              return (
                strippedFile.length > 1 &&
                strippedBrand.length > 1 &&
                (strippedFile.includes(strippedBrand) || strippedBrand.includes(strippedFile))
              );
            });
            return match ? { ...brand, logo: match.secure_url } : brand;
          }),
        );
      })
      .catch((err) => console.error("Failed to fetch Cloudinary logos:", err));
  }, []);

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
                      className="max-w-full max-h-full object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.innerHTML = `<span class="text-foreground text-xs font-display font-bold relative z-10">${logo.name}</span>`;
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
                <span className="text-4xl md:text-5xl font-display font-black text-foreground">4.8 / 5.0</span>
              </div>

              <p className="text-muted-foreground font-display">
                Based on <span className="text-primary font-bold">600+</span> Google Reviews
              </p>

              <p className="text-muted-foreground/80 text-sm font-display">
                Trusted by companies all across Singapore.
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

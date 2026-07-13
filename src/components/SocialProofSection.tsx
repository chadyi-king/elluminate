import { motion } from "framer-motion";
import { CalendarCheck, Users, Waypoints } from "lucide-react";

const selectedClients = [
  { name: "DBS", logo: "/images/client-logos/dbs_bank_logo_p1zixs.png" },
  { name: "OCBC", logo: "/images/client-logos/logo-ocbc.svg_khvach.png" },
  { name: "Singtel", logo: "/images/client-logos/singtel_logo_nmsek6.svg" },
  { name: "Grab", logo: "/images/client-logos/grab-logo_h3i5lc.jpg" },
  { name: "GovTech", logo: "/images/client-logos/govtech_logo_lctwtl.png" },
  { name: "CapitaLand", logo: "/images/client-logos/capitaland_logo_lswm7l.png" },
  {
    name: "Singapore Airlines",
    logo: "/images/client-logos/singapore-airlines-logo_jzs3bh_mngdzj.png",
  },
  { name: "Changi Airport", logo: "/images/client-logos/changi_logo_uwhp7y.svg" },
];

const combinedHistory = [
  { value: "1,000+", label: "events delivered", icon: CalendarCheck },
  { value: "100,000+", label: "participants engaged", icon: Users },
  { value: "8+ years", label: "of operating experience", icon: Waypoints },
];

export const SocialProofSection = () => (
  <section className="border-b border-border bg-white py-14 md:py-18">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[1fr_1.5fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Experience you can see
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-black text-foreground md:text-4xl">
              Built on years of real event delivery.
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {combinedHistory.map(({ value, label, icon: Icon }) => (
                <div key={label} className="border-l-2 border-primary pl-3 sm:pl-5">
                  <Icon className="mb-2 h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="font-display text-xl font-black text-foreground sm:text-2xl md:text-3xl">{value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm font-semibold text-foreground">
          Selected organisations served through Team Elevate and Elluminate
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:grid-cols-8">
          {selectedClients.map((client) => (
            <div key={client.name} className="flex h-12 items-center justify-center">
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                decoding="async"
                width={140}
                height={56}
                className="max-h-10 max-w-[120px] object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
          Elluminate and Team Elevate are operated by EXSTATIC PTE LTD. The cumulative figures, selected organisations and event history shown here include work delivered under Team Elevate and Elluminate, as at July 2026.
        </p>
      </motion.div>
    </div>
  </section>
);

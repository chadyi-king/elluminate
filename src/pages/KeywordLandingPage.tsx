import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  MessageCircle,
  TriangleAlert,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ClientTestimonialsCarousel } from "@/components/ClientTestimonialsCarousel";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { keywordLandingPages, type KeywordLandingKey } from "@/data/keywordLandingPages";
import { getServiceCommercialProfile } from "@/data/serviceCommercialProfiles";
import { getRouteSeo, routeSeo } from "@/data/seoRoutes";
import { trackAnalyticsEvent } from "@/lib/tracking";

type KeywordLandingPageProps = {
  pageKey: KeywordLandingKey;
};

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=6588352482";

const KeywordLandingPage = ({ pageKey }: KeywordLandingPageProps) => {
  const config = keywordLandingPages[pageKey];
  const seo = getRouteSeo(config.path);
  const pageUrl = `https://elluminate.sg${config.path}`;
  const price = getServiceCommercialProfile(config.priceSlug)?.publicPrice;
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();
  const h1 = routeSeo.find((route) => route.path === config.path)?.h1 ?? config.schemaName;

  const openPlanMyEvent = (location: string, text: string) => {
    openContactModal({
      eventCategory: config.eventCategory,
      serviceSlug: config.key,
      ctaLocation: location,
      ctaText: text,
      additionalDetails: config.additionalDetails,
    });
  };

  const trackWhatsApp = (location: string) =>
    trackAnalyticsEvent("contact_channel_click", { contact_channel: "whatsapp", link_location: `${config.key}_${location}` });

  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
  });

  const [mainImage, sideImageTop, sideImageBottom] = config.hero.images;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO {...seo} ogImage={`https://elluminate.sg${mainImage.src}`} />
      <OrganizationSchema type="LocalBusiness" />
      <ServiceSchema
        name={config.schemaName}
        description={seo?.description ?? config.hero.sub}
        slug={config.key}
        price={price?.amount}
        priceUnit={price ? "per person" : undefined}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg/" },
          { name: config.parent.name, url: `https://elluminate.sg${config.parent.path}` },
          { name: config.breadcrumb, url: pageUrl },
        ]}
      />
      <FAQSchema faqs={config.faqs} />

      <Navbar />

      <main>
        {/* Hero: who it's for, the outcome, the price and one button, all above the fold. */}
        <section className="relative isolate overflow-hidden bg-[#fffdf8] text-[#0b1f3a]">
          <div
            aria-hidden="true"
            className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full blur-3xl"
            style={{ backgroundColor: `${config.accent}22` }}
          />
          <div className="container mx-auto px-5 pb-16 pt-8 sm:px-7 lg:px-12 lg:pb-24 lg:pt-14">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs font-semibold text-[#66758b]">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link to={config.parent.path} className="hover:text-primary">{config.parent.name}</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[#0b1f3a]">{config.breadcrumb}</span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <motion.h1
                  {...rise(0)}
                  className="inline-flex rounded-full border bg-white px-4 py-2 text-[0.7rem] font-black uppercase tracking-[0.2em] shadow-sm sm:text-xs"
                  style={{ borderColor: `${config.accent}55`, color: config.accent }}
                >
                  {h1}
                </motion.h1>
                <motion.p
                  {...rise(0.08)}
                  className="mt-5 font-display text-[2.6rem] font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
                >
                  {config.hero.headline}
                </motion.p>
                <motion.p {...rise(0.16)} className="mt-6 max-w-2xl text-lg leading-8 text-[#4c5e76]">
                  {config.hero.sub}
                </motion.p>

                <motion.dl {...rise(0.22)} className="mt-8 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#dce6f3] bg-[#dce6f3]">
                  {config.hero.facts.map((fact) => (
                    <div key={fact.label} className="bg-white px-4 py-4">
                      <dt className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#66758b]">{fact.label}</dt>
                      <dd className="mt-1 font-display text-base font-black leading-6 text-[#0b1f3a] sm:text-lg">{fact.value}</dd>
                    </div>
                  ))}
                </motion.dl>

                <motion.div {...rise(0.28)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    type="button"
                    variant="hero"
                    size="xl"
                    className="w-full sm:w-auto"
                    onClick={() => openPlanMyEvent("hero_primary", config.hero.cta)}
                  >
                    {config.hero.cta} <ArrowRight />
                  </Button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsApp("hero")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfe0d6] bg-white px-6 py-4 text-sm font-bold text-[#1f6b45] shadow-sm transition hover:border-[#25D366] hover:text-[#128C7E]"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Ask on WhatsApp
                  </a>
                </motion.div>

                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#40536d]">
                  {config.hero.reassurance.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#26B982]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-[1.35fr_1fr] gap-3 sm:gap-4">
                <motion.figure {...rise(0.12)} className="row-span-2 overflow-hidden rounded-[1.8rem] shadow-xl">
                  <img
                    src={mainImage.src}
                    alt={mainImage.alt}
                    width={900}
                    height={1100}
                    fetchPriority="high"
                    decoding="async"
                    className="h-full min-h-[320px] w-full object-cover sm:min-h-[460px]"
                  />
                </motion.figure>
                <motion.figure {...rise(0.2)} className="overflow-hidden rounded-[1.4rem] shadow-lg">
                  <img src={sideImageTop.src} alt={sideImageTop.alt} width={600} height={450} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover" />
                </motion.figure>
                <motion.figure {...rise(0.28)} className="overflow-hidden rounded-[1.4rem] shadow-lg">
                  <img src={sideImageBottom.src} alt={sideImageBottom.alt} width={600} height={450} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover" />
                </motion.figure>
              </div>
            </div>
          </div>
        </section>

        {/* The problem and its cost. */}
        <section className="relative overflow-hidden bg-[#fbf7ed] py-20 sm:py-24">
          <div className="container mx-auto grid gap-10 px-5 sm:px-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#e45f55]">{config.problem.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                {config.problem.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c5e76]">{config.problem.copy}</p>
            </div>
            <div className="rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-2xl sm:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f37468]">
                <TriangleAlert className="h-6 w-6" aria-hidden="true" />
              </span>
              <ul className="mt-6 space-y-5">
                {config.problem.points.map((point, index) => (
                  <li key={point} className="flex gap-4">
                    <span className="font-display text-xl font-black text-[#f37468]">0{index + 1}</span>
                    <span className="leading-7 text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Value stack: everything included, then the price. */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container mx-auto px-5 sm:px-7 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: config.accent }}>{config.valueStack.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                {config.valueStack.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#4c5e76]">{config.valueStack.intro}</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {config.valueStack.items.map((item) => (
                <article key={item.title} className="rounded-[1.6rem] border border-[#dce6f3] bg-[#f7faff] p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6" style={{ color: config.accent }} aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-black text-[#0b1f3a]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-[#4c5e76]">{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-5 rounded-[2rem] bg-[#0b1f3a] p-7 text-center text-white sm:p-9">
              <p className="font-display text-xl font-black leading-8 sm:text-2xl">{config.valueStack.priceLine}</p>
              <Button type="button" variant="hero" size="lg" onClick={() => openPlanMyEvent("value_stack", config.hero.cta)}>
                {config.hero.cta} <ArrowRight />
              </Button>
            </div>
          </div>
        </section>

        {/* Options: links into the existing activity pages. */}
        <section id="options" className="scroll-mt-24 bg-[#f7faff] py-20 sm:py-28">
          <div className="container mx-auto px-5 sm:px-7 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">{config.options.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-5xl">
                {config.options.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#4c5e76]">{config.options.intro}</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {config.options.slugs.map((slug) => (
                <ExperienceCard key={slug} slug={slug} variant="compact" />
              ))}
            </div>
          </div>
        </section>

        {config.compare ? (
          <section className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-5 sm:px-7 lg:px-12">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: config.accent }}>{config.compare.eyebrow}</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-5xl">
                  {config.compare.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#4c5e76]">{config.compare.intro}</p>
              </div>
              <div className="mt-10 overflow-x-auto rounded-[1.6rem] border border-[#dce6f3]">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead className="bg-[#0b1f3a] text-white">
                    <tr>
                      <th scope="col" className="px-5 py-4 text-xs font-black uppercase tracking-[0.16em]"><span className="sr-only">Situation</span></th>
                      {config.compare.columns.map((column) => (
                        <th key={column} scope="col" className="px-5 py-4 text-xs font-black uppercase tracking-[0.16em]">{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {config.compare.rows.map((row, index) => (
                      <tr key={row.label} className={index % 2 ? "bg-[#f7faff]" : "bg-white"}>
                        <th scope="row" className="px-5 py-4 font-display text-base font-black text-[#0b1f3a]">{row.label}</th>
                        {row.values.map((value, valueIndex) => (
                          <td key={`${row.label}-${valueIndex}`} className="px-5 py-4 leading-6 text-[#40536d]">{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ) : null}

        {config.itinerary ? (
          <section className="relative overflow-hidden bg-[#0b1f3a] py-20 text-white sm:py-28">
            <div aria-hidden="true" className="absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: `${config.accent}40` }} />
            <div className="container relative mx-auto px-5 sm:px-7 lg:px-12">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">{config.itinerary.eyebrow}</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-5xl">{config.itinerary.title}</h2>
                <p className="mt-5 text-lg leading-8 text-white/70">{config.itinerary.intro}</p>
              </div>
              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {config.itinerary.days.map((day) => (
                  <article key={day.day} className="rounded-[1.8rem] border border-white/15 bg-white/[0.07] p-7">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd85d]">{day.day}</p>
                    <h3 className="mt-3 font-display text-2xl font-black">{day.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {day.items.map((item) => (
                        <li key={item} className="flex gap-3 leading-6 text-white/80">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5ee5ad]" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {config.recentEvents?.length ? (
          <section className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-5 sm:px-7 lg:px-12">
              <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-primary">Recent island trips</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-black leading-tight tracking-[-0.03em] text-[#0b1f3a] sm:text-5xl">
                Teams we have taken to Bintan and Batam
              </h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {config.recentEvents.map((event) => (
                  <article key={`${event.client}-${event.event}`} className="rounded-[1.4rem] border border-[#dce6f3] bg-[#f7faff] p-6 text-center">
                    <p className="font-display text-4xl font-black tracking-[-0.03em]" style={{ color: config.accent }}>{event.pax}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#66758b]">participants</p>
                    <p className="mt-4 font-display text-lg font-black text-[#0b1f3a]">{event.client}</p>
                    <p className="mt-1 text-sm text-[#4c5e76]">{event.event}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <ClientTestimonialsCarousel
          eyebrow="What clients say"
          heading="Organisers who handed us the whole day"
          description="Real feedback from clients after their event."
          orderingSeed={`${config.key}-client-stories`}
        />

        {/* Objections. */}
        <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
          <div className="container mx-auto px-5 sm:px-7 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">Questions organisers ask</p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-5xl">
                {config.schemaName}: your questions answered
              </h2>
            </div>
            <div className="mx-auto mt-12 max-w-4xl space-y-3">
              {config.faqs.map((faq, index) => (
                <details key={faq.question} className="group overflow-hidden rounded-2xl border border-[#dce6f3] bg-white open:bg-[#f7faff]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-display text-lg font-black text-[#0b1f3a] sm:px-7">
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 text-xs font-black tracking-[0.18em] text-primary">{String(index + 1).padStart(2, "0")}</span>
                      {faq.question}
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-90 motion-reduce:transition-none" aria-hidden="true" />
                  </summary>
                  <p className="border-t border-[#dce6f3] px-5 py-5 leading-7 text-[#4c5e76] sm:px-7">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* How it works. */}
        <section className="bg-[#f7faff] py-16 sm:py-20">
          <div className="container mx-auto px-5 sm:px-7 lg:px-12">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">How it works</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-5xl">
              Three steps from brief to booked
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {config.steps.map((step, index) => (
                <article key={step.title} className="rounded-[2rem] border border-[#dce6f3] bg-white p-7 shadow-sm sm:p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b1f3a] font-display text-lg font-black text-[#ffd85d]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-black text-[#0b1f3a]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-[#4c5e76]">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final call to action. */}
        <section className="relative isolate overflow-hidden bg-[#0b1f3a] px-5 py-20 text-white sm:py-28 lg:px-12">
          <div aria-hidden="true" className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#f37468]/20 blur-3xl" />
          <div className="container mx-auto text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ffd85d] text-[#0b1f3a] shadow-xl">
              <ClipboardCheck className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-[#ffd85d]">{config.finalCta.eyebrow}</p>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-6xl">
              {config.finalCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">{config.finalCta.copy}</p>
            <div className="mx-auto mt-9 grid max-w-4xl gap-3 text-left md:grid-cols-3">
              {config.finalCta.gets.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.07] p-4 text-sm font-semibold leading-6 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5ee5ad]" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button type="button" variant="hero" size="xl" className="w-full sm:w-auto" onClick={() => openPlanMyEvent("final_primary", config.finalCta.button)}>
                {config.finalCta.button} <ArrowRight />
              </Button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp("final")}
                className="inline-flex items-center gap-2 text-sm font-bold text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Or message us on WhatsApp
              </a>
            </div>

            <nav aria-label="Related pages" className="mx-auto mt-14 max-w-4xl border-t border-white/15 pt-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Keep exploring</p>
              <ul className="mt-4 flex flex-wrap justify-center gap-3">
                {config.related.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/85 transition hover:border-white hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>

      <Footer bottomNote="Corporate team building, retreats, and training experiences in Singapore." />
    </div>
  );
};

export default KeywordLandingPage;

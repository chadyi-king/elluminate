import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Quote,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  XCircle,
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
import { clientTestimonials, type ClientTestimonial } from "@/data/clientTestimonials";
import {
  serviceCampaignLandingConfigs,
  type ServiceCampaignKind,
} from "@/data/serviceCampaignLandingConfigs";
import { getRouteSeo } from "@/data/seoRoutes";
import { cloudinaryImage } from "@/lib/media";

type ServiceCampaignHubPageProps = {
  kind: ServiceCampaignKind;
};

const pushLandingEvent = (pagePath: string, payload: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  const trackingWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({
    event: "cta_click",
    page_path: pagePath,
    form_name: "plan_my_event",
    ...payload,
  });
};

const ServiceCampaignHubPage = ({ kind }: ServiceCampaignHubPageProps) => {
  const config = serviceCampaignLandingConfigs[kind];
  const seo = getRouteSeo(config.path);
  const pageUrl = `https://elluminate.sg${config.path}`;
  const { openContactModal } = useContactModal();
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("All");
  const heroTextClasses =
    kind === "retreats"
      ? {
          topLeft:
            "text-[clamp(2.15rem,9.2vw,3.1rem)] lg:text-[clamp(4.35rem,5vw,5.45rem)] xl:text-[clamp(4.9rem,5.7vw,6rem)]",
          lowerLeft:
            "text-[clamp(2.55rem,11vw,3.8rem)] lg:text-[clamp(4.55rem,5.4vw,5.8rem)] xl:text-[clamp(5.4rem,6.2vw,6.7rem)]",
          topRight:
            "text-[clamp(2.55rem,10.8vw,3.75rem)] lg:text-[clamp(4rem,4.9vw,5.3rem)] xl:text-[clamp(4.75rem,5.5vw,6rem)]",
          lowerRight:
            "text-[clamp(3rem,13vw,4.4rem)] lg:text-[clamp(4.7rem,5.6vw,6rem)] xl:text-[clamp(5.5rem,6.4vw,6.9rem)]",
        }
      : {
          topLeft:
            "text-[clamp(3rem,13vw,4.4rem)] lg:text-[clamp(4.9rem,6.4vw,6.7rem)] xl:text-[clamp(6rem,7.2vw,7.9rem)]",
          lowerLeft:
            "text-[clamp(2.55rem,11vw,3.8rem)] lg:text-[clamp(4.7rem,5.7vw,6rem)] xl:text-[clamp(5.7rem,6.6vw,7.1rem)]",
          topRight:
            "text-[clamp(3rem,13vw,4.4rem)] lg:text-[clamp(4.9rem,6.4vw,6.7rem)] xl:text-[clamp(6rem,7.2vw,7.9rem)]",
          lowerRight:
            "text-[clamp(2.75rem,11.5vw,4rem)] lg:text-[clamp(4rem,5.3vw,5.7rem)] xl:text-[clamp(4.8rem,5.9vw,6.4rem)]",
        };

  useEffect(() => {
    setActiveFilter("All");
  }, [kind]);

  const proofTestimonials = config.proof.testimonialIds
    .map((id) => clientTestimonials.find((testimonial) => testimonial.id === id))
    .filter((testimonial): testimonial is ClientTestimonial => Boolean(testimonial));
  const storyLeadInitial = config.hero.storyLead.charAt(0);
  const storyLeadRemainder = config.hero.storyLead.slice(1);

  const filteredCards = useMemo(() => {
    if (activeFilter === "All") return config.discovery.cards;
    return config.discovery.cards.filter((card) => card.filters.includes(activeFilter));
  }, [activeFilter, config.discovery.cards]);

  const revealWord = (delay: number, direction: -1 | 1) => ({
    initial: reduceMotion ? false : { opacity: 0, x: direction * 64 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.48,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  const revealPhoto = (delay: number, x: number, rotate: number) => ({
    initial: reduceMotion ? false : { opacity: 0, x, y: 54, rotate: rotate + Math.sign(x) * 5 },
    animate: { opacity: 1, x: 0, y: 0, rotate },
    transition: {
      duration: reduceMotion ? 0 : 0.58,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  const openPlanMyEvent = (location: string) => {
    pushLandingEvent(config.path, { cta_location: location, cta_text: config.hero.cta });
    openContactModal({
      eventCategory: config.eventCategory,
      serviceSlug: config.kind,
      additionalDetails: config.additionalDetails,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        {...seo}
        ogImage={`https://elluminate.sg${config.evidence.gallery[0].src}`}
      />
      <OrganizationSchema type="LocalBusiness" />
      <ServiceSchema
        name={config.schemaName}
        description={seo?.description ?? `${config.hero.storyLead} ${config.hero.storyBody}`}
        slug={config.kind}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg/" },
          { name: config.breadcrumb, url: pageUrl },
        ]}
      />
      <FAQSchema faqs={config.fit.faqs} />

      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-[#fffdf8] text-[#0b1f3a]">
          <div className="container relative mx-auto px-4 pb-6 pt-7 sm:px-7 lg:min-h-[930px] lg:px-10 lg:pb-6 lg:pt-0">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-6 top-[205px] hidden overflow-hidden rounded-[3rem] lg:block xl:top-[225px]"
              style={{ backgroundColor: config.theme.stage }}
            >
              <div className="absolute left-[29%] top-[23%] h-12 w-44 rounded-full bg-white">
                <span className="absolute -top-6 left-7 h-14 w-14 rounded-full bg-white" />
                <span className="absolute -top-9 left-[4.25rem] h-20 w-20 rounded-full bg-white" />
                <span className="absolute -top-5 right-6 h-12 w-12 rounded-full bg-white" />
              </div>
              <div className="absolute right-[27%] top-[32%] h-12 w-44 rounded-full bg-white">
                <span className="absolute -top-6 left-8 h-14 w-14 rounded-full bg-white" />
                <span className="absolute -top-9 left-[4.5rem] h-20 w-20 rounded-full bg-white" />
                <span className="absolute -top-5 right-7 h-12 w-12 rounded-full bg-white" />
              </div>
              <div className="absolute left-[35%] top-[58%] h-10 w-36 rounded-full bg-white">
                <span className="absolute -top-5 left-6 h-12 w-12 rounded-full bg-white" />
                <span className="absolute -top-7 right-7 h-16 w-16 rounded-full bg-white" />
              </div>
            </div>

            <p
              className="relative z-50 inline-flex rounded-full border bg-white px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] shadow-sm sm:text-xs lg:absolute lg:left-1/2 lg:top-5 lg:-translate-x-1/2"
              style={{ borderColor: `${config.theme.accent}35`, color: config.theme.deep }}
            >
              {config.label}
            </p>

            <h1
              aria-label={config.hero.semanticHeadline}
              className="relative z-20 mx-auto mt-5 max-w-3xl text-center font-display font-black uppercase leading-[0.68] tracking-[-0.055em] text-[#0b1f3a] lg:absolute lg:inset-0 lg:mt-0 lg:max-w-none lg:tracking-[-0.08em]"
            >
              <span
                className={`flex flex-col items-center gap-[2px] lg:absolute lg:bottom-[725px] lg:left-[2.5%] lg:top-auto lg:w-[40%] lg:items-start lg:text-left xl:bottom-[705px] ${heroTextClasses.topLeft}`}
                style={{ color: config.theme.accent }}
              >
                {config.hero.topLeft.map((word, index) => (
                  <motion.span
                    key={word}
                    {...revealWord(0.06 + index * 0.07, -1)}
                    className="block lg:whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span
                className={`mt-3 flex flex-col items-center gap-[2px] lg:absolute lg:left-[2.5%] lg:top-[215px] lg:mt-0 lg:w-[40%] lg:items-start lg:text-left lg:text-white lg:[text-shadow:0_2px_0_rgba(11,31,58,0.14)] xl:top-[235px] ${heroTextClasses.lowerLeft}`}
                style={{ color: config.theme.deep }}
              >
                {config.hero.lowerLeft.map((word, index) => (
                  <motion.span
                    key={word}
                    {...revealWord(0.2 + index * 0.07, -1)}
                    className="block lg:text-white"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span
                className={`mt-3 flex flex-col items-center gap-[2px] lg:absolute lg:bottom-[725px] lg:right-[2.5%] lg:top-auto lg:mt-0 lg:w-[40%] lg:items-end lg:text-right xl:bottom-[705px] ${heroTextClasses.topRight}`}
                style={{ color: config.theme.accent }}
              >
                {config.hero.topRight.map((word, index) => (
                  <motion.span
                    key={word}
                    {...revealWord(0.34 + index * 0.07, 1)}
                    className="block lg:whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span
                className={`mt-1 flex flex-col items-center gap-[2px] lg:absolute lg:right-[2.5%] lg:top-[215px] lg:mt-0 lg:w-[40%] lg:items-end lg:text-right lg:text-white lg:[text-shadow:0_2px_0_rgba(11,31,58,0.14)] xl:top-[235px] ${heroTextClasses.lowerRight}`}
                style={{ color: config.theme.deep }}
              >
                {config.hero.lowerRight.map((word, index) => (
                  <motion.span
                    key={word}
                    {...revealWord(0.48 + index * 0.07, 1)}
                    className="block lg:text-white"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            <div
              className="relative mt-6 flex flex-col overflow-hidden rounded-[2.5rem] px-4 pb-5 pt-5 shadow-[0_30px_90px_rgba(11,31,58,0.18)] sm:px-6 sm:pb-6 lg:static lg:mt-0 lg:block lg:overflow-visible lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none"
              style={{ backgroundColor: config.theme.stage }}
            >
              <div aria-hidden="true" className="absolute -left-16 top-44 h-12 w-40 rounded-full bg-white lg:hidden">
                <span className="absolute -top-7 left-10 h-16 w-16 rounded-full bg-white" />
                <span className="absolute -top-8 right-7 h-20 w-20 rounded-full bg-white" />
              </div>
              <div aria-hidden="true" className="absolute -right-16 top-[17rem] h-12 w-40 rounded-full bg-white lg:hidden">
                <span className="absolute -top-7 left-8 h-16 w-16 rounded-full bg-white" />
                <span className="absolute -top-8 right-8 h-20 w-20 rounded-full bg-white" />
              </div>

              <div className="relative z-40 order-1 mx-auto mt-2 h-[520px] w-full max-w-[390px] sm:h-[620px] sm:max-w-[470px] lg:absolute lg:bottom-0 lg:left-1/2 lg:z-[55] lg:mt-0 lg:h-[1000px] lg:w-[585px] lg:max-w-none lg:-translate-x-1/2 lg:translate-y-[60px]">
                <motion.figure
                  initial={reduceMotion ? false : { opacity: 0, y: 72 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.64,
                    delay: reduceMotion ? 0 : 0.36,
                    ease: "easeOut",
                  }}
                  className="h-full w-full"
                >
                  <img
                    src={config.hero.actor}
                    alt={config.hero.actorAlt}
                    width={config.hero.actorWidth}
                    height={config.hero.actorHeight}
                    loading="eager"
                    decoding="async"
                    {...{ fetchpriority: "high" }}
                    className="h-full w-full object-cover object-top drop-shadow-[0_30px_34px_rgba(11,31,58,0.2)] lg:object-contain lg:object-bottom"
                  />
                  <figcaption className="sr-only">
                    A fictional campaign model appears with a sparkler. The surrounding photographs show real
                    Elluminate experiences.
                  </figcaption>
                </motion.figure>
              </div>

              <div
                className="relative z-50 order-2 -mt-20 grid grid-cols-2 gap-3 sm:-mt-24 lg:pointer-events-none lg:absolute lg:inset-0 lg:z-30 lg:mt-0 lg:block"
                role="group"
                aria-label={`Real Elluminate ${config.breadcrumb.toLowerCase()} moments`}
              >
                {config.hero.photos.map((photo, index) => {
                  const positions = [
                    "lg:left-[1.5%] lg:top-[38%] lg:w-[15.5%]",
                    "lg:left-[20%] lg:top-[40%] lg:w-[14%]",
                    "lg:right-[26%] lg:top-[51%] lg:w-[21%]",
                    "lg:right-[3.5%] lg:top-[45%] lg:w-[22.5%]",
                  ];
                  const x = index < 2 ? -84 + index * 30 : 54 + (index - 2) * 30;
                  const rotate = index % 2 === 0 ? -3 : 3;
                  return (
                    <motion.figure
                      key={photo.src}
                      {...revealPhoto(0.66 + index * 0.08, x, rotate)}
                      className={`overflow-hidden rounded-[1.5rem] border-4 border-white bg-white shadow-2xl lg:absolute ${positions[index]}`}
                    >
                      <img
                        src={cloudinaryImage(photo.src, { width: 700 })}
                        alt={photo.alt}
                        width={525}
                        height={700}
                        loading={index < 2 ? "eager" : "lazy"}
                        {...(index < 2 ? { fetchpriority: "high" } : {})}
                        className="aspect-[3/4] w-full object-cover"
                        style={{ objectPosition: photo.position ?? "50% 50%" }}
                      />
                    </motion.figure>
                  );
                })}
              </div>

              <motion.blockquote
                initial={reduceMotion ? false : { opacity: 0, x: -36, y: 28 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : 0.96,
                  ease: "easeOut",
                }}
                className="relative z-[60] order-3 mt-5 rounded-[2rem] border border-white bg-[#fffdf8] px-6 py-6 shadow-[0_24px_70px_rgba(11,31,58,0.2)] sm:px-8 sm:py-7 lg:absolute lg:bottom-[50px] lg:left-[4.5%] lg:mt-0 lg:w-[31%] lg:px-7 lg:py-6"
              >
                <Quote
                  aria-hidden="true"
                  className="h-9 w-9"
                  style={{ color: config.theme.deep }}
                />
                <p className="-mt-3 font-display text-lg font-semibold leading-7 text-[#263d5e] sm:text-xl sm:leading-8 lg:text-[1.05rem] lg:leading-7 xl:text-lg">
                  <span
                    className="mr-0.5 inline-block align-baseline text-[2em] font-black uppercase leading-none"
                    style={{ color: config.theme.deep }}
                  >
                    {storyLeadInitial}
                  </span>
                  {storyLeadRemainder}{" "}
                  {config.hero.storyBody}
                </p>
                <Button
                  type="button"
                  variant="hero"
                  size="xl"
                  className="mt-5 w-full px-6 text-white lg:h-auto lg:px-5 lg:py-4 xl:px-7"
                  style={{ backgroundColor: config.theme.deep }}
                  onClick={() => openPlanMyEvent("hero_primary")}
                >
                  {config.hero.cta} <ArrowRight />
                </Button>
              </motion.blockquote>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
              <div className="max-w-3xl">
                <p
                  className="text-sm font-black uppercase tracking-[0.2em]"
                  style={{ color: config.theme.deep }}
                >
                  Why organisers trust us
                </p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                  {config.proof.headline}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c5e76]">{config.proof.body}</p>
              </div>
              <div className="min-w-0">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[#66758b]">
                  {config.proof.testimonialSource}
                </p>
                <div className="grid snap-x snap-mandatory auto-cols-[82%] grid-flow-col gap-3 overflow-x-auto pb-3 sm:auto-cols-[48%] lg:grid-flow-row lg:grid-cols-3 lg:overflow-visible">
                  {proofTestimonials.slice(1).map((testimonial) => (
                    <blockquote
                      key={testimonial.id}
                      className="snap-start rounded-[1.4rem] border border-[#dce6f3] bg-[#f7faff] p-5 shadow-sm"
                    >
                      <Quote className="h-5 w-5" style={{ color: config.theme.deep }} aria-hidden="true" />
                      <p className="mt-3 line-clamp-3 text-sm font-semibold leading-6 text-[#263b58]">
                        {testimonial.excerpt}
                      </p>
                      <footer className="mt-4 text-xs leading-5 text-[#66758b]">
                        <span className="font-black text-[#0b1f3a]">
                          {testimonial.displayName ?? testimonial.name}
                        </span>
                        {testimonial.company ? `, ${testimonial.company}` : ""}
                      </footer>
                    </blockquote>
                  ))}
                </div>
                {proofTestimonials[0] ? (
                  <blockquote className="relative mt-1 overflow-hidden rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-xl sm:p-9">
                    <Quote
                      aria-hidden="true"
                      className="absolute right-7 top-6 h-10 w-10 opacity-80"
                      style={{ color: config.theme.warm }}
                    />
                    <p className="relative max-w-[90%] text-xl font-semibold leading-8">
                      {proofTestimonials[0].excerpt}
                    </p>
                    <footer className="relative mt-5 border-t border-white/[0.15] pt-5 text-sm leading-6 text-white/70">
                      <span className="font-bold text-white">
                        {proofTestimonials[0].displayName ?? proofTestimonials[0].name}
                      </span>
                      {proofTestimonials[0].role ? `, ${proofTestimonials[0].role}` : ""}
                      {proofTestimonials[0].company ? `, ${proofTestimonials[0].company}` : ""}
                    </footer>
                  </blockquote>
                ) : null}
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#dce6f3] bg-[#dce6f3] sm:grid-cols-2 lg:grid-cols-4">
              {config.proof.metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.value} className="flex flex-col items-center bg-[#f7faff] p-6 text-center sm:p-8">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm"
                      style={{ backgroundColor: metric.accent }}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <p
                      className="mt-5 font-display text-4xl font-black tracking-[-0.04em] sm:text-5xl"
                      style={{ color: metric.accent }}
                    >
                      {metric.value}
                    </p>
                    <p className="mx-auto mt-3 max-w-[15rem] text-sm font-semibold leading-6 text-[#4c5e76]">
                      {metric.label}
                    </p>
                  </article>
                );
              })}
            </div>
            <p className="mt-4 text-center text-xs leading-5 text-[#66758b]">{config.proof.metricsSource}</p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fbf7ed] py-20 sm:py-28">
          <div
            className="absolute -right-40 top-20 h-96 w-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: config.theme.danger }}
          />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="max-w-3xl">
                <p
                  className="text-sm font-black uppercase tracking-[0.2em]"
                  style={{ color: config.theme.danger }}
                >
                  {config.stakes.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#0b1f3a] sm:text-7xl">
                  {config.stakes.headline}
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4c5e76]">{config.stakes.body}</p>
              </div>
              <div className="relative min-h-[410px] overflow-hidden sm:min-h-[500px]">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-14 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full opacity-30 sm:h-[25rem] sm:w-[25rem]"
                  style={{ backgroundColor: config.theme.stage }}
                />
                <img
                  src={config.stakes.actor}
                  alt=""
                  width={1024}
                  height={1536}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-0 h-[39rem] w-auto max-w-none -translate-x-1/2 object-contain object-top drop-shadow-[0_24px_28px_rgba(11,31,58,0.2)] sm:h-[47rem]"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/80 bg-white/90 px-5 py-4 shadow-[0_18px_45px_rgba(11,31,58,0.14)] backdrop-blur-md sm:inset-x-8 sm:bottom-6">
                  <p
                    className="text-xs font-black uppercase tracking-[0.18em]"
                    style={{ color: config.theme.danger }}
                  >
                    The organiser&apos;s question
                  </p>
                  <p className="mt-2 font-display text-xl font-black leading-7 text-[#0b1f3a]">
                    {config.stakes.organiserQuestion}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
              <div className="flex flex-col rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-2xl sm:p-9">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                  style={{ backgroundColor: config.theme.danger }}
                >
                  <TriangleAlert className="h-7 w-7" aria-hidden="true" />
                </span>
                <p
                  className="mt-6 text-xs font-black uppercase tracking-[0.22em]"
                  style={{ color: config.theme.warm }}
                >
                  What is at risk
                </p>
                <ul className="mt-7 space-y-5">
                  {config.stakes.items.map((stake, index) => (
                    <li key={stake} className="flex gap-4">
                      <span
                        className="font-display text-xl font-black"
                        style={{ color: config.theme.danger }}
                      >
                        0{index + 1}
                      </span>
                      <span className="leading-7 text-white/[0.78]">{stake}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-white/[0.15] pt-7 text-lg font-semibold leading-8">
                  {config.stakes.closing}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {config.stakes.moments.map((moment) => {
                  const Icon = moment.icon ?? ShieldCheck;
                  return (
                    <figure
                      key={moment.title}
                      className="group relative min-h-[290px] overflow-hidden rounded-[1.6rem] bg-[#0b1f3a] shadow-xl"
                    >
                      <img
                        src={cloudinaryImage(moment.image, { width: 700 })}
                        alt={moment.alt}
                        width={700}
                        height={520}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/35 to-transparent" />
                      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-xl text-[#0b1f3a]"
                          style={{ backgroundColor: config.theme.warm }}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <p className="mt-3 font-display text-xl font-black">{moment.title}</p>
                        <p className="mt-2 text-sm leading-6 text-white/75">{moment.copy}</p>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#0b1f3a] py-20 text-white sm:py-28">
          <div
            className="absolute -left-36 -top-36 -z-10 h-[30rem] w-[30rem] rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: config.theme.accent }}
          />
          <div
            className="absolute -bottom-48 right-0 -z-10 h-[32rem] w-[32rem] rounded-full opacity-15 blur-3xl"
            style={{ backgroundColor: config.theme.danger }}
          />
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-5xl text-center">
              <p
                className="text-sm font-black uppercase tracking-[0.2em]"
                style={{ color: config.theme.warm }}
              >
                Why Elluminate is different
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.96] tracking-[-0.035em] sm:text-6xl">
                {config.comparison.headline}
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/[0.68]">
                {config.comparison.body}
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.35fr_0.92fr] lg:items-center">
              <article className="rounded-[2rem] border border-white/[0.08] bg-[#121a28] p-7 text-white/75 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:p-8">
                <p
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: config.theme.danger }}
                >
                  {config.comparison.commonLabel}
                </p>
                <h3 className="mt-4 font-display text-3xl font-black leading-tight text-white">
                  {config.comparison.commonHeadline}
                </h3>
                <ul className="mt-7 space-y-4">
                  {config.comparison.commonItems.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/50">
                      <XCircle
                        className="mt-1 h-4 w-4 shrink-0 opacity-80"
                        style={{ color: config.theme.danger }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article
                className="relative overflow-hidden rounded-[2.25rem] bg-white p-7 text-[#0b1f3a] shadow-2xl sm:p-10"
                style={{
                  boxShadow: `0 0 0 4px ${config.theme.warm}, 0 25px 70px ${config.theme.accent}28`,
                }}
              >
                <span
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-10 blur-2xl"
                  style={{ backgroundColor: config.theme.accent }}
                />
                <p
                  className="relative text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: config.theme.deep }}
                >
                  The Elluminate way
                </p>
                <h3 className="relative mt-4 font-display text-4xl font-black leading-[1.02]">
                  {config.comparison.elluminateHeadline}
                </h3>
                <ul className="relative mt-8 space-y-4">
                  {config.comparison.elluminateItems.map((item) => (
                    <li key={item} className="flex gap-3 font-semibold leading-7 text-[#40536d]">
                      <CheckCircle2
                        className="mt-1 h-5 w-5 shrink-0"
                        style={{ color: config.theme.deep }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="relative mt-8 border-t border-[#dce6f3] pt-7 text-lg font-black leading-8">
                  {config.comparison.elluminateClosing}
                </p>
              </article>

              <article
                className="rounded-[2rem] p-6 text-[#0b1f3a] shadow-xl sm:p-7"
                style={{ backgroundColor: config.theme.warm }}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b1f3a]/55">
                  Our expertise sequence
                </p>
                <div className="mt-5 space-y-3">
                  {config.comparison.sequence.map((item, index) => {
                    const Icon = item.icon ?? Sparkles;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-2xl border border-[#0b1f3a]/10 bg-white/55 p-3"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b1f3a] text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#0b1f3a]/45">
                            0{index + 1}
                          </p>
                          <p className="font-display text-base font-black">{item.title}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#fffaf0] py-20 sm:py-28">
          <div
            className="absolute -left-40 bottom-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: config.theme.accent }}
          />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-5xl text-center">
              <p
                className="text-sm font-black uppercase tracking-[0.2em]"
                style={{ color: config.theme.deep }}
              >
                {config.value.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.96] tracking-[-0.04em] text-[#0b1f3a] sm:text-7xl">
                {config.value.headline}
              </h2>
              <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-[#4c5e76]">{config.value.body}</p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {config.value.columns.map((column, index) => (
                <article
                  key={column.title}
                  className="rounded-[2rem] border bg-white p-7 shadow-[0_18px_60px_rgba(11,31,58,0.08)] sm:p-8"
                  style={{ borderColor: `${config.theme.accent}32` }}
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl font-display text-sm font-black text-white"
                    style={{ backgroundColor: index === 2 ? config.theme.deep : config.theme.accent }}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-black leading-tight text-[#0b1f3a]">{column.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-7 text-[#4c5e76]">
                        <CheckCircle2
                          className="mt-1 h-5 w-5 shrink-0"
                          style={{ color: config.theme.deep }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-9 max-w-5xl rounded-[2rem] bg-[#0b1f3a] p-7 text-center text-white shadow-xl sm:p-9">
              <p className="font-display text-xl font-black leading-8 sm:text-2xl">{config.value.connectedLine}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {config.value.clarity.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-2 rounded-2xl bg-white/[0.08] p-4 text-sm font-semibold leading-6"
                  >
                    <ShieldCheck
                      className="h-5 w-5 shrink-0"
                      style={{ color: config.theme.warm }}
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
              <Button
                type="button"
                variant="hero"
                size="xl"
                className="mt-8 w-full text-white sm:w-auto"
                style={{ backgroundColor: config.theme.deep }}
                onClick={() => openPlanMyEvent("value_primary")}
              >
                {config.hero.cta} <ArrowRight />
              </Button>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-5xl text-center">
              <p
                className="text-sm font-black uppercase tracking-[0.2em]"
                style={{ color: config.theme.deep }}
              >
                {config.discovery.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                {config.discovery.headline}
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4c5e76]">{config.discovery.body}</p>
              <p
                className="mx-auto mt-7 max-w-4xl rounded-[1.5rem] px-6 py-5 text-base font-bold leading-7"
                style={{ backgroundColor: config.theme.pale, color: config.theme.deep }}
              >
                {config.discovery.callout}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {config.discovery.filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className="rounded-full border px-5 py-2.5 text-sm font-black transition focus:outline-none focus:ring-4 motion-reduce:transition-none"
                  style={
                    activeFilter === filter
                      ? {
                          borderColor: config.theme.deep,
                          backgroundColor: config.theme.deep,
                          color: "#ffffff",
                          boxShadow: `0 0 0 4px ${config.theme.accent}22`,
                        }
                      : {
                          borderColor: `${config.theme.accent}45`,
                          backgroundColor: "#ffffff",
                          color: "#40536d",
                        }
                  }
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCards.map((card) => (
                <ExperienceCard key={card.slug} slug={card.slug} />
              ))}
            </div>

            <div className="mt-16 rounded-[2.5rem] border border-[#e4e9f0] bg-[#fffaf0] p-5 sm:p-8">
              <div className="mx-auto max-w-4xl text-center">
                <h3 className="font-display text-3xl font-black leading-tight text-[#0b1f3a] sm:text-5xl">
                  {config.discovery.collectionHeadline}
                </h3>
                <p className="mx-auto mt-5 max-w-3xl leading-7 text-[#4c5e76]">
                  {config.discovery.collectionBody}
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {config.discovery.groups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <article
                      key={group.title}
                      className={`flex h-full flex-col items-center rounded-[1.75rem] border p-6 text-center ${group.tone}`}
                    >
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-sm"
                        style={{ backgroundColor: group.accent }}
                      >
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <h4 className="mt-5 font-display text-xl font-black text-foreground">{group.title}</h4>
                      <p className="mt-3 min-h-12 text-sm leading-6 text-[#5d6e84]">{group.description}</p>
                      <div className="mt-5 flex flex-wrap justify-center gap-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/services/${item.slug}`}
                            className="rounded-full border border-foreground/10 bg-background px-3 py-1.5 text-xs font-semibold text-foreground/75 transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0b1f3a] py-20 text-white sm:py-28">
          <div
            className="absolute -left-32 top-10 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: config.theme.accent }}
          />
          <div
            className="absolute -right-32 top-24 h-80 w-80 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: config.theme.warm }}
          />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="relative mx-auto max-w-[96rem] xl:min-h-[24rem]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -left-16 hidden h-[24rem] w-[19rem] overflow-hidden xl:block 2xl:left-0"
              >
                <img
                  src={config.evidence.actors.left}
                  alt=""
                  width={583}
                  height={827}
                  loading="lazy"
                  decoding="async"
                  className="absolute bottom-0 left-0 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_22px_28px_rgba(0,0,0,0.28)]"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -right-16 hidden h-[24rem] w-[19rem] overflow-hidden xl:block 2xl:right-0"
              >
                <img
                  src={config.evidence.actors.right}
                  alt=""
                  width={502}
                  height={792}
                  loading="lazy"
                  decoding="async"
                  className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_22px_28px_rgba(0,0,0,0.28)]"
                />
              </div>

              <div className="relative z-10 mx-auto max-w-4xl text-center xl:pt-5">
                <p
                  className="text-sm font-black uppercase tracking-[0.2em]"
                  style={{ color: config.theme.warm }}
                >
                  {config.evidence.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-6xl">
                  {config.evidence.headline}
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/[0.68]">
                  {config.evidence.body}
                </p>
                <Link
                  to="/portfolio"
                  className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-6 font-bold text-white transition hover:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ outlineColor: config.theme.warm }}
                >
                  Explore the portfolio <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div aria-hidden="true" className="pointer-events-none relative mx-auto mt-7 h-72 w-56 overflow-hidden xl:hidden">
                <img
                  src={config.evidence.actors.right}
                  alt=""
                  width={502}
                  height={792}
                  loading="lazy"
                  decoding="async"
                  className="absolute bottom-0 left-1/2 h-[18rem] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_18px_24px_rgba(0,0,0,0.24)]"
                />
              </div>
            </div>

            <div className="mt-8 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 xl:mt-10">
              {config.evidence.gallery.map((item, index) => (
                <figure
                  key={item.src}
                  className={`group relative overflow-hidden rounded-[1.6rem] ${
                    index === 0 ? "sm:row-span-2 lg:col-span-2" : index === 3 ? "lg:col-span-2" : ""
                  }`}
                >
                  <img
                    src={cloudinaryImage(item.src, { width: index === 0 ? 1200 : 760 })}
                    alt={item.alt}
                    width={index === 0 ? 1200 : 760}
                    height={index === 0 ? 960 : 560}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/90 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-bold text-white">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <ClientTestimonialsCarousel
          theme="dark"
          eyebrow={config.evidence.testimonialEyebrow}
          heading={config.evidence.testimonialHeading}
          description={config.evidence.testimonialDescription}
          orderingSeed={config.evidence.orderingSeed}
        />

        <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p
                className="text-sm font-black uppercase tracking-[0.2em]"
                style={{ color: config.theme.deep }}
              >
                Is Elluminate right for you?
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                {config.fit.headline}
              </h2>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <article className="rounded-[2rem] bg-[#0b1f3a] p-7 text-white shadow-xl sm:p-9">
                <p
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: config.theme.success }}
                >
                  You are a strong fit if
                </p>
                <ul className="mt-7 space-y-4">
                  {config.fit.strong.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-white/[0.78]">
                      <CheckCircle2
                        className="mt-1 h-5 w-5 shrink-0"
                        style={{ color: config.theme.success }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
              <article
                className="rounded-[2rem] border p-7 shadow-sm sm:p-9"
                style={{ borderColor: `${config.theme.danger}35`, backgroundColor: `${config.theme.danger}0d` }}
              >
                <p
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: config.theme.danger }}
                >
                  We may not be the right fit if
                </p>
                <ul className="mt-7 space-y-5">
                  {config.fit.different.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-[#40536d]">
                      <XCircle
                        className="mt-1 h-5 w-5 shrink-0"
                        style={{ color: config.theme.danger }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <p
              className="mx-auto mt-7 max-w-4xl rounded-2xl px-6 py-5 text-center text-base font-bold leading-7"
              style={{ backgroundColor: config.theme.pale, color: config.theme.deep }}
            >
              {config.fit.boundary}
            </p>

            <div className="mx-auto mt-16 max-w-5xl">
              <div className="space-y-3">
                {config.fit.faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group overflow-hidden rounded-2xl border border-[#dce6f3] bg-white open:bg-[#f7faff]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-display text-lg font-black text-[#0b1f3a] sm:px-7">
                      <span className="flex items-start gap-4">
                        <span
                          className="mt-0.5 text-xs font-black tracking-[0.18em]"
                          style={{ color: config.theme.deep }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {faq.question}
                      </span>
                      <ChevronRight
                        className="h-5 w-5 shrink-0 transition group-open:rotate-90 motion-reduce:transition-none"
                        style={{ color: config.theme.deep }}
                      />
                    </summary>
                    <p className="border-t border-[#dce6f3] px-5 py-5 leading-7 text-[#4c5e76] sm:px-7">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20"
          style={{ backgroundColor: config.theme.pale }}
        >
          <div
            className="absolute -right-40 top-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: config.theme.accent }}
          />
          <div className="container relative mx-auto px-6 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.48fr] lg:items-center">
              <div className="max-w-3xl">
                <p
                  className="text-sm font-black uppercase tracking-[0.2em]"
                  style={{ color: config.theme.deep }}
                >
                  How it works
                </p>
                <h2 className="mt-4 font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] text-[#0b1f3a] sm:text-6xl">
                  {config.process.headline}
                </h2>
              </div>
              <div
                className="relative mx-auto h-[18rem] w-full max-w-md overflow-hidden lg:-ml-24 lg:h-[20rem] lg:w-[calc(100%+6rem)] lg:max-w-none"
              >
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-52 w-52 rounded-full opacity-30 lg:h-64 lg:w-64"
                  style={{ backgroundColor: config.theme.stage }}
                />
                <img
                  src={config.process.actor}
                  alt=""
                  width={1024}
                  height={1536}
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                  className={
                    kind === "training"
                      ? "pointer-events-none absolute left-1/2 -top-8 h-[54rem] w-auto max-w-none -translate-x-1/2 object-contain object-top drop-shadow-[0_20px_26px_rgba(11,31,58,0.16)] lg:-top-14 lg:left-auto lg:right-[-1.5rem] lg:h-[64rem] lg:translate-x-0"
                      : "pointer-events-none absolute left-1/2 top-0 h-[40rem] w-auto max-w-none -translate-x-1/2 object-contain object-top drop-shadow-[0_20px_26px_rgba(11,31,58,0.16)] lg:left-auto lg:right-[0.5rem] lg:h-[48rem] lg:translate-x-0"
                  }
                />
              </div>
            </div>
            <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
              <div
                className="absolute left-[16%] right-[16%] top-8 hidden h-px lg:block"
                style={{
                  background: `linear-gradient(90deg, ${config.theme.accent}, ${config.theme.warm}, ${config.theme.danger})`,
                }}
              />
              {config.process.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-[2rem] border border-[#dce6f3] bg-white p-7 shadow-sm sm:p-8"
                >
                  <span
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-black text-white"
                    style={{
                      backgroundColor: config.theme.deep,
                      boxShadow: `0 0 0 8px ${config.theme.pale}`,
                    }}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-black text-[#0b1f3a]">{step.title}</h3>
                  <p className="mt-4 leading-7 text-[#4c5e76]">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#0b1f3a] px-6 py-20 text-white sm:py-28 lg:px-12">
          <div
            className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: config.theme.accent }}
          />
          <div
            className="absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: config.theme.danger }}
          />
          <div className="container mx-auto text-center">
            <span
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-[#0b1f3a] shadow-xl"
              style={{ backgroundColor: config.theme.stage }}
            >
              <ClipboardCheck className="h-7 w-7" aria-hidden="true" />
            </span>
            <p
              className="mt-7 text-sm font-black uppercase tracking-[0.2em]"
              style={{ color: config.theme.stage }}
            >
              {config.closing.eyebrow}
            </p>
            <h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl font-black leading-[0.98] tracking-[-0.035em] sm:text-6xl">
              {config.closing.headlineParts.map((part, index) => (
                <span
                  key={`${part.text}-${index}`}
                  style={part.accent ? { color: config.theme.stage } : undefined}
                >
                  {part.text}
                </span>
              ))}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/[0.7]">{config.closing.body}</p>

            <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-white/[0.14] bg-white/[0.08] p-6 text-left backdrop-blur-sm sm:p-8">
              <p
                className="text-center text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: config.theme.stage }}
              >
                What you get from the first enquiry
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {config.closing.enquiryValue.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl bg-white/[0.07] p-4 text-sm font-semibold leading-6 text-white/85"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: config.theme.success }}
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-base font-semibold leading-7 text-white/70">
              {config.closing.bridge}
            </p>
            <p className="mx-auto mt-4 max-w-3xl font-display text-xl font-black leading-8 text-white">
              {config.closing.line}
            </p>
            <Button
              type="button"
              variant="hero"
              size="xl"
              className="mt-8 w-full text-white sm:w-auto"
              style={{ backgroundColor: config.theme.deep }}
              onClick={() => openPlanMyEvent("final_primary")}
            >
              {config.hero.cta} <ArrowRight />
            </Button>

            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-[0.78fr_1.44fr_0.78fr] sm:gap-4">
              {config.closing.photos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`overflow-hidden rounded-[1.5rem] border-4 border-white/10 bg-white/5 ${
                    index === 1 ? "col-span-2 sm:col-span-1" : index === 0 ? "sm:rotate-[-2deg]" : "sm:rotate-[2deg]"
                  }`}
                >
                  <img
                    src={cloudinaryImage(photo.src, { width: index === 1 ? 900 : 560 })}
                    alt={photo.alt}
                    width={index === 1 ? 900 : 560}
                    height={index === 1 ? 600 : 560}
                    loading="lazy"
                    className={`h-full w-full object-cover ${index === 1 ? "aspect-[3/2]" : "aspect-square"}`}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer
        topActivityLinks={config.footerLinks}
        bottomNote="Corporate team building, retreats, and training experiences in Singapore."
      />
    </div>
  );
};

export default ServiceCampaignHubPage;

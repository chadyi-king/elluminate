import { ArrowRight, CheckCircle2, ClipboardCheck, Compass, MapPin, MessageCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { BreadcrumbSchema, OrganizationSchema, ServiceSchema } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { getCampaignPageConfig, type CampaignPageKind } from "@/data/campaignPageConfigs";
import { servicesData } from "@/data/servicesData";
import { cloudinaryImage } from "@/lib/media";
import { getRouteSeo } from "@/data/seoRoutes";

type CategoryHubKind = Extract<CampaignPageKind, "retreats" | "training">;

interface CategoryHubPageProps {
  kind: CategoryHubKind;
}

const CategoryHubPage = ({ kind }: CategoryHubPageProps) => {
  const config = getCampaignPageConfig(kind);
  const { openContactModal } = useContactModal();
  const heroImage = servicesData[config.heroSlug].hero.backgroundImage;

  const openEnquiry = () => {
    openContactModal({
      eventCategory: config.eventCategory,
      additionalDetails: `${config.label} enquiry`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO {...getRouteSeo(`/services/${kind}`)} ogImage={heroImage} />
      <OrganizationSchema />
      <ServiceSchema name={config.h1} description={config.description} slug={kind} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://elluminate.sg/" },
          { name: kind === "retreats" ? "Retreats" : "Training", url: `https://elluminate.sg${config.path}` },
        ]}
      />

      <Navbar />

      <main>
        <section className="relative isolate overflow-hidden bg-foreground text-background">
          <img
            src={cloudinaryImage(heroImage, { width: 1920 })}
            alt={kind === "retreats" ? "Company retreat experience" : "Facilitated corporate workshop"}
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground via-foreground/86 to-foreground/35" />
          <div className="container mx-auto flex min-h-[620px] items-center px-6 py-20 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{config.label}</p>
              <h1 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">{config.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-background/80">{config.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="xl" onClick={openEnquiry}>
                  Plan My Event <ArrowRight />
                </Button>
                <a
                  href="https://wa.me/6588352482"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-background/30 px-6 py-3 font-semibold text-background transition hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-foreground"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp Elluminate
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Explore the category</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">{config.sectionTitle}</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{config.sectionCopy}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {config.services.map((service) => {
                const data = servicesData[service.slug];
                const cardImage = data.hero.backgroundImage.startsWith("/__l5e/")
                  ? "/images/services/workshops/gallery-4.jpg"
                  : data.hero.backgroundImage;
                return (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="group overflow-hidden rounded-lg border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-blue"
                  >
                    <img
                      src={cloudinaryImage(cardImage, { width: 760 })}
                      alt={service.name}
                      width={760}
                      height={475}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-black">{service.name}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {data.overview.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                        Explore this option <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-secondary/35 py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Plan from the brief</p>
                <h2 className="mt-4 font-display text-3xl font-black leading-tight sm:text-5xl">
                  The useful questions come before the final format.
                </h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {config.planningPoints.map((point, index) => {
                  const Icon = [MapPin, Users, Compass][index];
                  return (
                    <article key={point.title} className="rounded-lg border border-border bg-background p-6">
                      <Icon className="h-7 w-7 text-primary" />
                      <h3 className="mt-5 font-display text-xl font-black">{point.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{point.copy}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <ClipboardCheck className="mx-auto h-9 w-9 text-primary" />
              <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Share the details you know so far.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Send your group size, preferred date, timing, and objective. Elluminate can use that context to discuss
                the next practical direction with you.
              </p>
              <Button variant="primary" size="xl" className="mt-8" onClick={openEnquiry}>
                Plan My Event <ArrowRight />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryHubPage;

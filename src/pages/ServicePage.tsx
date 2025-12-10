import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldParticles } from "@/components/GoldParticles";
import { ServiceHero } from "@/components/service-page/ServiceHero";
import { ServiceOverview } from "@/components/service-page/ServiceOverview";
import { ServiceFeatures } from "@/components/service-page/ServiceFeatures";
import { ServiceBenefits } from "@/components/service-page/ServiceBenefits";
import { ServiceTimeline } from "@/components/service-page/ServiceTimeline";
import { ServiceThemes } from "@/components/service-page/ServiceThemes";
import { ServiceMoments } from "@/components/service-page/ServiceMoments";
import { ServiceBehindScenes } from "@/components/service-page/ServiceBehindScenes";
import { ServiceTestimonial } from "@/components/service-page/ServiceTestimonial";
import { ServiceGallery } from "@/components/service-page/ServiceGallery";
import { ServiceCTA } from "@/components/service-page/ServiceCTA";
import { servicesData } from "@/data/servicesData";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-metallic-gold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GoldParticles />
      <Navbar />

      <ServiceHero
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        tagline={service.hero.tagline}
        backgroundImage={service.hero.backgroundImage}
      />

      <ServiceOverview
        description={service.overview.description}
        backgroundImage={service.overview.backgroundImage}
      />

      <ServiceFeatures features={service.features} />

      <ServiceBenefits benefits={service.benefits} />

      {service.timeline && (
        <ServiceTimeline
          title={service.timeline.title}
          steps={service.timeline.steps}
        />
      )}

      {service.themes && <ServiceThemes themes={service.themes} />}

      {service.moments && (
        <ServiceMoments
          title={service.moments.title}
          moments={service.moments.items}
        />
      )}

      {service.behindScenes && (
        <ServiceBehindScenes
          content={service.behindScenes.content}
          backgroundImage={service.behindScenes.backgroundImage}
        />
      )}

      <ServiceGallery images={service.gallery} />

      <ServiceTestimonial testimonials={service.testimonials} />

      <ServiceCTA
        headline={service.cta.headline}
        subtext={service.cta.subtext}
      />

      <Footer />
    </div>
  );
};

export default ServicePage;

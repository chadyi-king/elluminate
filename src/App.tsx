import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useRef } from "react";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { captureAttribution } from "@/lib/attribution";

const Index = lazy(() => import("./pages/Index"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const TeamBuildingHubPage = lazy(() => import("./pages/TeamBuildingHubPage"));
const CategoryHubPage = lazy(() => import("./pages/CategoryHubPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ContactModal = lazy(() =>
  import("@/components/ContactModal").then((module) => ({ default: module.ContactModal })),
);

const queryClient = new QueryClient();

const AttributionInit = () => {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
};

const DeferredContactModal = () => {
  const { isOpen } = useContactModal();
  const hasOpened = useRef(false);

  if (isOpen) {
    hasOpened.current = true;
  }

  if (!hasOpened.current) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <ContactModal />
    </Suspense>
  );
};

// TODO(seo): Confirm /portfolio is the best redirect target for these
// quarantined Large Scale routes, or replace it with a live corporate events hub.
const quarantinedServiceSlugs = [
  "dinner-and-dance",
  "awards-ceremonies",
  "corporate-anniversaries",
  "product-launch",
  "brand-activations",
  "client-appreciation",
  "town-halls",
  "immersive-experiences",
  "event-concept",
  "stage-production",
  "custom-themes",
  "emcee-media",
  "summits",
  "government-events",
  "private-events",
  "family-fun-days",
  "corporate-carnivals",
  "vip-gala",
  "grand-opening",
] as const;

const QuarantinedServiceRedirect = () => <Navigate to="/portfolio" replace />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ContactModalProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AttributionInit />
          <Suspense fallback={<div className="min-h-screen bg-background" aria-hidden="true" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services/team-building" element={<TeamBuildingHubPage />} />
              <Route path="/teambuilding" element={<Navigate to="/services/team-building" replace />} />
              <Route path="/services/retreats" element={<CategoryHubPage kind="retreats" />} />
              <Route path="/services/training" element={<CategoryHubPage kind="training" />} />
              {quarantinedServiceSlugs.map((slug) => (
                <Route key={slug} path={`/services/${slug}`} element={<QuarantinedServiceRedirect />} />
              ))}
              <Route path="/services/corporate-retreats" element={<Navigate to="/services/overseas-retreats" replace />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/thank-you-contact" element={<ThankYouPage />} />
              <Route path="/thank-you/:formName" element={<ThankYouPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <DeferredContactModal />
          <ScrollToTop />
        </BrowserRouter>
      </ContactModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

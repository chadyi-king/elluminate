import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import { ContactModal } from "@/components/ContactModal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { captureAttribution } from "@/lib/attribution";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import TeamBuildingHubPage from "./pages/TeamBuildingHubPage";
import CategoryHubPage from "./pages/CategoryHubPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AttributionInit = () => {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
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
          <ContactModal />
          <ScrollToTop />
        </BrowserRouter>
      </ContactModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

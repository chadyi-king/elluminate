import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FRIENDLY_NAMES: Record<string, string> = {
  contact: "Inquiry",
  quote: "Quote Request",
  newsletter: "Newsletter Signup",
};

export default function ThankYouPage() {
  const { formName = "contact" } = useParams<{ formName: string }>();
  const friendly = FRIENDLY_NAMES[formName] ?? "Submission";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "lead_conversion",
      form_name: formName,
      page_path: window.location.pathname,
    });
  }, [formName]);

  return (
    <>
      <Helmet>
        <title>Thank You | Elluminate</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              {friendly} Received!
            </h1>

            <p className="text-lg text-muted-foreground mb-2">
              Thank you for reaching out to Elluminate.
            </p>
            <p className="text-base text-muted-foreground mb-10">
              Our team will get back to you within <span className="font-semibold text-foreground">1 business day</span>.
              In the meantime, take a look at what we've been up to.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="font-display">
                <Link to="/portfolio">
                  Browse Case Studies <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-display">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
}

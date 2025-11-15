// src/pages/services/TenderSearchPage.tsx

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TenderSearchPage = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                AI-Powered <span className="gradient-text">Tender Search</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Stop wasting time with irrelevant tender alerts. Our advanced
                AI-powered matching algorithm analyzes your business profile to
                find the most relevant tenders from government, private, and NGO
                sources across India.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-semibold mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {[
                  "Real-time alerts via Email, SMS & App",
                  "Intelligent matching based on your profile",
                  "Access to 50,000+ active tenders",
                  "Covers all states and sectors",
                  "Historical data and success analytics",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-md">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar CTA Card */}
          <div
            className="lg:col-span-1 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Card className="glass-card p-6 sticky top-28">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Ready to find your next opportunity?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Get started with our 14-day free trial or contact us for a demo.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 shadow-glow mb-3"
              >
                <Link to="/#pricing">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link to="/#contact">
                  <Mail className="h-4 w-4 mr-2" /> Contact Sales
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderSearchPage;

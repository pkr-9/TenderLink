import { Card } from "@/components/ui/card";
import { AlertCircle, Clock, FileCheck, Users, ArrowRight } from "lucide-react";

export const MarketGap = () => {
  const gaps = [
    {
      icon: AlertCircle,
      problem: "Lack of Awareness",
      problemDesc:
        "Businesses often miss out simply because they don't know opportunities exist. Tenders are scattered across hundreds of disconnected websites.",
      solution: "Centralized Intelligence",
      solutionDesc:
        "We consolidate 647,000+ tenders from government and private sources into one searchable, AI-powered dashboard.",
    },
    {
      icon: Clock,
      problem: "Manual Search Fatigue",
      problemDesc:
        "Manually checking multiple portals daily is inefficient, error-prone, and costs valuable man-hours.",
      solution: "Automated Alerts",
      solutionDesc:
        "Set it and forget it. Receive real-time notifications via WhatsApp, Email, and SMS the moment a relevant tender drops.",
    },
    {
      icon: FileCheck,
      problem: "Eligibility Confusion",
      problemDesc:
        "Complex qualification criteria vary by tender. Many businesses waste time bidding on projects they don't qualify for.",
      solution: "Smart Assessment Tool",
      solutionDesc:
        "Our AI instantly analyzes your profile against tender requirements to tell you exactly which bids you can win.",
    },
    {
      icon: Users,
      problem: "Limited Collaboration",
      problemDesc:
        "Small businesses often lack the resources to bid on large projects alone and struggle to find partners.",
      solution: "Collaboration Hub",
      solutionDesc:
        "Connect with complementary businesses to form consortiums and bid on larger, more lucrative contracts together.",
    },
  ];

  return (
    <section
      id="market-gap"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration consistent with Hero.tsx */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Bridging the <span className="gradient-text">Market Gap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The traditional tender process is broken. Here is how we fixed it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {gaps.map((gap, index) => (
            <Card
              key={index}
              className="glass-card p-0 overflow-hidden hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Problem Side (Red/Muted Tone) */}
                <div className="p-6 bg-red-500/5 border-r border-border/50">
                  <div className="flex items-center gap-2 mb-3 text-destructive">
                    <gap.icon className="h-5 w-5" />
                    <span className="font-semibold text-sm uppercase tracking-wider">
                      The Problem
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground/90">
                    {gap.problem}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {gap.problemDesc}
                  </p>
                </div>

                {/* Solution Side (Brand/Primary Tone) */}
                <div className="p-6 bg-gradient-to-br from-teal/5 to-blue/5 relative">
                  {/* Direction Arrow for desktop */}
                  <div className="hidden md:block absolute top-1/2 -left-3 bg-card rounded-full p-1 border border-border text-muted-foreground z-10">
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <FileCheck className="h-5 w-5" />
                    <span className="font-semibold text-sm uppercase tracking-wider">
                      Our Solution
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">
                    {gap.solution}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {gap.solutionDesc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

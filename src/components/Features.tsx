import { Card } from "@/components/ui/card";
import { Bell, Brain, FileText, Shield, Zap, Target } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Get instant notifications for new tenders matching your business profile via email, SMS, and app.",
    },
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our intelligent algorithm matches you with the most relevant tenders based on your capabilities.",
    },
    {
      icon: FileText,
      title: "Bid Support",
      description: "Complete assistance with bid preparation, documentation, and submission process.",
    },
    {
      icon: Shield,
      title: "GeM & MSME Help",
      description: "End-to-end support for GeM registration, MSME certification, and compliance requirements.",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Fast turnaround time for tender analysis and bid preparation to meet tight deadlines.",
    },
    {
      icon: Target,
      title: "Success Tracking",
      description: "Monitor your bid status, success rates, and get insights to improve future submissions.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="gradient-text">TenderLink</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to find, bid, and win government and private tenders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-gradient-primary w-fit group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

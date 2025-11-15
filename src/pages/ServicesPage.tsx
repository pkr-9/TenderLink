// src/pages/ServicesPage.tsx

import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, FileText, Shield, Bell } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "AI-Powered Tender Search",
    description:
      "Our intelligent algorithm matches you with the most relevant tenders based on your capabilities, saving you time and effort.",
    link: "/services/tender-search",
  },
  {
    icon: FileText,
    title: "Complete Bid Support",
    description:
      "We offer complete assistance with bid preparation, documentation, compliance checks, and the final submission process.",
    link: "/services/bid-support",
  },
  {
    icon: Shield,
    title: "GeM & MSME Registration",
    description:
      "End-to-end support for GeM registration, MSME certification, and other essential compliance requirements.",
    link: "/services/gem-registration",
  },
  {
    icon: Bell,
    title: "MSME Certification",
    description:
      "Navigate the MSME certification process with our expert guidance to unlock benefits and opportunities.",
    link: "/services/msme-certification",
  },
];

const ServicesPage = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide a complete suite of services to help you win tenders,
            from discovery to submission and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-gradient-primary w-fit group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-heading font-semibold mb-2">
                {service.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <Button asChild variant="outline">
                <Link to={service.link}>Learn More</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

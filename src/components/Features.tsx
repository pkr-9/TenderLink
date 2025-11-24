import { Card } from "@/components/ui/card";
import {
  Bell,
  Brain,
  FileCheck,
  ShieldCheck,
  FolderOpen,
  LineChart,
  Handshake,
  Scale,
} from "lucide-react";
export const Features = () => {
  const features = [
    {
      icon: Bell,
      title: "Real-Time Tender Alerts",
      description:
        "Never miss a deadline again. Get instant, personalized notifications via WhatsApp, Email, and SMS for new tenders that strictly match your specific criteria.",
    },
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description:
        "Stop wasting hours on manual searches. Our proprietary AI algorithm analyzes your business profile, past performance, and technical capabilities to recommend tenders.",
    },
    {
      icon: FileCheck,
      title: "Bid Preparation Support",
      description:
        "Craft winning bids with expert guidance. We provide comprehensive support ranging from Bill of Quantities (BoQ) analysis to technical compliance checks and competitive pricing strategies.",
    },
    {
      icon: ShieldCheck,
      title: "GeM & MSME Registration",
      description:
        "Simplify your entry into the government marketplace. We handle the entire end-to-end registration process for GeM (Government e-Marketplace), Udyam (MSME), and other essential vendor portals, ensuring your profile is 100% compliant and verified.",
    },
    {
      icon: FolderOpen,
      title: "Documentation Assistance",
      description:
        "Eliminate the risk of technical rejection due to paperwork errors. We assist in organizing, drafting, and verifying all critical documents, including solvency certificates, financial statements, work experience certificates, and required legal affidavits.",
    },
    {
      icon: LineChart,
      title: "Tender Analytics",
      description:
        "Gain a strategic advantage with data-driven insights. Access deep historical data on tender outcomes, analyze competitor bidding patterns, and understand departmental spending trends to formulate smarter, more competitive bidding strategies.",
    },
    {
      icon: Handshake,
      title: "JV & Consortium Support",
      description:
        "Unlock high-value opportunities by partnering with the right firms. We help you identify and connect with suitable Joint Venture partners or Consortium members to meet strict financial turnover or technical eligibility criteria for large-scale projects.",
    },
    {
      icon: Scale,
      title: "Legal & Compliance Review",
      description:
        "Submit with total confidence. Our legal experts review your final bid documents against complex tender clauses to ensure strict adherence to all legal, regulatory, and technical requirements, minimizing the risk of disqualification.",
    },
  ];

  return (
    <section id="features-services" className="px-6 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="gradient-text">TenderLink</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to find, bid, and win government and private
            tenders
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
              <h3 className="text-xl font-heading font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

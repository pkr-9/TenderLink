import { Card } from "@/components/ui/card";
import { UserPlus, Target, FileCheck, Trophy } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register Your Business",
      description:
        "Create your profile with business details, capabilities, and preferences in minutes.",
    },
    {
      icon: Target,
      title: "Get Matched with Tenders",
      description:
        "Our AI algorithm finds and matches you with relevant government and private tenders.",
    },
    {
      icon: FileCheck,
      title: "Prepare Your Bid",
      description:
        "Use our tools and expert support to create compelling bid packages quickly.",
    },
    {
      icon: Trophy,
      title: "Submit & Win",
      description:
        "Submit your bid through our platform and track your success rate in real-time.",
    },
  ];

  return (
    <section id="how-it-works" className="px-8 py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            How <span className="gradient-text">TenderLink</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple 4-step process to find and win tenders
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary -translate-y-1/2 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="glass-card p-6 relative group hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-glow">
                  {index + 1}
                </div>

                <div className="pt-4">
                  <div className="mb-4 p-3 rounded-lg bg-muted w-fit group-hover:scale-110 transition-transform">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "month",
      description: "Perfect for small businesses starting out",
      features: [
        "100 Tender alerts per month",
        "Basic AI matching",
        "Email notifications",
        "Community support",
        "Standard documentation help",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹2,999",
      period: "month",
      description: "For growing businesses serious about winning",
      features: [
        "Unlimited tender alerts",
        "Advanced AI matching",
        "Email, SMS & App notifications",
        "Priority support",
        "Complete bid support",
        "GeM & MSME registration help",
        "Tender analytics dashboard",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Team collaboration tools",
        "Advanced analytics & reporting",
        "API access",
        "White-label options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "glass-card border-2 border-primary shadow-glow scale-105"
                  : "glass-card"
              } animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-white text-sm font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-primary hover:opacity-90 shadow-glow"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

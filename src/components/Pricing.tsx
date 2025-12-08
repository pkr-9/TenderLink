import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Gold",
      price: "₹51,000",
      period: "subscription",
      description: "Essential tender coverage for growing businesses.",
      features: [
        { name: "Website Access", included: true },
        { name: "WhatsApp Alerts", included: true },
        { name: "Call Support", included: true },
        { name: "Mobile App Access", included: false },
        { name: "Call Alerts", included: false },
        { name: "Collaboration", included: false },
        { name: "11x Bidding Assistance", included: false },
      ],
      cta: "Contact Sales",
      popular: false,
    },
    {
      name: "Platinum",
      price: "₹79,000",
      period: "subscription",
      description: "Priority support and enhanced visibility.",
      features: [
        { name: "Website Access", included: true },
        { name: "WhatsApp Alerts", included: true },
        { name: "Call Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Call Alerts", included: true },
        { name: "Collaboration", included: true },
        { name: "11x Bidding Assistance", included: false },
      ],
      cta: "Contact Sales",
      popular: true,
    },
    {
      name: "Diamond",
      price: "₹1,10,000",
      period: "subscription",
      description: "Ultimate coverage for large-scale operations.",
      features: [
        { name: "Website Access", included: true },
        { name: "WhatsApp Alerts", included: true },
        { name: "Call Support", included: true },
        { name: "Mobile App Access", included: true },
        { name: "Call Alerts", included: true },
        { name: "Collaboration", included: true },
        { name: "11x Bidding Assistance", included: true },
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
            Premium <span className="gradient-text">Subscription Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your business scale. Unlock 11x Bidding
            Assistance and real-time alerts.
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
                  Best Value
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold gradient-text">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full border border-teal-500 flex items-center justify-center text-teal-500">
                        <Check className="h-4 w-4" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full border border-red-500 flex items-center justify-center text-red-500">
                        <X className="h-4 w-4" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-primary hover:opacity-90 shadow-glow"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                <a href="#contact">{plan.cta}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

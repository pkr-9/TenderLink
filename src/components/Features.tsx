import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface FeaturesProps {
  heading?: React.ReactNode;
  subheading?: string;
  className?: string;
}

export const Features = ({
  heading = (
    <>
      Why Choose <span className="gradient-text">TenderLink</span>
    </>
  ),
  subheading = "Everything you need to find, bid, and win government and private tenders",
  className = "",
}: FeaturesProps) => {
  return (
    <section
      id="features-services"
      className={`px-6 py-20 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(servicesData).map(([slug, service], index) => {
            const Icon = service.icon;
            return (
              <Link
                key={slug}
                to={`/services/${slug}`}
                className="block h-full group"
              >
                <Card
                  className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 p-3 rounded-lg bg-gradient-primary w-fit group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm flex-grow">
                    {service.summary}
                  </p>

                  {/* Wider Button-like Structure */}
                  <div className="mt-auto w-full py-3 px-4 rounded-lg bg-secondary/10 border border-primary/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 flex items-center justify-between">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

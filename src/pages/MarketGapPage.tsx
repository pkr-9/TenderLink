import { marketGapData } from "@/data/marketGapData";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const MarketGapPage = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            The <span className="gradient-text">Gap</span> in the Market
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why traditional tendering is broken, and how TenderLink fixes it. We
            identify the critical inefficiencies that hold businesses back.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {marketGapData.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Connector Line */}
              {index !== marketGapData.length - 1 && (
                <div className="absolute left-8 top-16 bottom-[-48px] w-0.5 bg-border md:left-1/2 md:-ml-[1px]" />
              )}

              <div
                className={`flex flex-col md:flex-row gap-8 items-stretch ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon Circle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary z-10 shadow-lg">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Problem Card */}
                <Card className="flex-1 p-8 border-l-4 border-l-red-500 bg-red-50/50 dark:bg-red-950/10">
                  <h3 className="text-lg font-semibold text-red-600 mb-2 flex items-center gap-2">
                    <span className="md:hidden">
                      <item.icon className="h-4 w-4" />
                    </span>
                    The Problem
                  </h3>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-muted-foreground">{item.problem}</p>
                </Card>

                {/* Solution Card */}
                <Card className="flex-1 p-8 border-l-4 border-l-teal-500 bg-teal-50/50 dark:bg-teal-950/10">
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">
                    The Solution
                  </h3>
                  <p className="text-muted-foreground">{item.solution}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketGapPage;

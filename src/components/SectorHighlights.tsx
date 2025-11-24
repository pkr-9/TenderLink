import {
  HardHat,
  Monitor,
  HeartPulse,
  GraduationCap,
  Sprout,
  Zap,
  Building2,
  Truck,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const SectorHighlights = () => {
  const sectors = [
    {
      icon: HardHat,
      title: "Construction",
      desc: "Roads, bridges, urban infra & real estate projects.",
    },
    {
      icon: Monitor,
      title: "IT & Software",
      desc: "Software development, hardware supply & digital services.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      desc: "Medical equipment, pharmaceuticals & hospital services.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Training services, educational materials & infrastructure.",
    },
    {
      icon: Sprout,
      title: "Agriculture",
      desc: "Farming equipment, seeds, fertilizers & irrigation.",
    },
    {
      icon: Zap,
      title: "Energy & Power",
      desc: "Renewable energy, power distribution & electrical works.",
    },
    {
      icon: Building2,
      title: "Railways",
      desc: "Track maintenance, signaling & station redevelopment.",
    },
    {
      icon: Truck,
      title: "Logistics",
      desc: "Transportation, warehousing & supply chain solutions.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Tenders Across <span className="gradient-text">All Sectors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover opportunities tailored to your specific industry
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {sectors.map((sector, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="glass-card p-6 h-full flex flex-col items-center text-center hover:shadow-glow transition-all duration-300 group cursor-pointer border-t-4 border-t-transparent hover:border-t-primary">
                      <div className="mb-4 p-4 rounded-full bg-secondary group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                        <sector.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        {sector.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {sector.desc}
                      </p>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-primary group-hover:translate-x-1 transition-transform"
                      >
                        <a href="/#contact">View Tenders &rarr;</a>
                      </Button>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background border-primary/20 hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-4 bg-background border-primary/20 hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

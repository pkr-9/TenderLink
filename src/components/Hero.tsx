import {
  Search,
  TrendingUp,
  Award,
  Users,
  Building,
  Phone,
  Mail,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  const stats = [
    { icon: TrendingUp, value: "647,619+", label: "Active Tenders" },
    { icon: Building, value: "2,500+", label: "Government Departments" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: Users, value: "12,500+", label: "Happy Clients" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">
                🎯 India's Leading Tender Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Find & Win{" "}
              <span className="gradient-text">Government Tenders</span> with AI
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Discover government, private, and NGO tenders in India with
              real-time alerts, AI-powered matching, and expert bid support. Win
              more tenders, grow your business.
            </p>

            {/* Static Contact / Get Started Box */}
            <div className="inline-block w-full max-w-xl">
              <Card className="glass-card p-4 border-l-4 border-l-primary relative overflow-hidden group">
                {/* Subtle hover effect background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-xl font-heading font-bold mb-2 flex items-center gap-1">
                    Get Started Free
                  </h3>

                  <div className="flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-4">
                    <a
                      href="tel:+917774911330"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/50 transition-all duration-300 flex-1"
                    >
                      <div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          Call for Access
                        </span>
                        <span className="font-bold text-foreground text-lg">
                          +91-7774 911330
                        </span>
                      </div>
                    </a>

                    <div className="hidden md:block w-px h-12 bg-border/50" />

                    <a
                      href="mailto:info@tenderlink.tech"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/50 transition-all duration-300 flex-1"
                    >
                      <div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                          Email Inquiry
                        </span>
                        <span className="font-bold text-foreground text-lg">
                          Contact@tenderinfo.in
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative hidden lg:block">
            <div
              className="relative space-y-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="glass-card p-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

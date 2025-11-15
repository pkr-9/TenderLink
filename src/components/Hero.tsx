import { Search, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  const stats = [
    { icon: TrendingUp, value: "50,000+", label: "Active Tenders" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: Users, value: "10,000+", label: "Happy Clients" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">
                🎯 India's Leading Tender Platform
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Find & Win{" "}
              <span className="gradient-text">Government Tenders</span>{" "}
              with AI
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Discover government, private, and NGO tenders in India with real-time alerts, 
              AI-powered matching, and expert bid support. Win more tenders, grow your business.
            </p>

            {/* Search Bar */}
            <Card className="p-4 glass-card shadow-lg">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for tenders, keywords, or sectors..."
                    className="pl-10 h-12 bg-background/50"
                  />
                </div>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 shadow-glow">
                  Search Tenders
                </Button>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative hidden lg:block">
            <div className="relative space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                      <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* Floating Card */}
              <Card className="glass-card p-6 shadow-glow animate-float">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Latest Tender Match</span>
                  <span className="px-2 py-1 rounded-full bg-gradient-primary text-xs text-white">New</span>
                </div>
                <h4 className="font-semibold mb-2">Supply of Medical Equipment</h4>
                <p className="text-sm text-muted-foreground mb-3">Ministry of Health • ₹2.5 Cr</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">95% Match</span>
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                    View Details →
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

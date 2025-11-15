import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@tenderlink.tech",
      link: "mailto:info@tenderlink.tech",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91-77749-11330",
      link: "tel:+917774911330",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Mumbai, Maharashtra, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you succeed
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <a
                      href={info.link}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 glass-card p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="bg-background/50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background/50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-background/50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="bg-background/50"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

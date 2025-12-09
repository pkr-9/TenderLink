import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Loader2, Send, Building2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    // Replace with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        message: values.message,
        to_name: "TenderLink Team",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      console.error("Email Error:", error);
      toast.error("Failed to send message.", {
        description: "Please try again or contact us directly via phone.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you succeed. Visit our offices or
            send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Contact Details & Map */}
          <div className="space-y-6 flex flex-col">
            {/* Quick Contact Cards */}
            <div className="grid gap-6">
              {/* Email card  */}
              <Card className="glass-card p-5 hover:shadow-glow transition-all duration-300 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue/10 text-blue">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground">
                    Email Us
                  </h3>
                  <a
                    href="mailto:Contact@tenderinfo.in"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    Contact@tenderinfo.in
                  </a>
                </div>
              </Card>
              {/* Phone card  */}
              <Card className="glass-card p-5 hover:shadow-glow transition-all duration-300 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-teal/10 text-teal">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground">
                    Call Us
                  </h3>
                  <a
                    href="tel:+917774911330"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    +91-7774 911330
                  </a>
                </div>
              </Card>
            </div>

            {/* Address Card */}
            <Card className="glass-card p-6 flex-grow flex flex-col justify-center">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Pune Head Office
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Baner, Pune</p>
                    <p>Maharashtra - 411045</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-border/50 mb-6" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Delhi Office
                  </h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Saket, New Delhi</p>
                    <p>Delhi - 110030</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <Card
            className="lg:col-span-2 glass-card p-8 animate-slide-up h-full"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold mb-2">
                Send us a Message
              </h3>
              <p className="text-muted-foreground text-sm">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-background/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-background/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="bg-background/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          rows={5}
                          className="bg-background/50 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
};

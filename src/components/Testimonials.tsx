import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      image: "👨‍💼",
      rating: 5,
      text: "TenderLink transformed our business! We've won 5 government contracts in just 3 months. The AI matching is incredible.",
    },
    {
      name: "Priya Sharma",
      company: "Green Energy Co",
      image: "👩‍💼",
      rating: 5,
      text: "The bid support team is outstanding. They helped us navigate complex documentation and win our first ₹10 Cr tender.",
    },
    {
      name: "Amit Patel",
      company: "Construction Services",
      image: "👨‍🔧",
      rating: 5,
      text: "Real-time alerts ensure we never miss an opportunity. The platform is user-friendly and the support is excellent.",
    },
    {
      name: "Sunita Reddy",
      company: "Medical Supplies Ltd",
      image: "👩‍⚕️",
      rating: 5,
      text: "GeM registration was so smooth with TenderLink. Now we're regularly bidding on healthcare tenders with great success.",
    },
    {
      name: "Vikram Singh",
      company: "IT Services Group",
      image: "👨‍💻",
      rating: 5,
      text: "The analytics and insights help us focus on tenders we're likely to win. Our success rate has improved by 40%.",
    },
    {
      name: "Meera Gupta",
      company: "Educational Solutions",
      image: "👩‍🏫",
      rating: 5,
      text: "Excellent platform for finding education sector tenders. The documentation support saved us countless hours.",
    },
  ];

  return (
    <section className="px-6 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied businesses winning tenders with
            TenderLink
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

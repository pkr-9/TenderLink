import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is TenderLink and how does it work?",
      answer: "TenderLink is an AI-powered platform that helps businesses find and win government, private, and NGO tenders in India. We use advanced algorithms to match your business with relevant opportunities, provide real-time alerts, and offer complete bid support including documentation, GeM registration, and MSME certification.",
    },
    {
      question: "How does the AI matching algorithm work?",
      answer: "Our AI analyzes your business profile, capabilities, past experience, and preferences to match you with the most relevant tenders. It considers factors like sector, location, tender value, requirements, and your historical success rate to present opportunities where you have the highest chance of winning.",
    },
    {
      question: "What kind of support do you provide for bid preparation?",
      answer: "We offer end-to-end bid support including document preparation, technical specifications, financial statements, compliance verification, GeM registration assistance, MSME certification help, and expert review of your bid package before submission. Our team ensures your bid meets all requirements and stands out.",
    },
    {
      question: "Can I try TenderLink before committing to a paid plan?",
      answer: "Yes! All our plans come with a 14-day free trial. You can explore the platform, receive tender alerts, and use our basic features without any commitment. No credit card required for the trial period.",
    },
    {
      question: "How quickly will I start receiving tender notifications?",
      answer: "You'll start receiving tender notifications immediately after completing your business profile. Our AI begins matching you with relevant opportunities within minutes, and you'll receive alerts via email, SMS, and app notifications based on your preferences.",
    },
    {
      question: "Do you cover tenders from all Indian states?",
      answer: "Yes, we cover tenders from all Indian states and union territories, including central government, state government, public sector undertakings, private companies, and NGOs. Our database is updated in real-time with new opportunities.",
    },
    {
      question: "What makes TenderLink different from other tender platforms?",
      answer: "Unlike traditional tender portals, we offer AI-powered matching, proactive alerts, complete bid support, GeM/MSME registration help, and success analytics. We don't just list tenders – we help you win them. Our platform is designed to save you time and increase your success rate.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you'll continue to have access until the end of your billing period.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about TenderLink
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

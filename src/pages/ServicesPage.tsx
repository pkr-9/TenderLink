// not using this page anymore

// import { Card } from "@/components/ui/card";
// import {
//   Bell,
//   Brain,
//   FileCheck,
//   ShieldCheck,
//   FolderOpen,
//   LineChart,
//   Handshake,
//   Scale,
// } from "lucide-react";

// const services = [
//   {
//     icon: Bell,
//     title: "Real-Time Tender Alerts",
//     description:
//       "Never miss a deadline again. Get instant, personalized notifications via WhatsApp, Email, and SMS for new tenders that strictly match your specific criteria. Our automated system monitors over 100+ government and private sources daily to ensure you are the first to know.",
//   },
//   {
//     icon: Brain,
//     title: "AI-Powered Matching",
//     description:
//       "Stop wasting hours on manual searches. Our proprietary AI algorithm analyzes your business profile, past performance, and technical capabilities to recommend tenders with the highest probability of winning. We filter out the noise so you can focus on the opportunities that matter.",
//   },
//   {
//     icon: FileCheck,
//     title: "Bid Preparation Support",
//     description:
//       "Craft winning bids with expert guidance. We provide comprehensive support ranging from Bill of Quantities (BoQ) analysis to technical compliance checks and competitive pricing strategies. Our team ensures your bid is robust, professional, and error-free.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "GeM & MSME Registration",
//     description:
//       "Simplify your entry into the government marketplace. We handle the entire end-to-end registration process for GeM (Government e-Marketplace), Udyam (MSME), and other essential vendor portals, ensuring your profile is 100% compliant and verified.",
//   },
//   {
//     icon: FolderOpen,
//     title: "Documentation Assistance",
//     description:
//       "Eliminate the risk of technical rejection due to paperwork errors. We assist in organizing, drafting, and verifying all critical documents, including solvency certificates, financial statements, work experience certificates, and required legal affidavits.",
//   },
//   {
//     icon: LineChart,
//     title: "Tender Analytics",
//     description:
//       "Gain a strategic advantage with data-driven insights. Access deep historical data on tender outcomes, analyze competitor bidding patterns, and understand departmental spending trends to formulate smarter, more competitive bidding strategies.",
//   },
//   {
//     icon: Handshake,
//     title: "JV & Consortium Support",
//     description:
//       "Unlock high-value opportunities by partnering with the right firms. We help you identify and connect with suitable Joint Venture partners or Consortium members to meet strict financial turnover or technical eligibility criteria for large-scale projects.",
//   },
//   {
//     icon: Scale,
//     title: "Legal & Compliance Review",
//     description:
//       "Submit with total confidence. Our legal experts review your final bid documents against complex tender clauses to ensure strict adherence to all legal, regulatory, and technical requirements, minimizing the risk of disqualification.",
//   },
// ];

// const ServicesPage = () => {
//   return (
//     <section className="py-20 md:py-32">
//       <div className="container mx-auto px-4">
//         {/* Page Title */}
//         <div className="text-center mb-16 animate-slide-up">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
//             Our <span className="gradient-text">Services</span>
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             We provide a complete suite of services to help you win tenders,
//             from discovery and documentation to submission and legal compliance.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="glass-card p-8 hover:shadow-glow transition-all duration-300 group animate-slide-up flex flex-col"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="mb-6 p-4 rounded-xl bg-gradient-primary w-fit group-hover:scale-110 transition-transform shadow-lg">
//                 <service.icon className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-2xl font-heading font-semibold mb-3">
//                 {service.title}
//               </h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 {service.description}
//               </p>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesPage;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { InnerPageLayout } from "./components/InnerPageLayout";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import TenderSearchPage from "./pages/services/TenderSearchPage";
import BidSupportPage from "./pages/services/BidSupportPage";
import GeMRegistrationPage from "./pages/services/GeMRegistrationPage";
import MSMECertificationPage from "./pages/services/MSMECertificationPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CareersPage from "./pages/CareersPage";
import PressKitPage from "./pages/PressKitPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route element={<InnerPageLayout />}>
              <Route path="/about" element={<AboutUsPage />} />
              {/* Add more pages here later, e.t. */}
              <Route path="/services" element={<ServicesPage />} />
              <Route
                path="/services/tender-search"
                element={<TenderSearchPage />}
              />
              <Route
                path="/services/bid-support"
                element={<BidSupportPage />}
              />
              <Route
                path="/services/gem-registration"
                element={<GeMRegistrationPage />}
              />
              <Route
                path="/services/msme-certification"
                element={<MSMECertificationPage />}
              />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route
                path="/terms-of-service"
                element={<TermsOfServicePage />}
              />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/press-kit" element={<PressKitPage />} />
              {/* --------------------------- */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

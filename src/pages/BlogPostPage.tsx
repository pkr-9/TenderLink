// src/pages/BlogPostPage.tsx

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// We use useParams to get the 'slug' from the URL, even for a static page
// This makes it easy to add dynamic content later.

const BlogPostPage = () => {
  const { slug } = useParams(); // e.g., "5-tips-for-winning-government-tenders"

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 animate-slide-up">
            {/* Post Header */}
            <div>
              <span className="text-sm font-medium text-primary">
                Bidding Tips
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold my-4">
                5 Tips for Winning Your First Government Tender
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>by TenderLink Admin</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>November 10, 2025</span>
                </div>
              </div>
            </div>

            {/* Post Body */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Winning your first government tender can seem like a monumental
                task, but with the right preparation, it's well within reach.
                The public procurement process is designed to be fair and
                transparent, but it's also highly competitive.
              </p>
              <p>
                Here are five essential tips to help you navigate the bidding
                process and improve your chances of success.
              </p>

              <h2>1. Understand the Documents Thoroughly</h2>
              <p>
                This is the most critical step. Tender documents (like RFPs,
                RFQs) are often dense and complex. You must read every single
                line. Misunderstanding a single requirement can lead to
                disqualification.
              </p>

              <h2>2. Meet All Eligibility Criteria</h2>
              <p>
                Don't waste time on a tender you aren't qualified for. Check the
                eligibility criteria (turnover, experience, certifications)
                *before* you start preparing your bid.
              </p>

              <h2>3. Prepare a Flawless Bid Package</h2>
              <p>
                Your bid is your only representative. Ensure all documents are
                correctly filled out, signed, stamped, and submitted in the
                exact format required.
              </p>

              <h2>4. Price Competitively, Not Just Cheaply</h2>
              <p>
                While cost is a major factor, it's not the only one. Understand
                the evaluation criteria. Sometimes, the tender is awarded to the
                "Most Economically Advantageous Tender" (MEAT), not just the
                lowest bidder (L1).
              </p>

              <h2>5. Ask for Clarifications</h2>
              <p>
                If any part of the tender is unclear, use the official channel
                (like a pre-bid meeting or clarification portal) to ask
                questions. It's better to ask than to make a wrong assumption.
              </p>
            </div>
          </div>

          {/* Sidebar CTA Card */}
          <div
            className="lg:col-span-1 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Card className="glass-card p-6 sticky top-28">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Never miss a tender
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Get AI-matched tenders sent straight to your inbox with our
                14-day free trial.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 shadow-glow mb-3"
              >
                <Link to="/#pricing">Get Started Free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link to="/#contact">
                  <Mail className="h-4 w-4 mr-2" /> Contact Sales
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostPage;

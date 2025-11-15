// src/pages/BlogListPage.tsx

import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Placeholder blog post data
const blogPosts = [
  {
    slug: "5-tips-for-winning-government-tenders",
    title: "5 Tips for Winning Your First Government Tender",
    date: "November 10, 2025",
    excerpt:
      "Winning your first government tender can be daunting. Here are 5 essential tips to improve your chances and navigate the bidding process.",
    category: "Bidding Tips",
  },
  {
    slug: "understanding-gem-registration",
    title: "Understanding GeM Registration: A Complete Guide",
    date: "November 5, 2025",
    excerpt:
      "The Government e-Marketplace (GeM) is a one-stop-shop for public procurement. We break down the registration process.",
    category: "GeM",
  },
  {
    slug: "the-power-of-msme-certification",
    title: "The Power of MSME Certification in Tendering",
    date: "October 28, 2025",
    excerpt:
      "Having an MSME certificate can provide significant advantages in public procurement. Learn how it can benefit your business.",
    category: "MSME",
  },
];

const BlogListPage = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            TenderLink <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, tips, and updates on India's tender ecosystem, GeM, and
            MSME.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="glass-card p-6 flex flex-col justify-between animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <span className="text-sm font-medium text-primary">
                  {post.category}
                </span>
                <h2 className="text-xl font-heading font-semibold my-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
                <Button asChild variant="ghost" size="sm">
                  <Link to={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;

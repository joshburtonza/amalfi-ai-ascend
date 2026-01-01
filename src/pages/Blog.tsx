import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "ai-phone-answering-revenue-recovery-case-studies",
    title: "Are You Losing R40,000+ Monthly? How AI Phone Answering Recovers Lost Revenue",
    excerpt: "Every missed call is money walking out the door. See real case studies showing how AI voice receptionists recover R40,000+ monthly for South African businesses.",
    date: "2025-12-29",
    readTime: "12 min read",
    category: "Case Studies",
    image: "/images/blog/revenue-recovery-hero.webp"
  },
  {
    slug: "ai-framework-roi-18-months",
    title: "The Proven AI Framework Delivering ROI in 18 Months: A Practical Playbook",
    excerpt: "Smart businesses start with measurable outcomes, then build AI systems that deliver. This 5-step framework eliminates guesswork and accelerates time-to-value.",
    date: "2025-12-22",
    readTime: "14 min read",
    category: "Strategy",
    image: "/images/blog/ai-framework-hero.webp"
  },
  {
    slug: "logistics-ai-automation-2026",
    title: "Why 90% of Logistics Companies Are Switching to AI Automation in 2026",
    excerpt: "Companies report 15-50% cost reductions and 90%+ fewer human errors after deploying AI automation. Here's how to start without risk.",
    date: "2025-12-15",
    readTime: "11 min read",
    category: "Logistics",
    image: "/images/blog/logistics-hero.webp"
  },
  {
    slug: "eliminate-admin-work-ai-automation",
    title: "5 Steps to Eliminate 70% of Admin Work with AI Automation",
    excerpt: "Admin consumes 40-60% of professional services budgets. Firms using this 5-step framework reclaim 4+ hours weekly per employee with 340% first-year ROI.",
    date: "2025-12-08",
    readTime: "10 min read",
    category: "Professional Services",
    image: "/images/blog/admin-automation-hero.webp"
  },
  {
    slug: "recruitment-automation-vs-manual-hiring",
    title: "Recruitment Automation vs Manual Hiring: Which Saves Your Agency 6–12 Hours Weekly?",
    excerpt: "Real-world data shows automated systems deliver up to 24 hours of weekly savings. See the exact breakdown of where your hours disappear.",
    date: "2025-12-01",
    readTime: "9 min read",
    category: "Recruitment",
    image: "/images/blog/recruitment-automation-hero.webp"
  },
  {
    slug: "ai-phone-answering-service",
    title: "Stop Letting Money Ring Out: The AI Voice Receptionist That Never Clocks Out",
    excerpt: "Every missed call is lost revenue. Our AI Voice Receptionist answers every call, 24/7, and books it straight into your system. Typical recovery: R40,000+ monthly.",
    date: "2025-11-24",
    readTime: "10 min read",
    category: "AI Voice",
    image: "/images/blog/ai-phone-answering-hero.webp"
  },
  {
    slug: "ai-automation-service-businesses-2025",
    title: "AI Automation for Service Businesses: The 2025 Playbook",
    excerpt: "Discover how service businesses are leveraging AI to reduce operational costs by 40% while improving customer satisfaction scores.",
    date: "2025-11-17",
    readTime: "8 min read",
    category: "AI Strategy",
    image: "/lovable-uploads/automation-workflow-ecosystem.png"
  },
  {
    slug: "missed-calls-revenue-leak",
    title: "The Hidden Cost of Missed Calls: How Service Businesses Lose R50K+ Annually",
    excerpt: "Every missed call is a missed opportunity. Learn how AI voice technology captures 100% of inbound leads, even at 2 AM.",
    date: "2025-11-10",
    readTime: "6 min read",
    category: "Revenue Recovery",
    image: "/lovable-uploads/automation-workflow-3d.png"
  }
];

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>AI Automation Blog | Amalfi AI</title>
        <meta name="description" content="Expert insights on AI automation for service businesses. Learn strategies to reduce costs, capture more leads, and scale operations with intelligent automation." />
        <link rel="canonical" href="https://amalfi-ai.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              AI Automation <span className="text-primary">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical strategies for service businesses ready to leverage AI for growth, efficiency, and competitive advantage.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-secondary/20">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium pt-2">
                        Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="pb-12 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-secondary/30 border border-border rounded-2xl p-8 text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                Get AI Insights Weekly
              </h2>
              <p className="text-muted-foreground mb-6">
                Join 2,000+ service business owners getting practical AI automation tips.
              </p>
              <NewsletterSignup source="blog" className="max-w-md mx-auto" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to Automate Your Business?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Book a free AI readiness audit and discover how much time and revenue you could recover with intelligent automation.
              </p>
              <Button asChild size="lg" className="font-semibold">
                <Link to="/contact">Book Free AI Audit</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
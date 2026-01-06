import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  category: string;
  image: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('slug, title, excerpt, date, read_time, category, image')
          .eq('published', true)
          .order('date', { ascending: false });

        if (error) {
          console.error('Error fetching blog posts:', error);
          setError('Failed to load blog posts');
          return;
        }

        setBlogPosts(data || []);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">{error}</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No blog posts available yet.</p>
              </div>
            ) : (
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
                            {post.read_time}
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
            )}
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

import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read_time: string;
  category: string;
  image: string;
  content: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        // Fetch the main post
        const { data: postData, error: postError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .maybeSingle();

        if (postError) {
          console.error('Error fetching blog post:', postError);
          setNotFound(true);
          setLoading(false);
          return;
        }

        if (!postData) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        setPost(postData);

        // Fetch related posts
        const { data: relatedData } = await supabase
          .from('blog_posts')
          .select('slug, title, excerpt, date, read_time, category, image, content')
          .eq('published', true)
          .neq('slug', slug)
          .order('date', { ascending: false })
          .limit(2);

        setRelatedPosts(relatedData || []);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Article schema for structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": "Joshua Burton",
      "url": "https://www.amalfiai.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Amalfi AI",
      "url": "https://www.amalfiai.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalfiai.com/lovable-uploads/72de146d-3fae-404a-b3be-acfba75767a7.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.amalfiai.com/blog/${post.slug}`
    },
    "articleSection": post.category
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Amalfi AI Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.amalfiai.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-8 px-4">
          <div className="container mx-auto max-w-3xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.read_time}
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-2xl overflow-hidden aspect-video bg-secondary/20">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="pb-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-primary
                prose-table:text-sm
                prose-th:bg-secondary/30 prose-th:p-3 prose-th:text-left
                prose-td:p-3 prose-td:border-b prose-td:border-border"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
            />
          </div>
        </article>

        {/* CTA Section */}
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3 text-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-6">
                Book a free AI readiness audit and see how automation can transform your business.
              </p>
              <Button asChild size="lg" className="font-semibold">
                <Link to="/contact">Book Free AI Audit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Read Next Section */}
        {relatedPosts.length > 0 && (
          <section className="pb-24 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold mb-8 text-foreground">Read Next</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((nextPost) => (
                  <Link 
                    key={nextPost.slug} 
                    to={`/blog/${nextPost.slug}`}
                    className="group flex gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-secondary/20">
                      <img
                        src={nextPost.image}
                        alt={nextPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-primary">{nextPost.category}</span>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                        {nextPost.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                        Read more <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

// Custom markdown formatter
function formatMarkdown(content: string): string {
  if (!content) return '';
  
  let html = content;
  
  // Handle images: ![alt](src)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-xl my-8" />');
  
  // Handle links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Handle blockquotes with special callout styling
  html = html.replace(/^>\s*(.+)$/gm, '<blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">$1</blockquote>');
  
  // Handle headers
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  
  // Handle horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-border" />');
  
  // Handle bold text
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // Handle italic text
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
  
  // Handle unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 my-4">$&</ul>');
  
  // Handle numbered lists (basic)
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  
  // Handle paragraphs (lines not starting with HTML tags)
  html = html.replace(/^(?!<[a-z]|$)(.+)$/gm, '<p>$1</p>');
  
  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote[^>]*>/g, '<br />');
  
  return html;
}

export default BlogPost;

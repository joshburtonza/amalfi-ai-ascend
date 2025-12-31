import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  "ai-phone-answering-service": {
    slug: "ai-phone-answering-service",
    title: "Stop Letting Money Ring Out: The AI Voice Receptionist That Never Clocks Out",
    excerpt: "Every missed call is lost revenue. Our AI Voice Receptionist answers every call, 24/7, and books it straight into your system. Typical recovery: R40,000+ monthly.",
    date: "2024-12-31",
    readTime: "10 min read",
    category: "AI Voice",
    image: "/images/blog/ai-phone-answering-hero.webp",
    content: `
## Stop Letting Money Ring Out

Every missed call is lost revenue. Our AI Voice Receptionist answers every call, 24/7, and books it straight into your system.

- 100% answer rate guaranteed
- 24/7 availability
- WhatsApp booking confirmations
- Works with any booking system you already use

**Typical outcome:** businesses often recover R40,000+ per month in missed revenue, depending on call volume and service value.

## What You Get

- Instant pickup on every call
- Smart qualification and routing
- Live bookings and updates via WhatsApp
- Clean handover notes to your team
- Local readiness for South Africa, the UK, and the USA

## Why It Works

![AI Voice Receptionist benefits](/images/blog/ai-voice-receptionist-benefits.webp)

- Always-on coverage replaces gaps: after-hours, lunch, peak times
- No voicemail dead ends
- Zero queue frustration
- Consistent, professional service on every call

## Built for South African Businesses

- WhatsApp confirmations customers actually read
- Multi-language handling (including English and Afrikaans)
- Local time zones and public holidays respected
- Integrates with the systems you already trust

## Fast, Structured Implementation

Our proven 5-step process:

1. **Audit & Strategy** – We map your current call handling gaps
2. **Architecture & Blueprint** – Design the perfect call flow for your business
3. **Pilot & Execution** – Test with real calls before full rollout
4. **Deploy & Operate** – Switch on 24/7 coverage
5. **Scale & Optimize** – Continuous improvement based on real data

![Client confirming booking](/images/blog/ai-booking-confirmation.webp)

*Compliance note: Revenue recovery varies by call volume, conversion, and pricing. We guarantee the 100% answer rate; we do not guarantee specific revenue.*

## FAQs

### How is this different from a call centre?
It's your AI Voice Receptionist: brand-trained, always-on, with guaranteed 100% answer rate and direct booking into your systems.

### Will it work with my booking tool?
Yes. Our AI phone answering service works with any booking system.

### Can I expect R40,000+ recovery?
Many businesses do, depending on call volume and value per job. It's typical/possible, not guaranteed.

### Do you handle WhatsApp confirmations?
Yes. We send confirmations and updates via WhatsApp 24/7.

## Choose Your Next Step

Ready to stop losing revenue to missed calls? [Book a 20-minute demo](/contact) or [see pricing and packages](/pricing).
    `
  },
  "ai-automation-service-businesses-2025": {
    slug: "ai-automation-service-businesses-2025",
    title: "AI Automation for Service Businesses: The 2025 Playbook",
    excerpt: "Discover how service businesses are leveraging AI to reduce operational costs by 40% while improving customer satisfaction scores.",
    date: "2024-12-28",
    readTime: "8 min read",
    category: "AI Strategy",
    image: "/lovable-uploads/automation-workflow-ecosystem.png",
    content: `
## The AI Revolution in Service Industries

Service businesses—from HVAC contractors to medical practices—are facing unprecedented pressure to do more with less. Rising labor costs, staffing shortages, and customer expectations for instant responses have created a perfect storm.

**The solution? Intelligent automation.**

### What's Changed in 2025

Unlike the clunky chatbots of years past, today's AI systems can:

- **Understand context** – AI voice agents recognize when a caller needs immediate emergency service vs. a routine appointment
- **Learn continuously** – Systems improve their responses based on successful outcomes
- **Integrate seamlessly** – Connect with your existing CRM, scheduling, and billing systems

### The 40% Cost Reduction Reality

Our clients consistently report 30-50% reductions in operational overhead after implementing AI automation. Here's where the savings come from:

1. **Eliminated missed calls** – 24/7 AI voice reception captures every lead
2. **Reduced admin time** – Automated scheduling, reminders, and follow-ups
3. **Faster hiring** – AI-powered recruitment cuts screening time by 90%

### Getting Started

The key is starting with a focused pilot. Most service businesses see the fastest ROI from:

- **AI Voice Reception** – Capture after-hours calls that currently go to voicemail
- **Automated Lead Qualification** – Score and route leads before your team touches them
- **Smart Scheduling** – Let customers self-book while AI optimizes your calendar

Ready to see what's possible for your business? [Book a free diagnosis call](/contact) and we'll map out your automation roadmap.
    `
  },
  "missed-calls-revenue-leak": {
    slug: "missed-calls-revenue-leak",
    title: "The Hidden Cost of Missed Calls: How Service Businesses Lose R50K+ Annually",
    excerpt: "Every missed call is a missed opportunity. Learn how AI voice technology captures 100% of inbound leads, even at 2 AM.",
    date: "2024-12-20",
    readTime: "6 min read",
    category: "Revenue Recovery",
    image: "/lovable-uploads/automation-workflow-3d.png",
    content: `
## The R50,000 Problem You Don't Know You Have

Here's a sobering statistic: the average service business misses 30-40% of incoming calls. At an average job value of R5,000, that's potentially R50,000+ in lost revenue annually.

**But it gets worse.**

### The Ripple Effect of Missed Calls

When a potential customer calls and gets voicemail, they don't wait. They call your competitor. Studies show:

- **85% of callers** who reach voicemail won't leave a message
- **75% of consumers** expect a response within 5 minutes
- **First responder advantage** – The first business to answer wins 78% of the time

### Why Traditional Solutions Fail

Answering services seem like the obvious fix, but they have critical limitations:

- **Limited hours** – Most cap at business hours or charge premium rates for after-hours
- **No context** – Generic scripts can't answer specific questions about your services
- **No integration** – Leads still need manual entry into your systems

### The AI Voice Alternative

AI voice agents represent a fundamental shift. They:

- **Answer every call** – 24/7/365, including holidays
- **Sound natural** – Modern AI voices are indistinguishable from humans
- **Book appointments** – Direct calendar integration means instant scheduling
- **Qualify leads** – Ask the right questions and route accordingly

### Real Results

One HVAC company implemented AI voice reception and recovered:

- **127 after-hours leads** in the first month
- **R63,500 in new revenue** from previously missed calls
- **4.8 star rating** maintained (customers couldn't tell it was AI)

Stop leaving money on the table. [See how AI voice can work for your business](/contact).
    `
  },
  "recruitment-automation-hiring-faster": {
    slug: "recruitment-automation-hiring-faster",
    title: "From 40 Hours to 4: How AI Transforms Recruitment Workflows",
    excerpt: "Manual resume screening is costing you top talent. See how automated recruitment pipelines accelerate hiring by 10x.",
    date: "2024-12-15",
    readTime: "7 min read",
    category: "Recruitment",
    image: "/lovable-uploads/9bb8f7b5-a01b-4363-96f7-918cc27305ef.png",
    content: `
## The Hiring Bottleneck

Every service business owner knows the pain: you're understaffed, you need to hire, but screening resumes takes 40+ hours per position. Meanwhile, your best candidates accept offers elsewhere.

**Speed wins in today's job market.**

### Why Traditional Hiring Is Broken

The typical hiring process:

1. Post job listing
2. Wait for applications (3-7 days)
3. Manually review resumes (8-15 hours)
4. Schedule phone screens (2-3 days of back-and-forth)
5. Conduct interviews (5-10 hours)
6. Make offer (hopefully they haven't accepted elsewhere)

Total time: 3-4 weeks. Top candidates? Gone in 10 days.

### The AI-Powered Alternative

Automated recruitment pipelines compress weeks into days:

- **Instant screening** – AI evaluates applications against your criteria in seconds
- **Automated scheduling** – Candidates self-select interview slots
- **Skill assessments** – Pre-interview testing filters for competency
- **Predictive matching** – AI identifies candidates most likely to succeed

### The 10x Acceleration

Here's what changes with automation:

| Traditional | AI-Powered |
|-------------|------------|
| 40 hours screening | 4 hours reviewing top candidates |
| 3 days scheduling | Instant self-scheduling |
| 3-4 week process | 5-7 day process |
| 60% offer acceptance | 85% offer acceptance |

### Implementation Blueprint

Getting started doesn't require a complete overhaul:

1. **Start with screening** – Automate resume parsing and initial qualification
2. **Add self-scheduling** – Eliminate the back-and-forth
3. **Implement assessments** – Pre-qualify skills before interviews
4. **Build your talent pipeline** – Nurture candidates for future roles

Ready to hire faster and better? [Let's build your recruitment automation system](/contact).
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get other posts for "Read Next" section
  const otherPosts = Object.values(blogPostsData)
    .filter(p => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} | Amalfi AI Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://amalfi-ai.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
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
                {post.readTime}
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
        {otherPosts.length > 0 && (
          <section className="pb-24 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold mb-8 text-foreground">Read Next</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherPosts.map((nextPost) => (
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
                      <span className="text-sm text-muted-foreground">{nextPost.readTime}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 self-center" />
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

// Enhanced markdown to HTML converter for blog content
function formatMarkdown(content: string): string {
  const lines = content.trim().split('\n');
  let html = '';
  let inList = false;
  let listType = '';
  let inParagraph = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Skip empty lines but close open elements
    if (!line.trim()) {
      if (inList) {
        html += listType === 'ul' ? '</ul>' : '</ol>';
        inList = false;
      }
      if (inParagraph) {
        html += '</p>';
        inParagraph = false;
      }
      continue;
    }

    // Headers
    if (line.startsWith('### ')) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; }
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      html += `<h3>${processInline(line.slice(4))}</h3>`;
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; }
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      html += `<h2>${processInline(line.slice(3))}</h2>`;
      continue;
    }

    // Images
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; }
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      html += `<figure class="my-8"><img src="${imgMatch[2]}" alt="${imgMatch[1]}" class="rounded-xl w-full" />${imgMatch[1] ? `<figcaption class="text-center text-sm text-muted-foreground mt-2">${imgMatch[1]}</figcaption>` : ''}</figure>`;
      continue;
    }

    // Unordered list items
    if (line.startsWith('- ')) {
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      if (!inList || listType !== 'ul') {
        if (inList) html += '</ol>';
        html += '<ul>';
        inList = true;
        listType = 'ul';
      }
      html += `<li>${processInline(line.slice(2))}</li>`;
      continue;
    }

    // Ordered list items
    const olMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      if (!inList || listType !== 'ol') {
        if (inList) html += '</ul>';
        html += '<ol>';
        inList = true;
        listType = 'ol';
      }
      html += `<li>${processInline(olMatch[2])}</li>`;
      continue;
    }

    // Italic text line (compliance notes)
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; }
      if (inParagraph) { html += '</p>'; inParagraph = false; }
      html += `<p class="text-sm italic text-muted-foreground">${line.slice(1, -1)}</p>`;
      continue;
    }

    // Regular paragraph
    if (inList) { html += listType === 'ul' ? '</ul>' : '</ol>'; inList = false; }
    if (!inParagraph) {
      html += '<p>';
      inParagraph = true;
    } else {
      html += ' ';
    }
    html += processInline(line);
  }

  // Close any open elements
  if (inList) html += listType === 'ul' ? '</ul>' : '</ol>';
  if (inParagraph) html += '</p>';

  return html;
}

// Process inline markdown (bold, links, etc.)
function processInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

export default BlogPost;

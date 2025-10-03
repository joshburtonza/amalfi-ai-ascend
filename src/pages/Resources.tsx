import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import { GlowCard } from '@/components/ui/spotlight-card';
import { FileText, BookOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Resources = () => {
  const blogPosts = [
    {
      type: 'blog' as const,
      title: "Understanding AI Maturity Models",
      excerpt: "A comprehensive framework for assessing your organization's AI readiness and planning strategic progression.",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/lovable-uploads/automation-workflow-3d.png"
    },
    {
      type: 'blog' as const,
      title: "From Proof of Concept to Production",
      excerpt: "Navigate the critical journey from experimental AI projects to scalable production systems that deliver business value.",
      date: "2024-01-10",
      readTime: "12 min read",
      image: "/lovable-uploads/automation-workflow-ecosystem.png"
    },
    {
      type: 'blog' as const,
      title: "Building Responsible AI Systems",
      excerpt: "Essential principles and practices for developing AI that is ethical, explainable, and aligned with organizational values.",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/lovable-uploads/c992728c-8637-4a6b-a323-db67c759b05e.png"
    }
  ];

  const whitepapers = [
    {
      type: 'whitepaper' as const,
      title: "AI Infrastructure Playbook",
      excerpt: "A strategic guide to designing, implementing, and scaling AI infrastructure as a core business capability.",
      pages: "42 pages",
      image: "/lovable-uploads/automation-workflow-3d.png"
    },
    {
      type: 'whitepaper' as const,
      title: "The ROI of AI Investment",
      excerpt: "Data-driven insights on measuring and maximizing return on AI investments across industries.",
      pages: "28 pages",
      image: "/lovable-uploads/automation-workflow-ecosystem.png"
    }
  ];

  const caseStudies = [
    {
      type: 'case-study' as const,
      title: "Transforming Recruitment with AI",
      excerpt: "How we helped a leading recruitment firm reduce manual screening time by 80% while improving candidate quality.",
      industry: "Recruitment",
      image: "/lovable-uploads/c992728c-8637-4a6b-a323-db67c759b05e.png"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-hsl(var(--amalfi-teal)/0.05) to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              AI Infrastructure Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Frameworks, guides, and thought leadership to help you build AI as a strategic asset.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Whitepaper */}
      <section className="py-12 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-hsl(var(--amalfi-teal)/0.1) to-transparent pointer-events-none" />
            <div className="relative z-20 max-w-2xl">
              <div className="inline-block px-4 py-2 bg-hsl(var(--amalfi-teal)/0.1) rounded-full mb-6">
                <span className="text-sm font-semibold text-hsl(var(--amalfi-teal))">Featured Resource</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">AI Infrastructure Playbook</h2>
              <p className="text-lg text-muted-foreground mb-8">
                A comprehensive guide to designing and implementing AI infrastructure that scales with your business. Learn our proven frameworks for strategy, architecture, and operationalization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Playbook
                </Button>
                <Button size="lg" variant="outline">
                  Preview Contents
                </Button>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Insights</h2>
              <p className="text-lg text-muted-foreground">
                Expert perspectives on AI infrastructure and strategic implementation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <ResourceCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers & Case Studies */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-hsl(var(--amalfi-surface)/0.3)">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Deep Dives & Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whitepapers.map((paper, index) => (
              <ResourceCard key={index} {...paper} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((study, index) => (
              <ResourceCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-12 rounded-3xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on AI Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get exclusive insights, frameworks, and case studies delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </GlowCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;

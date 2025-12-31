import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { FileText, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NewsletterSignup from '@/components/NewsletterSignup';

const Resources = () => {
  const frameworks = [
    {
      title: "AI Readiness Assessment",
      description: "A structured framework to evaluate your business's readiness for AI implementation. Identifies gaps in infrastructure, processes, and team capabilities.",
      downloadUrl: "/AI_Readiness_Assessment.pdf",
      pages: "12 pages",
      highlights: ["Operational audit checklist", "ROI projection template", "Implementation roadmap"]
    },
    {
      title: "The ROI of AI Investment",
      description: "Data-driven insights on measuring and maximizing return on AI investments. Includes real case studies with actual numbers.",
      downloadUrl: "#",
      pages: "28 pages",
      highlights: ["Cost-benefit analysis framework", "Benchmarking data", "Risk assessment matrix"],
      comingSoon: true
    }
  ];

  const tools = [
    {
      title: "Bottleneck Mapping Template",
      description: "Use this template to identify where time and money leak in your operations. The same tool our consultants use in Diagnosis Sessions.",
      format: "Google Sheets",
      comingSoon: true
    },
    {
      title: "AI Solution Comparison Matrix",
      description: "Compare different AI solutions across key dimensions: cost, implementation time, ROI timeline, and maintenance requirements.",
      format: "PDF + Spreadsheet",
      comingSoon: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources & Frameworks | Amalfi AI</title>
        <meta name="description" content="Free frameworks, templates, and tools to help you evaluate AI readiness and maximize ROI. Download our AI Readiness Assessment and more." />
        <link rel="canonical" href="https://amalfi-ai.com/resources" />
      </Helmet>

      <div className="bg-background min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="max-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Free Resources
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Frameworks & <span className="text-primary">Tools</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                The same frameworks we use with clients—now available for you to assess your AI readiness and plan your implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Download */}
        <section className="py-12 px-4">
          <div className="max-container">
            <GlowCard customSize className="p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="relative z-20 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <span className="text-sm font-semibold text-primary">Featured Resource</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">AI Readiness Assessment</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    A comprehensive framework to evaluate your business's readiness for AI. Identify operational gaps, estimate potential ROI, and create a clear implementation roadmap.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      12-point operational audit checklist
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      ROI projection calculator
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      Implementation priority matrix
                    </li>
                  </ul>
                  <Button size="lg" asChild>
                    <a href="/AI_Readiness_Assessment.pdf" download>
                      <Download className="mr-2 h-5 w-5" />
                      Download Free (PDF)
                    </a>
                  </Button>
                </div>
                <div className="hidden md:block">
                  <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
                    <FileText className="w-16 h-16 text-primary mb-4" />
                    <p className="text-sm text-muted-foreground">12 pages • PDF format</p>
                    <p className="text-2xl font-bold text-foreground mt-2">AI Readiness Assessment</p>
                    <p className="text-muted-foreground mt-2">Used by 50+ businesses to evaluate AI opportunities</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Frameworks Grid */}
        <section className="py-20 px-4">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Frameworks & Whitepapers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic guides to help you evaluate, plan, and implement AI in your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {frameworks.map((framework, index) => (
                <GlowCard key={index} customSize className="p-8 rounded-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="w-10 h-10 text-primary" />
                    {framework.comingSoon && (
                      <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{framework.title}</h3>
                  <p className="text-muted-foreground mb-4">{framework.description}</p>
                  <ul className="space-y-2 mb-6">
                    {framework.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{framework.pages}</span>
                    {!framework.comingSoon ? (
                      <Button variant="outline" size="sm" asChild>
                        <a href={framework.downloadUrl} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4 bg-secondary/20">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Templates & Tools</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Practical tools to help you diagnose bottlenecks and compare solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-background border border-border rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{tool.title}</h3>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                  <p className="text-sm text-muted-foreground">Format: {tool.format}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="py-20 px-4">
          <div className="max-container">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Looking for AI Insights?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Check out our blog for practical strategies, case studies, and implementation guides.
              </p>
              <Button asChild size="lg">
                <Link to="/blog">
                  Read the Blog
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 px-4">
          <div className="max-container max-w-2xl mx-auto">
            <GlowCard customSize className="p-8 md:p-12 rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Get New Resources First
              </h2>
              <p className="text-muted-foreground mb-6">
                Be the first to know when we release new frameworks, tools, and guides.
              </p>
              <NewsletterSignup source="resources" className="max-w-md mx-auto" />
            </GlowCard>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Resources;

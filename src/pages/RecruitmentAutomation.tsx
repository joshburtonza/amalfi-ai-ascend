import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

const RecruitmentAutomation = () => {
  const features = [
    {
      icon: Target,
      title: "Adzuna Position Scraper",
      description: "Automatically pull relevant job postings based on your criteria. Never miss a candidate opportunity."
    },
    {
      icon: Zap,
      title: "AI CV Scanner",
      description: "Explainable scoring system that ranks candidates based on experience, skills, and culture fit."
    },
    {
      icon: Clock,
      title: "Automated Scheduling",
      description: "Let AI handle interview booking, confirmations, and follow-ups while you focus on high-value conversations."
    }
  ];

  const painPoints = [
    "Recruiters spend 30% of their week on repetitive admin tasks",
    "Manual CV screening leads to bias and inconsistency",
    "Candidates fall through the cracks due to slow response times",
    "Interview scheduling creates endless email chains"
  ];

  const outcomes = [
    { metric: "6-12 hours", label: "Saved per recruiter weekly" },
    { metric: "70%", label: "Reduction in admin time" },
    { metric: "3x", label: "Faster candidate response" },
    { metric: "100%", label: "Consistent CV evaluation" }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="max-container relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-6">
              Recruitment Automation
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Automate Your <span className="text-gradient">Recruitment Pipeline</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Source, screen, and schedule smarter — no manual admin
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Book Free AI Audit</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              The Reality of Manual Recruitment
            </h2>
            <div className="grid gap-6">
              {painPoints.map((point, index) => (
                <GlowCard
                  key={index}
                  className="p-6 hover-lift animate-slide-up"
                >
                  <p className="text-lg text-muted-foreground flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    {point}
                  </p>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Your <span className="text-gradient">AI Recruitment</span> System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent automation that handles the repetitive work while you focus on building relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <GlowCard
                key={index}
                className="p-8 hover-lift animate-slide-up"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes/Metrics */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Measurable <span className="text-gradient">Business Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from recruitment teams using Amalfi AI automation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <GlowCard
                key={index}
                className="p-8 text-center hover-lift animate-slide-up"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">
                  {outcome.metric}
                </div>
                <div className="text-muted-foreground font-medium">
                  {outcome.label}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Simple <span className="text-gradient">Implementation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From audit to automation in weeks, not months
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Free 30-Minute Audit",
                description: "We analyze your current recruitment workflow and identify three automation wins. If we can't find them, the audit is free."
              },
              {
                step: "02",
                title: "Custom System Design",
                description: "We build your automation infrastructure tailored to your team's needs, tools, and processes."
              },
              {
                step: "03",
                title: "Seamless Integration",
                description: "Your AI recruitment system integrates with existing tools and trains your team on day one."
              },
              {
                step: "04",
                title: "Continuous Optimization",
                description: "Monthly check-ins ensure your system evolves with your business and delivers consistent ROI."
              }
            ].map((item, index) => (
              <GlowCard
                key={index}
                className="p-8 flex gap-6 items-start hover-lift animate-slide-up"
              >
                <div className="text-5xl font-bold text-primary/20 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-container">
          <GlowCard className="p-12 md:p-16 text-center max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Start with a 30-Minute Recruitment Audit
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              We'll identify three automation wins for your recruitment process. If we don't find them, the audit is completely free.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Book Your Free Audit</a>
            </Button>
          </GlowCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecruitmentAutomation;

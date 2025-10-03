import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Brain, GitBranch, Cog, Activity, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Audit",
      description: "Comprehensive AI readiness assessments, ROI mapping, and maturity modeling to align your AI initiatives with business objectives.",
      deliverables: [
        "Current state assessment",
        "AI opportunity analysis",
        "ROI projections",
        "Strategic roadmap"
      ]
    },
    {
      icon: GitBranch,
      title: "AI Architecture & Blueprinting",
      description: "Design scalable AI infrastructure, governance frameworks, and technical roadmaps that serve as the backbone of your organization.",
      deliverables: [
        "Technical architecture design",
        "Data flow blueprints",
        "Governance frameworks",
        "Integration specifications"
      ]
    },
    {
      icon: Cog,
      title: "Implementation & Automation",
      description: "Deploy AI pipelines, models, and workflow orchestration systems that transform manual processes into intelligent automation.",
      deliverables: [
        "AI pipeline development",
        "Model deployment",
        "Workflow automation",
        "System integration"
      ]
    },
    {
      icon: Activity,
      title: "Operationalization (AI Ops/MLOps)",
      description: "Establish monitoring, retraining, performance optimization, and incident response protocols for production AI systems.",
      deliverables: [
        "Performance monitoring",
        "Model retraining pipelines",
        "Incident response",
        "Continuous optimization"
      ]
    },
    {
      icon: Shield,
      title: "Governance & Risk Management",
      description: "Ensure compliance, explainability, and responsible AI practices with comprehensive audit trails and bias detection.",
      deliverables: [
        "Compliance frameworks (GDPR/CCPA)",
        "Explainability systems",
        "Bias detection & mitigation",
        "Audit trail implementation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Scaling & Optimization",
      description: "Scale AI capabilities across domains with continuous improvement frameworks and sustained value realization.",
      deliverables: [
        "Multi-domain rollout",
        "Performance optimization",
        "Value tracking systems",
        "Continuous improvement"
      ]
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
              AI Infrastructure as a Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Full-stack AI solutions from strategy to scale. We design, implement, and operate the AI backbone that powers modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our services are designed as a full stack — from strategy to scale, we partner with you at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-hsl(var(--amalfi-surface)/0.3)">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              We adapt to your needs with engagement models designed for impact and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glassmorphic p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Project-Based</h3>
              <p className="text-muted-foreground">
                Fixed-scope engagements for specific AI initiatives with clear deliverables and timelines.
              </p>
            </div>
            <div className="glassmorphic p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Retainer Partnership</h3>
              <p className="text-muted-foreground">
                Ongoing strategic partnership for continuous AI evolution and optimization.
              </p>
            </div>
            <div className="glassmorphic p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Build-Operate-Transfer</h3>
              <p className="text-muted-foreground">
                We build, operate, and transfer AI systems to your team with full knowledge transfer.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href="/contact">Discuss Your Needs</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

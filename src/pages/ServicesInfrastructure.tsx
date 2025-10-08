import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Cog, GitBranch, Lock, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesInfrastructure = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Custom AI Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Built for Your Business, From the Ground Up
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When your operation demands something unique, we build it — data pipelines, voice agents, automations, dashboards, and complete AI ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4">
        <div className="max-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Amalfi's Infrastructure Division builds the invisible backbone of intelligent businesses. We design, connect, and orchestrate systems that integrate seamlessly into your workflows — from CRMs and inboxes to analytics and voice.
            </p>
            <p className="text-xl font-semibold text-foreground italic">
              You focus on growth. We build the automation that powers it.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-4">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            What We Build
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Multi-channel AI ecosystems (email, voice, WhatsApp, web)',
              'Workflow automation pipelines using n8n, Make.com, or custom APIs',
              'Data synchronization between CRMs, Supabase, and dashboards',
              'AI orchestration for sales, HR, recruitment, or customer service',
              'Real-time analytics and reporting systems'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Our Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: '1',
                title: 'Discovery & Mapping',
                description: 'Identify bottlenecks and automation opportunities.'
              },
              {
                number: '2',
                title: 'System Design',
                description: 'Architect the automation logic and AI agents required.'
              },
              {
                number: '3',
                title: 'Integration',
                description: 'Connect APIs, data stores, and communication channels.'
              },
              {
                number: '4',
                title: 'Training & Customization',
                description: 'Fine-tune AI tone, logic, and workflows.'
              },
              {
                number: '5',
                title: 'Monitoring & Maintenance',
                description: 'Continuous optimization and support.'
              },
            ].map((step, index) => (
              <GlowCard key={index} customSize className="p-6">
                <div className="text-4xl font-bold text-primary mb-3">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Scale & Security */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="text-center mb-12">
            <Lock className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for Scale & Security
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'GDPR and POPIA compliant data handling',
              'Encrypted workflows and API endpoints',
              'Redundant logic for mission-critical automations'
            ].map((item, index) => (
              <GlowCard key={index} customSize className="p-6 text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground">{item}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Custom Infrastructure */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Why Clients Choose Custom Infrastructure
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cog, title: 'Tailored to specific business models' },
              { icon: GitBranch, title: 'Unified automation across departments' },
              { icon: Zap, title: 'Reduced manual overhead and staff dependency' },
              { icon: TrendingUp, title: '24/7 operational consistency' },
              { icon: CheckCircle, title: 'Ongoing optimization and AI improvement' },
            ].map((benefit, index) => (
              <GlowCard key={index} customSize className="p-6 text-center">
                <benefit.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold">{benefit.title}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Example Use Cases */}
      <section className="py-20 px-4">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Example Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Recruitment firm using AI to handle 1,000 CVs per week automatically',
              'Dental clinic connecting Mark\'s voice system with its CRM',
              'Marketing agency syncing emails, payments, and reports via a unified dashboard',
              'Hospitality business integrating WhatsApp ordering with stock and POS'
            ].map((useCase, index) => (
              <GlowCard key={index} customSize className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{useCase}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Engagement Model
          </h2>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-lg font-bold">Phase</th>
                  <th className="text-left py-4 px-6 text-lg font-bold">Description</th>
                  <th className="text-left py-4 px-6 text-lg font-bold">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    phase: 'Strategy & Architecture',
                    description: 'Process audit, AI mapping, scope design',
                    duration: '1–2 weeks'
                  },
                  {
                    phase: 'Build & Deploy',
                    description: 'Full infrastructure setup',
                    duration: '2–4 weeks'
                  },
                  {
                    phase: 'Optimize & Support',
                    description: 'Maintenance, scaling, fine-tuning',
                    duration: 'Monthly retainer'
                  }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-6 font-semibold">{row.phase}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.description}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to build your custom AI infrastructure?
            </h2>
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesInfrastructure;
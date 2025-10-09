import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Cog, GitBranch, Lock, TrendingUp, Zap, CheckCircle, TrendingDown, Activity, DollarSign, Target } from 'lucide-react';
import { StatCard } from '@/components/StatCard';
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
              Built Around Your Business, Not Just On Top of It
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              When your operation demands something unique, we build it — data pipelines, voice agents, automations, dashboards, and complete AI ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Build My Custom System</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/case-studies">View Examples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quantifiable Impact */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Quantifiable Impact
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              value="70–90%" 
              label="Manual Process Reduction" 
              icon={TrendingDown}
              animated
            />
            <StatCard 
              value="45%" 
              label="Faster Lead Handling" 
              icon={Activity}
              animated
            />
            <StatCard 
              value="88%" 
              label="Improved Data Accuracy" 
              icon={Target}
              animated
            />
            <StatCard 
              value="35%" 
              label="Lower Operational Costs" 
              icon={DollarSign}
              animated
            />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-muted-foreground">
              Amalfi Infrastructure connects your workflows, databases, and automations into a unified intelligence layer.
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
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <GlowCard customSize className="p-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                Healthcare
              </h3>
              <p className="text-muted-foreground mb-3">
                Dental clinic connecting Mark's voice system with its CRM and appointment scheduler.
              </p>
              <div className="text-sm text-primary">
                ✓ 40% reduction in no-shows | ✓ 100% call capture | ✓ Instant booking confirmations
              </div>
            </GlowCard>

            <GlowCard customSize className="p-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                Recruitment
              </h3>
              <p className="text-muted-foreground mb-3">
                Recruitment firm using AI to handle 1,000+ CVs per week with automated scoring and shortlisting.
              </p>
              <div className="text-sm text-primary">
                ✓ 94% screening accuracy | ✓ 3-hour shortlist time | ✓ 70% cost reduction
              </div>
            </GlowCard>

            <GlowCard customSize className="p-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                Agencies
              </h3>
              <p className="text-muted-foreground mb-3">
                Marketing agency syncing emails, payments, and client reports via unified dashboard.
              </p>
              <div className="text-sm text-primary">
                ✓ 85% admin time saved | ✓ Real-time client visibility | ✓ Zero manual data entry
              </div>
            </GlowCard>

            <GlowCard customSize className="p-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                Hospitality
              </h3>
              <p className="text-muted-foreground mb-3">
                Lodge integrating WhatsApp ordering, stock management, and POS system with voice reception.
              </p>
              <div className="text-sm text-primary">
                ✓ 24/7 booking availability | ✓ Automated inventory alerts | ✓ Multi-channel guest comms
              </div>
            </GlowCard>
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
              Build the Intelligent Backbone of Your Business
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's architect an AI infrastructure that scales with your ambition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Strategy Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/systems">View AI Systems</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesInfrastructure;
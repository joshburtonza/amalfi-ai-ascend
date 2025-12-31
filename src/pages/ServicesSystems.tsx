import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Phone, Mail, Brain, Zap, Clock, Users, CheckCircle, ArrowRight, TrendingDown, PhoneOff, AlertTriangle, DollarSign, Target, Shield, Award, Headphones, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/StatCard';
import { ComparisonTable } from '@/components/ComparisonTable';
import { ROIComparison } from '@/components/ROIComparison';
import { Button } from '@/components/ui/button';

const ServicesSystems = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Pre-Built Solutions for Common Problems
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Not every business needs custom architecture. These systems solve the problems we see over and over again.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Missed calls. Drowning inboxes. CV chaos. If these sound familiar, we've already built the fix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Book a Diagnosis Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problems We Solve */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <div className="text-center mb-12">
            <TrendingDown className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Problems We Solve Most Often
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard value="62%" label="Calls Go Unanswered" description="Small-business average" icon={PhoneOff} animated />
            <StatCard value="85%" label="Never Call Back" description="After one missed call" icon={AlertTriangle} animated />
            <StatCard value="78%" label="Choose First Responder" description="Buyers select who answers" icon={Target} animated />
            <StatCard value="$126K+" label="Average Annual Loss" description="From missed calls alone" icon={DollarSign} animated />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-muted-foreground italic">
              "These aren't tech problems. They're business problems that happen to have AI solutions."
            </p>
          </div>
        </div>
      </section>

      {/* Mark - AI Receptionist */}
      <section id="mark" className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Mark — The Missed Call Problem, Solved.</h2>
                <p className="text-xl text-primary italic">Your 24/7 voice receptionist that never misses a call.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Every unanswered call is revenue walking to your competitor. Mark ensures 100% of calls get answered, qualified, and captured—24/7.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {[
                    'Real-time voice conversations via phone, WhatsApp, or web',
                    'Dynamic calendar integration (Google Calendar or n8n backend)',
                    'Smart FAQ engine (services, hours, pricing)',
                    'Lead capture and CRM sync',
                    'Natural human tone with multiple language models'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Ideal For
                </h3>
                <p className="text-muted-foreground mb-6">
                  Businesses that rely on inbound bookings — healthcare, hospitality, recruitment, fitness, and beauty.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground"><strong>Setup Time:</strong> 2–3 days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Model:</strong> Monthly subscription + optional customization tier</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Narrative */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                You're not buying a voice bot.
              </h3>
              <p className="text-lg text-muted-foreground text-center">
                You're buying back every lead your competitors are currently stealing while your phone rings out.
              </p>
            </div>

            {/* Data Insights Table */}
            <div className="mb-8">
              <ComparisonTable 
                title="Data Insights" 
                beforeLabel="Before AI" 
                afterLabel="After Mark" 
                rows={[
                  { metric: "Missed Calls", before: "35–40%", after: "<1%" },
                  { metric: "Lead Response Time", before: "4–6 hours", after: "Instant" },
                  { metric: "Conversion Rate", before: "22%", after: "40%+" },
                  { metric: "Admin Time Saved", before: "—", after: "70% reduction" },
                  { metric: "ROI", before: "—", after: "6× in 6 months" }
                ]} 
              />
            </div>

            {/* ROI Comparison */}
            <div className="mb-8">
              <ROIComparison 
                title="ROI Comparison" 
                traditionalLabel="Human Receptionist" 
                aiLabel="Mark" 
                rows={[
                  { aspect: "Availability", traditional: "8 hours/day", aiSystem: "24/7" },
                  { aspect: "Cost", traditional: "R17k–R25k/month", aiSystem: "R1.8k–R2.5k/month" },
                  { aspect: "Fatigue", traditional: "Yes", aiSystem: "Never" },
                  { aspect: "Consistency", traditional: "Variable", aiSystem: "100%" },
                  { aspect: "ROI", traditional: "Moderate", aiSystem: "5–6× monthly cost" }
                ]} 
              />
            </div>

            {/* Common Use Cases */}
            <div>
              <h3 className="text-xl font-bold mb-4">Common Use Cases</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Dentists & medical practices',
                  'Salons & spas',
                  'HVAC, electricians, plumbers',
                  'Agencies & studios',
                  'Lodges & hospitality'
                ].map((useCase, index) => (
                  <div key={index} className="flex items-center gap-2 bg-primary/5 p-3 rounded">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Clara - AI Customer Success Manager */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <GlowCard customSize className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Clara — The Inbox Chaos Problem, Solved.</h2>
                <p className="text-xl text-primary italic">Your intelligent inbox assistant that reads, prioritizes, and responds with precision.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Your team spends hours sorting emails that an AI could handle in seconds. Clara reads, prioritizes, drafts, and escalates—so humans handle what actually needs humans.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {[
                    'Email & multi-channel inbox automation (Gmail, Outlook, WhatsApp, Instagram DMs)',
                    'Smart intent detection (lead, support, invoice, general inquiry)',
                    'Automated response drafting & escalation logic',
                    'Integration with CRMs, Notion, or ticketing systems',
                    'Sentiment analysis & urgency detection'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Ideal For
                </h3>
                <p className="text-muted-foreground mb-6">
                  Founders, agencies, or teams overloaded with client communication.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground"><strong>Setup Time:</strong> 4–5 days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Model:</strong> Monthly subscription, customizable for single or multi-inbox use</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Outcomes */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Outcomes</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7h → 15m</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+37%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">110+</div>
                  <div className="text-sm text-muted-foreground">Admin Hours Saved/Month</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1 Client</div>
                  <div className="text-sm text-muted-foreground">Pays for Itself</div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Avery - AI Recruiter */}
      <section id="avery" className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Avery — The CV Screening Problem, Solved.</h2>
                <p className="text-xl text-primary italic">Your intelligent hiring assistant that reads, ranks, and recommends candidates.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Your recruiters are drowning in applications, missing great candidates, and wasting time on bad fits. Avery screens, scores, and shortlists—in hours, not days.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {[
                    'CV & resume parsing via email or upload',
                    'AI-based scoring and ranking (education, experience, skills)',
                    'Duplicate detection & candidate justification reports',
                    'Integration with Supabase or client ATS',
                    'Dashboard visualization and analytics'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Ideal For
                </h3>
                <p className="text-muted-foreground mb-6">
                  Recruitment agencies, HR teams, and education placement firms.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground"><strong>Setup Time:</strong> 1 week</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Model:</strong> Subscription or white-label licensing option</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Key Insights</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15 → 250+</div>
                  <div className="text-sm text-muted-foreground">CVs Screened/Hour</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">72% → 94%</div>
                  <div className="text-sm text-muted-foreground">Screening Accuracy</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3 Days → 3h</div>
                  <div className="text-sm text-muted-foreground">Time-to-Shortlist</div>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-2">R4.2K → R1.1K</div>
                  <div className="text-sm text-muted-foreground">Cost per Hire</div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Why Amalfi */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Why Amalfi
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We Solve Problems, Not Just Install Tools
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <GlowCard customSize className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">We Diagnose First</h3>
                  <p className="text-muted-foreground">
                    Every deployment starts with understanding your specific business context.
                  </p>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">We Customize Everything</h3>
                  <p className="text-muted-foreground">
                    No generic templates. Every system is tuned to your workflows and brand.
                  </p>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">We Prove ROI</h3>
                  <p className="text-muted-foreground">
                    Transparent reporting on time saved, leads captured, revenue recovered.
                  </p>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">We Stay Involved</h3>
                  <p className="text-muted-foreground">
                    Monthly optimization and support. Your systems evolve as your business grows.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Solve Your Biggest Bottleneck?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a diagnosis call and find out which system fits your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Book a Diagnosis Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Investment Levels</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesSystems;

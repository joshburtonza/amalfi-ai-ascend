import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Phone, Mail, Brain, Zap, Clock, Users, CheckCircle, ArrowRight, TrendingDown, PhoneOff, AlertTriangle, DollarSign, Target } from 'lucide-react';
import { StatCard } from '@/components/StatCard';
import { ComparisonTable } from '@/components/ComparisonTable';
import { ROIComparison } from '@/components/ROIComparison';
import { Button } from '@/components/ui/button';
import CTABlock from '@/components/CTABlock';
import GuaranteeBlock from '@/components/GuaranteeBlock';

const ServicesSystems = () => {
  return (
    <>
      <Helmet>
        <title>Example Systems - Amalfi AI | AI Voice, Recruitment & Admin Automation</title>
        <meta name="description" content="Productised AI systems: Voice Receptionist, Recruitment Automation, Inbox/Admin. Deployed in 2-3 weeks. R10,000-R25,000 setup + R2,000-R6,000/month." />
        <link rel="canonical" href="https://www.amalfiai.com/services/systems" />
      </Helmet>

      <div className="bg-background min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                Example Systems
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Proven solutions for common problems. Deployed in 2-3 weeks.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Typical investment: R10,000-R25,000 setup + R2,000-R6,000/month (varies by volume and complexity)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/apply" className="flex items-center gap-2">
                    Apply for a Diagnosis Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">View Investment Levels</Link>
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
              <StatCard value="R126K+" label="Average Annual Loss" description="From missed calls alone" icon={DollarSign} animated />
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-muted-foreground italic">
                "These aren't tech problems. They're business problems that happen to have AI solutions."
              </p>
            </div>
          </div>
        </section>

        {/* AI Voice Receptionist */}
        <section id="voice" className="py-20 px-4">
          <div className="max-container">
            <GlowCard customSize className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">AI Voice Receptionist</h2>
                  <p className="text-xl text-primary italic">100% answer rate. R40,000+ monthly recovered. Deployed in 2-3 days.</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                Every unanswered call is revenue walking to your competitor. This system ensures 100% of calls get answered, qualified, and captured—24/7, including after-hours and weekends.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Real-time voice conversations via phone',
                      'WhatsApp confirmations and reminders',
                      'Calendar integration (Google, Outlook, any booking system)',
                      'Smart FAQ handling (services, hours, pricing)',
                      'Lead capture and CRM sync',
                      'Natural human tone, multiple language support'
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
                    Best For
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Businesses that rely on inbound bookings: logistics, healthcare, hospitality, recruitment, fitness, beauty, professional services.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground"><strong>Setup Time:</strong> 2-3 days</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground"><strong>South Africa focus:</strong> WhatsApp confirmations, after-hours coverage, works with local booking systems</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Insights Table */}
              <div className="mb-8">
                <ComparisonTable 
                  title="Typical Results" 
                  beforeLabel="Before" 
                  afterLabel="After" 
                  rows={[
                    { metric: "Missed Calls", before: "35-40%", after: "<1%" },
                    { metric: "Lead Response Time", before: "4-6 hours", after: "Instant" },
                    { metric: "Conversion Rate", before: "22%", after: "40%+" },
                    { metric: "Admin Time", before: "—", after: "70% reduction" }
                  ]} 
                />
              </div>

              {/* ROI Comparison */}
              <div>
                <ROIComparison 
                  title="ROI vs. Human Receptionist" 
                  traditionalLabel="Human Receptionist" 
                  aiLabel="AI Voice System" 
                  rows={[
                    { aspect: "Availability", traditional: "8 hours/day", aiSystem: "24/7" },
                    { aspect: "Cost", traditional: "R17k-R25k/month", aiSystem: "R2k-R6k/month" },
                    { aspect: "Consistency", traditional: "Variable", aiSystem: "100%" },
                    { aspect: "No-show reduction", traditional: "—", aiSystem: "40-60%" }
                  ]} 
                />
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Recruitment Automation */}
        <section id="recruitment" className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-container">
            <GlowCard customSize className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Recruitment Automation</h2>
                  <p className="text-xl text-primary italic">15 → 250+ CVs screened per hour. 3 days → 3 hours time-to-shortlist.</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                Your recruiters are drowning in applications, missing great candidates, and wasting time on bad fits. This system screens, scores, schedules, and follows up—in hours, not days.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'CV/resume parsing and AI-based scoring',
                      'Automated candidate ranking (education, experience, skills)',
                      'Interview scheduling with calendar integration',
                      'WhatsApp and email follow-up sequences',
                      'Adzuna scraping for candidate sourcing',
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
                    Best For
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Recruitment agencies, HR teams, staffing firms, education placement offices.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground"><strong>Setup Time:</strong> 1 week</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Typical Results</h3>
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
                    <div className="text-3xl font-bold text-primary mb-2">70%</div>
                    <div className="text-sm text-muted-foreground">Admin Reduction</div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Inbox & Admin Automation */}
        <section id="inbox" className="py-20 px-4">
          <div className="max-container">
            <GlowCard customSize className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Inbox & Admin Automation</h2>
                  <p className="text-xl text-primary italic">7 hours → 15 minutes response time. 110+ admin hours saved monthly.</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                Your team spends hours sorting emails that an AI could handle in seconds. This system reads, prioritizes, drafts, and escalates—so humans handle what actually needs humans.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Email and multi-channel automation (Gmail, Outlook, WhatsApp, Instagram)',
                      'Smart intent detection (lead, support, invoice, general)',
                      'Automated response drafting and escalation',
                      'CRM and ticketing system integration',
                      'Sentiment analysis and urgency detection'
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
                    Best For
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Founders, agencies, or teams overloaded with client communication.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground"><strong>Setup Time:</strong> 4-5 days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Typical Results</h3>
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
                    <div className="text-sm text-muted-foreground">Hours Saved/Month</div>
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

        {/* What's Included in Every System */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What's Included in Every Deployment
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Architecture Design', desc: 'Custom configuration for your specific workflows' },
                { title: 'Full Integration', desc: 'Connected to your existing tools and systems' },
                { title: 'Staff Training', desc: 'Your team knows how to use and manage the system' },
                { title: 'Testing & QA', desc: 'Thoroughly tested before go-live' },
                { title: 'Monitoring', desc: 'Ongoing performance tracking and alerts' },
                { title: 'Optimization', desc: 'Monthly reviews and continuous improvement' }
              ].map((item, i) => (
                <GlowCard key={i} customSize className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </GlowCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                <strong>Timeline:</strong> Typically 2-3 weeks to live
              </p>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <GuaranteeBlock />

        {/* CTA */}
        <CTABlock 
          headline="See How These Systems Could Work for Your Business"
          subtext="We confirm fit by email before booking. Diagnosis Session: R2,500."
        />

        <Footer />
      </div>
    </>
  );
};

export default ServicesSystems;

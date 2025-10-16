import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Phone, Mail, Brain, Zap, Clock, Users, CheckCircle, ArrowRight, TrendingDown, PhoneOff, AlertTriangle, DollarSign, Target, Shield, Award, Headphones, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/StatCard';
import { ComparisonTable } from '@/components/ComparisonTable';
import { ROIComparison } from '@/components/ROIComparison';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const ServicesSystems = () => {
  return <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Never Miss a Lead Again. Build Your AI Team with Amalfi Systems.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Businesses lose up to <span className="text-primary font-bold">62% of leads</span> from missed calls, unanswered emails, and manual admin bottlenecks.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Amalfi's AI Systems stop the leaks — delivering consistent, 24/7 performance across every channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Book a Discovery Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/case-studies">View System Demos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Hidden Crisis */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <div className="text-center mb-12">
            <TrendingDown className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The Hidden Crisis Killing Your Business Growth
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard value="62%" label="Calls Go Unanswered" description="Small-business average" icon={PhoneOff} animated />
            <StatCard value="85%" label="Never Call Back" description="After one missed call" icon={AlertTriangle} animated />
            <StatCard value="78%" label="Choose First Responder" description="Buyers select who answers" icon={Target} animated />
            <StatCard value="$126K+" label="Average Annual Loss" description="From missed calls alone" icon={DollarSign} animated />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-muted-foreground mb-4">
              Every ring you miss is money you never see. Your marketing, ads, and referrals are wasted if nobody picks up.
            </p>
            <p className="text-2xl font-bold text-gradient">
              Amalfi AI fixes this permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Mark - AI Receptionist */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Mark — The AI Receptionist</h2>
                <p className="text-xl text-primary italic">Your 24/7 voice receptionist that never misses a call.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Mark answers, schedules, reschedules, and confirms appointments for service-based businesses — clinics, salons, lodges, or agencies. He handles every call with warmth, efficiency, and professionalism, ensuring no lead ever slips away.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {['Real-time voice conversations via phone, WhatsApp, or web', 'Dynamic calendar integration (Google Calendar or n8n backend)', 'Smart FAQ engine (services, hours, pricing)', 'Lead capture and CRM sync', 'Natural human tone with multiple language models'].map((feature, index) => <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
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

            {/* Why It Works Quote */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 mb-8 rounded">
              <p className="text-lg italic text-muted-foreground mb-2">
                "Respond within 5 minutes and you're <span className="text-primary font-bold">9× more likely to close a sale</span>."
              </p>
              <p className="text-sm text-muted-foreground">
                — Harvard Business Review
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 text-center">
              Amalfi Voice AI ensures every customer is heard, helped, and converted — instantly.
            </p>

            {/* Data Insights Table */}
            <div className="mb-8">
              <ComparisonTable title="Data Insights" beforeLabel="Before AI" afterLabel="After Mark" rows={[{
              metric: "Missed Calls",
              before: "35–40%",
              after: "<1%"
            }, {
              metric: "Lead Response Time",
              before: "4–6 hours",
              after: "Instant"
            }, {
              metric: "Conversion Rate",
              before: "22%",
              after: "40%+"
            }, {
              metric: "Admin Time Saved",
              before: "—",
              after: "70% reduction"
            }, {
              metric: "ROI",
              before: "—",
              after: "6× in 6 months"
            }]} />
            </div>

            {/* Sales Narrative */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                "We don't replace your receptionist — we protect your revenue."
              </h3>
              <p className="text-lg text-muted-foreground text-center mb-4">
                Missed calls = lost opportunities. Mark isn't a robot; he's your <span className="italic">backup human</span>, trained to answer professionally, qualify leads, and ensure no inquiry slips through.
              </p>
            </div>

            {/* ROI Comparison */}
            <div className="mb-8">
              <ROIComparison title="ROI Comparison" traditionalLabel="Human Receptionist" aiLabel="Mark" rows={[{
              aspect: "Availability",
              traditional: "8 hours/day",
              aiSystem: "24/7"
            }, {
              aspect: "Cost",
              traditional: "R17k–R25k/month",
              aiSystem: "R1.8k–R2.5k/month"
            }, {
              aspect: "Fatigue",
              traditional: "Yes",
              aiSystem: "Never"
            }, {
              aspect: "Consistency",
              traditional: "Variable",
              aiSystem: "100%"
            }, {
              aspect: "ROI",
              traditional: "Moderate",
              aiSystem: "5–6× monthly cost"
            }]} />
            </div>

            {/* Common Use Cases */}
            <div>
              <h3 className="text-xl font-bold mb-4">Common Use Cases</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {['Dentists & medical practices', 'Salons & spas', 'HVAC, electricians, plumbers', 'Agencies & studios', 'Lodges & hospitality'].map((useCase, index) => <div key={index} className="flex items-center gap-2 bg-primary/5 p-3 rounded">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{useCase}</span>
                  </div>)}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Clara — The AI Customer Success Manager</h2>
                <p className="text-xl text-primary italic">Your intelligent inbox assistant that reads, prioritizes, and responds with precision.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Clara manages your email or shared inbox like a seasoned customer success manager. She reads, classifies, and drafts replies instantly — ensuring your clients always receive timely, professional responses.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {['Email & multi-channel inbox automation (Gmail, Outlook, WhatsApp, Instagram DMs)', 'Smart intent detection (lead, support, invoice, general inquiry)', 'Automated response drafting & escalation logic', 'Integration with CRMs, Notion, or ticketing systems', 'Sentiment analysis & urgency detection'].map((feature, index) => <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
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

            {/* Multi-Channel Integration */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Clara transforms chaos into clarity — managing customer messages across <span className="text-primary font-semibold">email, WhatsApp, and DMs</span>.
              </p>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Avery - AI Recruiter */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Avery — The AI Recruiter</h2>
                <p className="text-xl text-primary italic">Your intelligent hiring assistant that reads, ranks, and recommends candidates.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Avery automates candidate screening and analysis. It scans CVs, extracts structured data, scores candidates using AI, and syncs results directly to your recruitment dashboard.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {['CV & resume parsing via email or upload', 'AI-based scoring and ranking (education, experience, skills)', 'Duplicate detection & candidate justification reports', 'Integration with Supabase or client ATS', 'Dashboard visualization and analytics'].map((feature, index) => <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>)}
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

            {/* Technical Breakdown */}
            <div className="bg-gradient-to-r from-primary/5 to-transparent p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Technical Breakdown</h3>
              <p className="text-muted-foreground mb-4">
                Avery uses a sophisticated pipeline: <span className="text-primary font-semibold">n8n → PDF.co → AI parser → Supabase dashboard</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Powered by DeepSeek 3.2 + Claude Haiku 3.5 for multi-layered scoring. Custom recruiter dashboards built in Lovable.dev.
              </p>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* The ROI Case for All Systems */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            The ROI Case for All Systems
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard value="99%+" label="Call Capture Rate" icon={Phone} animated />
            <StatCard value="90%" label="Lower Operational Cost" icon={DollarSign} animated />
            <StatCard value="40%" label="Faster Service Handling" icon={Zap} animated />
            <StatCard value="4–6×" label="ROI Within 90 Days" icon={TrendingUp} animated />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-lg mb-8">
              <p className="text-2xl font-bold text-center mb-4">
                "AI reception isn't the future — it's the hidden infrastructure your competitors are already using."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Amalfi */}
      <section className="py-20 px-4">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Why Amalfi
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Beyond AI Tools — We Build Operational Intelligence
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <GlowCard customSize className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Strategic Consulting</h3>
                  <p className="text-muted-foreground">
                    We study your workflows, not just your tech. Understanding your business context drives meaningful automation.
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
                  <h3 className="text-2xl font-bold mb-2">Tailored Implementation</h3>
                  <p className="text-muted-foreground">
                    AI fine-tuned for your brand voice & systems. No generic templates — every solution fits your business.
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
                  <h3 className="text-2xl font-bold mb-2">Measured ROI</h3>
                  <p className="text-muted-foreground">
                    Transparent reporting on time saved, calls captured, and revenue recovered. We prove value, not promise it.
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
                  <h3 className="text-2xl font-bold mb-2">Ongoing Support</h3>
                  <p className="text-muted-foreground">
                    Monthly optimization & AI performance reviews. Your systems evolve as your business grows.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gradient italic">
              "We don't sell AI. We build intelligent infrastructure that protects your growth."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & Plans */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Pricing & Plans
          </h2>
          
          <div className="max-w-5xl mx-auto overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 px-4 md:px-6 text-base md:text-lg font-bold">Plan</th>
                  <th className="text-left py-4 px-4 md:px-6 text-base md:text-lg font-bold">Setup</th>
                  <th className="text-left py-4 px-4 md:px-6 text-base md:text-lg font-bold">Monthly</th>
                  <th className="text-left py-4 px-4 md:px-6 text-base md:text-lg font-bold">Includes</th>
                </tr>
              </thead>
              <tbody>
                {[{
                plan: "Mark",
                setup: "R8,000–R12,000",
                monthly: "R1,800–R2,500",
                includes: "24/7 AI receptionist, CRM, WhatsApp"
              }, {
                plan: "Clara",
                setup: "R10,000",
                monthly: "R2,000–R3,000",
                includes: "Inbox automation, CRM, sentiment analysis"
              }, {
                plan: "Avery",
                setup: "R15,000",
                monthly: "R3,500–R4,000",
                includes: "CV scoring dashboard, ATS integration"
              }, {
                plan: "Custom Infrastructure",
                setup: "R25,000+",
                monthly: "R3,500+/mo",
                includes: "Tailored automation stack, full integration"
              }].map((row, index) => <tr key={index} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 md:px-6 font-bold text-primary">{row.plan}</td>
                    <td className="py-4 px-4 md:px-6 text-muted-foreground">{row.setup}</td>
                    <td className="py-4 px-4 md:px-6 font-semibold">{row.monthly}</td>
                    <td className="py-4 px-4 md:px-6 text-muted-foreground text-sm">{row.includes}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              All plans include setup consultation, training, and first month of support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet the AI Systems That Never Sleep
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start capturing every opportunity and scaling intelligently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Book a Discovery Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/infrastructure">Explore Infrastructure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ServicesSystems;
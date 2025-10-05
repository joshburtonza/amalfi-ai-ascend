import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, TrendingUp, CheckCircle2, Calculator } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

const AIVoiceReceptionist = () => {
  const [missedCalls, setMissedCalls] = useState(10);
  const [avgCallValue, setAvgCallValue] = useState(400);

  const monthlyLoss = missedCalls * avgCallValue * 4;

  const stats = [
    { value: "40%", label: "of business calls go unanswered" },
    { value: "60%", label: "of customers switch to competitors" },
    { value: "R40k+", label: "average monthly profit lost" }
  ];

  const features = [
    {
      icon: Phone,
      title: "Instant Answering",
      description: "Never miss another call. Your AI receptionist answers in seconds, 24/7."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Confirmations",
      description: "Automatic booking confirmations sent via WhatsApp for seamless customer experience."
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track every call, booking, and revenue opportunity with real-time insights."
    }
  ];

  const tiers = [
    {
      name: "Starter",
      recovery: "~R10k/month",
      features: [
        "Instant call answering",
        "WhatsApp confirmations",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Growth",
      recovery: "~R25k/month",
      features: [
        "Full booking integrations",
        "Advanced call routing",
        "Detailed analytics",
        "Priority support",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Pro",
      recovery: "R40k+",
      features: [
        "Custom voice & tone",
        "Multi-location support",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "White-glove onboarding"
      ]
    }
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
              AI Voice Receptionist
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              Never Lose Another Customer to a <span className="text-gradient">Missed Call</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              South African businesses lose a minimum of R40,000 per month in profit from missed calls. Amalfi AI recovers it automatically.
            </p>
            <Button size="lg" asChild>
              <a href="#calculator">Calculate Your Missed Revenue</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Block */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              The Cost of <span className="text-gradient">Missed Opportunities</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <GlowCard
                  key={index}
                  customSize
                  className="p-8 text-center hover-lift animate-slide-up"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
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
              Your <span className="text-gradient">Revenue Recovery</span> System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Works with any booking system. Answers instantly. Converts automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <GlowCard
                key={index}
                customSize
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

      {/* ROI Calculator */}
      <section id="calculator" className="py-20 px-4 bg-gradient-section">
        <div className="max-container">
          <div className="max-w-4xl mx-auto">
            <GlowCard customSize className="p-8 md:p-12 animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Calculate Your <span className="text-gradient">Missed Revenue</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Missed calls per day
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right text-2xl font-bold text-primary mt-2">
                    {missedCalls}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Average booking value (R)
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={avgCallValue}
                    onChange={(e) => setAvgCallValue(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right text-2xl font-bold text-primary mt-2">
                    R{avgCallValue.toLocaleString()}
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg text-muted-foreground">Monthly lost revenue:</span>
                    <span className="text-4xl font-bold text-gradient">
                      R{monthlyLoss.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Based on {missedCalls} missed calls per day × R{avgCallValue} average value × 4 weeks
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/contact">Get My Recovery Plan</Link>
                  </Button>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Recovery Tiers */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              How Much Revenue <span className="text-gradient">Can You Recover?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We begin with a free ROI audit to calculate your specific recovery potential
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are <span className="text-primary font-semibold">revenue recovery estimates</span> based on typical business scenarios, not service costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <GlowCard
                key={index}
                customSize
                className={`p-8 hover-lift animate-slide-up ${
                  tier.popular ? 'border-2 border-primary' : ''
                }`}
              >
                {tier.popular && (
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-foreground">{tier.name}</h3>
                <div className="text-3xl font-bold text-gradient mb-2">{tier.recovery}</div>
                <p className="text-sm text-muted-foreground mb-6 font-semibold">Revenue recovered monthly</p>
                <div className="border-t border-border pt-6 mb-6">
                  <p className="text-xs text-muted-foreground mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant={tier.popular ? 'default' : 'outline'} className="w-full" asChild>
                  <Link to="/contact">Book Free ROI Audit</Link>
                </Button>
              </GlowCard>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Your actual service investment will be a fraction of the revenue recovered. We only proceed if the ROI justifies the investment.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Before & After <span className="text-gradient">Amalfi AI</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <GlowCard customSize className="border-destructive/30 animate-slide-up">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-destructive">Before</h3>
                  <ul className="space-y-4">
                    {[
                      "40% of calls go to voicemail",
                      "60% of customers call competitors",
                      "R40,000+ lost monthly",
                      "Overworked reception staff",
                      "No after-hours coverage"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-destructive mt-1">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>

              <GlowCard customSize className="border-primary/30 animate-slide-up [animation-delay:200ms]">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">After</h3>
                  <ul className="space-y-4">
                    {[
                      "100% of calls answered instantly",
                      "95% customer satisfaction rate",
                      "R40,000+ recovered monthly",
                      "Staff focus on high-value work",
                      "24/7 professional coverage"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-12 md:p-16 text-center max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Stop Losing Customers to Missed Calls
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Book your free ROI audit and discover exactly how much revenue you're leaving on the table
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Get My Recovery Plan</Link>
            </Button>
          </GlowCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVoiceReceptionist;

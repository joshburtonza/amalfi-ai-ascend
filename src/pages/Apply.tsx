import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield, ArrowRight } from 'lucide-react';
import GuaranteeBlock from '@/components/GuaranteeBlock';

const Apply = () => {
  return (
    <>
      <Helmet>
        <title>Apply for a Diagnosis Call - Amalfi AI</title>
        <meta name="description" content="Apply for a 60-90 minute diagnosis session. We'll confirm fit by email before booking. R2,500 for a deep operational audit with ROI projections." />
        <link rel="canonical" href="https://www.amalfiai.com/apply" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-container px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Apply for a Diagnosis Call
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Not every business is the right fit. We confirm fit by email before booking to respect your time—and ours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Column - Info */}
              <div className="space-y-8">
                <GlowCard customSize className="p-8">
                  <h2 className="text-2xl font-bold mb-6">What Happens After You Apply</h2>
                  <ol className="space-y-4">
                    {[
                      { step: '1', text: 'We review your application within 24 hours' },
                      { step: '2', text: "If there's potential fit, we send a booking link" },
                      { step: '3', text: "You book a 60-90 minute Diagnosis Session" },
                      { step: '4', text: "You walk away with a bottleneck map and ROI estimate" }
                    ].map((item) => (
                      <li key={item.step} className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                          {item.step}
                        </span>
                        <span className="text-muted-foreground pt-1">{item.text}</span>
                      </li>
                    ))}
                  </ol>
                </GlowCard>

                <GlowCard customSize className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Diagnosis Session Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground"><strong>Duration:</strong> 60-90 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary">R2,500</span>
                      <span className="text-muted-foreground">once-off investment</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="font-bold mb-3">What you receive:</h3>
                    <ul className="space-y-2">
                      {[
                        'Complete operational deep-dive',
                        'Bottleneck identification and mapping',
                        'ROI estimate for potential solutions',
                        'Clear recommended roadmap'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-6 text-sm text-muted-foreground italic">
                    If we can't see clear ROI, we'll tell you. Most clients identify R20,000+/month in recoverable value.
                  </p>
                </GlowCard>

                <GuaranteeBlock variant="compact" />
              </div>

              {/* Right Column - Form */}
              <div>
                <GlowCard customSize className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Application Form</h2>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Your Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Website</label>
                        <input 
                          type="url" 
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                          placeholder="https://..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">What industry are you in? *</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select industry...</option>
                        <option value="logistics">Logistics / Transport</option>
                        <option value="recruitment">Recruitment / Staffing</option>
                        <option value="professional-services">Professional Services</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">What's your main operational bottleneck? *</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select primary challenge...</option>
                        <option value="missed-calls">Missed calls / slow response</option>
                        <option value="admin-overload">Admin overload / manual processes</option>
                        <option value="hiring">Hiring / CV screening</option>
                        <option value="scheduling">Scheduling / coordination</option>
                        <option value="customer-service">Customer service bottlenecks</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Rough monthly lead / call volume</label>
                      <select 
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select range...</option>
                        <option value="under-50">Under 50</option>
                        <option value="50-200">50-200</option>
                        <option value="200-500">200-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">What tools do you currently use?</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                        placeholder="CRM, booking system, ATS, email platform..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Are you willing to standardize processes to enable automation? *</label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="standardize" value="yes" required className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="standardize" value="no" required className="w-4 h-4" />
                          <span className="text-muted-foreground">No</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="standardize" value="maybe" required className="w-4 h-4" />
                          <span className="text-muted-foreground">Open to discuss</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Anything else we should know?</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your biggest operational frustration..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <span className="flex items-center gap-2 justify-center">
                        Submit Application
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                      We'll respond within 24 hours.
                    </p>
                  </form>
                </GlowCard>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Apply;

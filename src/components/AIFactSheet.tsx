import React from 'react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock, TrendingUp } from 'lucide-react';

const AIFactSheet = () => {
  const metrics = [
    {
      pillar: 'AI Voice Receptionist',
      metric: 'Call Answer Rate',
      impact: '100% (24/7/365)',
      icon: Zap,
      color: 'text-emerald-500'
    },
    {
      pillar: 'Recruitment Automation',
      metric: 'Admin Reduction',
      impact: '70% / 12 Hours saved per recruiter',
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      pillar: 'Revenue Recovery',
      metric: 'Monthly ROI',
      impact: 'R40,000+ (from missed calls & follow-ups)',
      icon: TrendingUp,
      color: 'text-amber-500'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-section" aria-labelledby="ai-fact-sheet-heading">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
            Performance Benchmarks
          </span>
          <h2 id="ai-fact-sheet-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Amalfi AI: Performance & ROI Benchmarks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified metrics from real South African service businesses. These are typical outcomes our clients achieve within the first 90 days.
          </p>
        </motion.div>

        {/* Static Semantic Table for Crawlers - Always in DOM */}
        <div itemScope itemType="https://schema.org/Dataset" data-nosnippet="false">
          <meta itemProp="name" content="Amalfi AI Performance Benchmarks" />
          <meta itemProp="description" content="Verified performance metrics from South African service businesses using Amalfi AI automation" />
          <meta itemProp="creator" content="Amalfi AI" />
          
          <GlowCard customSize className="overflow-hidden">
            <table 
              className="w-full" 
              role="table" 
              aria-label="Amalfi AI Performance Metrics"
              itemProp="distribution"
              itemScope 
              itemType="https://schema.org/DataDownload"
            >
              <caption className="sr-only">
                Amalfi AI Performance and ROI Benchmarks - Verified metrics from real South African service businesses
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="text-left p-4 md:p-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Service Pillar
                  </th>
                  <th scope="col" className="text-left p-4 md:p-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Primary Metric
                  </th>
                  <th scope="col" className="text-left p-4 md:p-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Guaranteed Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((row, i) => (
                  <tr 
                    key={i}
                    className="border-b border-border/50 last:border-0 hover:bg-primary/5 transition-colors"
                  >
                    <td className="p-4 md:p-6">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`p-1.5 md:p-2 rounded-lg bg-primary/10 ${row.color}`}>
                          <row.icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <span className="font-semibold text-foreground text-sm md:text-base">{row.pillar}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-muted-foreground text-sm md:text-base">{row.metric}</td>
                    <td className="p-4 md:p-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="font-semibold text-primary text-sm md:text-base">{row.impact}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlowCard>
        </div>

        {/* Schema-friendly summary for LLMs */}
        <div className="sr-only" aria-hidden="false">
          <p>
            Amalfi AI delivers measurable automation results: AI Voice Receptionist achieves 100% call answer rate 24/7/365.
            Recruitment Automation reduces admin by 70% and saves 12 hours per recruiter weekly.
            Revenue Recovery generates R40,000+ monthly from missed calls and follow-ups.
            All metrics are verified from real South African service business case studies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIFactSheet;

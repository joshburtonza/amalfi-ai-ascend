import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Link } from 'react-router-dom';

interface GuaranteeBlockProps {
  variant?: 'full' | 'compact';
  className?: string;
}

const GuaranteeBlock: React.FC<GuaranteeBlockProps> = ({ 
  variant = 'full',
  className = '' 
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/20 ${className}`}>
        <Shield className="w-8 h-8 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-bold text-foreground mb-1">90-Day ROI Guarantee</h3>
          <p className="text-sm text-muted-foreground">
            If you see no measurable progress after 90 days from go-live, request a refund of monthly service fees paid during that period.{' '}
            <Link to="/faq#guarantee" className="text-primary hover:underline">Full terms →</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-container">
        <GlowCard customSize className="p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our 90-Day ROI Guarantee</h2>
              <p className="text-lg text-muted-foreground mb-6">
                If, after 90 days from go-live, you've seen no measurable progress against the success metrics we agreed upfront, you can request a refund of the monthly service fees paid during that 90-day period.
              </p>
              
              <h3 className="font-bold text-foreground mb-3">Progress is measured against a baseline and includes at least one of:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Revenue recovered (missed calls, bookings, response speed)',
                  'Time saved (admin hours reduced)',
                  'Conversion/response speed improvements'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground">
                <strong>Qualification:</strong> Tracking enabled, access provided, team uses the workflow, check-ins attended.{' '}
                <Link to="/faq#guarantee" className="text-primary hover:underline">See full terms in FAQ →</Link>
              </p>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
};

export default GuaranteeBlock;

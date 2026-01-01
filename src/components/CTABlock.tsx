import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GlowCard } from '@/components/ui/spotlight-card';
import { ArrowRight } from 'lucide-react';

interface CTABlockProps {
  headline?: string;
  subtext?: string;
  variant?: 'default' | 'minimal' | 'card';
  showSecondary?: boolean;
  className?: string;
}

const CTABlock: React.FC<CTABlockProps> = ({
  headline = "Ready to Eliminate Your Operational Bottlenecks?",
  subtext = "We'll confirm fit by email before booking.",
  variant = 'default',
  showSecondary = true,
  className = ''
}) => {
  if (variant === 'minimal') {
    return (
      <div className={`flex flex-col sm:flex-row gap-4 items-center ${className}`}>
        <Button size="lg" asChild>
          <Link to="/apply" className="flex items-center gap-2">
            Apply for a Diagnosis Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        {showSecondary && (
          <Button size="lg" variant="outline" asChild>
            <Link to="/services/systems">See Example Systems</Link>
          </Button>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <GlowCard customSize className={`p-12 md:p-16 text-center max-w-4xl mx-auto ${className}`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
          {headline}
        </h2>
        <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/apply" className="flex items-center gap-2 justify-center">
              Apply for a Diagnosis Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          {showSecondary && (
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link to="/services/systems">See Example Systems</Link>
            </Button>
          )}
        </div>
      </GlowCard>
    );
  }

  // Default variant
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-container">
        <GlowCard customSize className="p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            {headline}
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/apply" className="flex items-center gap-2 justify-center">
                Apply for a Diagnosis Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            {showSecondary && (
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link to="/services/systems">See Example Systems</Link>
              </Button>
            )}
          </div>
        </GlowCard>
      </div>
    </section>
  );
};

export default CTABlock;

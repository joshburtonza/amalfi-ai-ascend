import React, { useEffect, useState } from 'react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
  animated?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  label, 
  icon: Icon, 
  description,
  animated = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  return (
    <GlowCard customSize className={`p-6 text-center transition-all duration-500 ${
      animated && isVisible ? 'opacity-100 translate-y-0' : animated ? 'opacity-0 translate-y-4' : ''
    }`}>
      {Icon && (
        <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
      )}
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold mb-1">
        {label}
      </div>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">
          {description}
        </p>
      )}
    </GlowCard>
  );
};

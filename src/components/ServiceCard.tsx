import React from 'react';
import { LucideIcon } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
}

const ServiceCard = ({ icon: Icon, title, description, deliverables }: ServiceCardProps) => {
  return (
    <GlowCard customSize className="p-8 h-full hover-lift group transition-all duration-300">
      <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-hsl(var(--amalfi-teal))" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-hsl(var(--amalfi-teal)) transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-2">
        <p className="text-sm font-semibold text-foreground/80 mb-3">Key Deliverables:</p>
        <ul className="space-y-2">
          {deliverables.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start">
              <span className="text-hsl(var(--amalfi-teal)) mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </GlowCard>
  );
};

export default ServiceCard;

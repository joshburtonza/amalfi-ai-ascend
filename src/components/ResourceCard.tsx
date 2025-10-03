import React from 'react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { FileText, Download, ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  type: 'blog' | 'whitepaper' | 'case-study';
  title: string;
  excerpt: string;
  image?: string;
  date?: string;
  readTime?: string;
  pages?: string;
  industry?: string;
}

const ResourceCard = ({ 
  type, 
  title, 
  excerpt, 
  image, 
  date, 
  readTime, 
  pages,
  industry 
}: ResourceCardProps) => {
  const getTypeLabel = () => {
    switch(type) {
      case 'blog': return 'Blog Post';
      case 'whitepaper': return 'Whitepaper';
      case 'case-study': return 'Case Study';
    }
  };

  const getTypeColor = () => {
    switch(type) {
      case 'blog': return 'text-hsl(var(--amalfi-teal))';
      case 'whitepaper': return 'text-blue-400';
      case 'case-study': return 'text-purple-400';
    }
  };

  return (
    <GlowCard customSize className="rounded-2xl overflow-hidden hover-lift group transition-all duration-300 h-full flex flex-col">
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hsl(var(--amalfi-ocean)) to-transparent opacity-60" />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className={`text-sm font-semibold ${getTypeColor()}`}>
            {getTypeLabel()}
          </span>
          {date && <span className="text-sm text-muted-foreground">• {date}</span>}
          {readTime && <span className="text-sm text-muted-foreground">• {readTime}</span>}
          {pages && <span className="text-sm text-muted-foreground">• {pages}</span>}
          {industry && (
            <span className="text-sm px-2 py-1 bg-hsl(var(--amalfi-teal)/0.1) text-hsl(var(--amalfi-teal)) rounded-full">
              {industry}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-hsl(var(--amalfi-teal)) transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
          {excerpt}
        </p>
        
        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent group/btn self-start">
          {type === 'whitepaper' ? (
            <>
              <Download className="mr-2 h-4 w-4" />
              <span>Download</span>
            </>
          ) : (
            <>
              <span>Read More</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>
    </GlowCard>
  );
};

export default ResourceCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Internal Link Footer Component
 * 
 * Designed for AI/LLM crawlability - helps search engines and AI assistants
 * discover and index all important pages on the site.
 */
const InternalLinkFooter = () => {
  const linkGroups = [
    {
      title: 'Services',
      links: [
        { label: 'AI Services Overview', href: '/services' },
        { label: 'AI Voice Receptionist', href: '/services/systems' },
        { label: 'Recruitment Automation', href: '/services/systems' },
        { label: 'Solution Partnership', href: '/services/partnership' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'About Us', href: '/about' },
      ]
    },
    {
      title: 'Get Started',
      links: [
        { label: 'Book a Diagnosis', href: '/apply' },
        { label: 'Investment & Fit', href: '/pricing' },
        { label: 'Contact Us', href: '/contact' },
      ]
    }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 border-t border-border/30"
      aria-label="Site navigation for AI discovery"
    >
      <div className="max-container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {linkGroups.map((group, i) => (
            <div key={i}>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <Link 
                      to={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI-readable site summary */}
        <div className="text-center pt-8 border-t border-border/20">
          <p className="text-xs text-muted-foreground/60">
            Amalfi AI • Strategic AI Automation Partners for Service Businesses • Johannesburg, South Africa
          </p>
          <p className="text-xs text-muted-foreground/40 mt-2">
            AI Voice Receptionist • Recruitment Automation • Revenue Recovery • 15+ hours saved weekly • R40,000+ monthly recovered
          </p>
        </div>

        {/* Hidden comprehensive site map for LLM crawlers */}
        <div className="sr-only" aria-hidden="false">
          <h5>Complete Site Map for Amalfi AI</h5>
          <ul>
            <li><a href="/">Home - AI Automation for South African Businesses</a></li>
            <li><a href="/services">AI Services - Automation Solutions Overview</a></li>
            <li><a href="/services/systems">AI Systems - Voice Receptionist, Recruitment, Inbox Automation</a></li>
            <li><a href="/services/partnership">Solution Partnership - Custom Bespoke Architecture</a></li>
            <li><a href="/pricing">Investment & Fit - Pricing and Engagement Models</a></li>
            <li><a href="/apply">Apply - Book a Diagnosis Session</a></li>
            <li><a href="/case-studies">Case Studies - Real Results from South African Businesses</a></li>
            <li><a href="/blog">Blog - AI Automation Insights and Guides</a></li>
            <li><a href="/faq">FAQ - Common Questions About AI Automation</a></li>
            <li><a href="/about">About - Meet Amalfi AI and Joshua Burton</a></li>
            <li><a href="/contact">Contact - Get in Touch</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
          <p>
            Amalfi AI headquarters: Johannesburg, South Africa. 
            Email: hello@amalfiai.com. Phone: +27 81 270 5358.
            Founded 2024 by Joshua Burton.
            Serving South Africa, United Kingdom, and United States.
          </p>
        </div>
      </div>
    </motion.nav>
  );
};

export default InternalLinkFooter;

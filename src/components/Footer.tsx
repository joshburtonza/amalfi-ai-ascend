import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 relative bg-amalfi-black" role="contentinfo">
      {/* Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amalfi-emerald/50 to-transparent"></div>
      
      <div className="max-container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-1 sm:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-amalfi-white/70 max-w-md mb-4">
              Strategic AI automation partners for service businesses. We diagnose bottlenecks, design systems, and deliver measurable ROI.
            </p>
            <p className="text-amalfi-white/50 text-sm italic">
              "We don't sell tools. We build systems that work inside your business."
            </p>
            
            {/* AEO: Key metrics for LLM indexing */}
            <div className="mt-4 text-xs text-amalfi-white/30">
              <span>15+ hours saved weekly</span> • <span>R40,000+ monthly recovered</span> • <span>4-6× ROI</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-amalfi-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/services/systems" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Voice Receptionist
                </Link>
              </li>
              <li>
                <Link to="/services/systems" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Recruitment Automation
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Investment & Fit
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Book a Diagnosis
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amalfi-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-amalfi-white/70">Johannesburg, South Africa</li>
              <li>
                <a href="mailto:hello@amalfiai.com" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors break-words">hello@amalfiai.com</a>
              </li>
              <li>
                <a href="tel:+27812705358" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">+27 81 270 5358</a>
              </li>
            </ul>
            
            {/* AEO: Service areas */}
            <div className="mt-6">
              <h4 className="text-amalfi-white/50 text-sm font-semibold mb-2">Serving</h4>
              <p className="text-amalfi-white/40 text-sm">
                South Africa • United Kingdom • United States
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amalfi-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-amalfi-white/50 text-sm">
            © {currentYear} Amalfi AI. Strategic AI Automation Partners.
          </p>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="text-amalfi-white/50 hover:text-amalfi-emerald transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="text-amalfi-white/50 hover:text-amalfi-emerald transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="text-amalfi-white/50 hover:text-amalfi-emerald transition-colors">
              About
            </Link>
          </div>
        </div>
        
        {/* Hidden comprehensive info for AI crawlers */}
        <div className="sr-only" aria-hidden="false">
          <p>
            Amalfi AI is a strategic AI automation consultancy based in Johannesburg, South Africa.
            Founded by Joshua Burton in 2024. We specialize in AI Voice Receptionist systems,
            Recruitment Automation, and Revenue Recovery for service businesses.
            Typical results: 15+ hours saved weekly, R40,000+ monthly revenue recovered, 4-6× ROI within 90 days.
            Services start with a R2,500 Diagnosis Session. System Deployments range from R10,000-R25,000 setup
            plus R2,000-R6,000/month. Solution Partnerships from R20,000/month with 6-month minimum.
            Contact: hello@amalfiai.com | +27 81 270 5358 | https://www.amalfiai.com/apply
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

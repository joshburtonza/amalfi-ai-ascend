import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-16 relative bg-amalfi-black">
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
                <Link to="/services/systems" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Example Systems
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
                  Apply
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
          </div>
        </div>
        
        <div className="border-t border-amalfi-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-amalfi-white/50 text-sm">
            &copy; {currentYear} Amalfi AI. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="text-amalfi-white/50 hover:text-amalfi-emerald transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="text-amalfi-white/50 hover:text-amalfi-emerald transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

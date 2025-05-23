import React from 'react';
import Logo from './Logo';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-16 relative bg-amalfi-black">
      {/* Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amalfi-emerald/50 to-transparent"></div>
      
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-amalfi-white/70 max-w-md">
              Premium AI automation solutions for modern businesses. 
              Transform your operations with elegant, efficient AI technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-amalfi-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amalfi-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-amalfi-white/70">Johannesburg, South Africa</li>
              <li>
                <a href="mailto:hello@amalfi-ai.com" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">admin@amalfiai.com</a>
              </li>
              <li>
                <a href="tel:+27123456789" className="text-amalfi-white/70 hover:text-amalfi-emerald transition-colors">+27 81 270 5358</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amalfi-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amalfi-white/50 text-sm">
            &copy; {currentYear} Amalfi AI. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-amalfi-white/50 hover:text-amalfi-emerald transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-amalfi-white/50 hover:text-amalfi-emerald transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
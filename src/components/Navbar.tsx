
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphic py-2 shadow-glow-sm' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-container flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NavLinks />
          <Button 
            variant="outline" 
            className="border border-amalfi-emerald/30 hover:border-amalfi-emerald/80 text-amalfi-white bg-transparent hover:bg-amalfi-emerald/10 transition-all hover:shadow-glow-sm"
            asChild
          >
            <a href="https://soarai.app.n8n.cloud/form/889b9500-9b97-40fd-a200-193ace0f0cca" target="_blank" rel="noopener noreferrer">
              Let&apos;s Chat
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-amalfi-white p-1" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 relative ${isMobileMenuOpen ? 'h-0' : 'h-0.5 bg-amalfi-emerald'} transition-all`}></span>
            <span className={`block mt-1.5 w-6 h-0.5 bg-amalfi-emerald transition-all ${isMobileMenuOpen ? 'rotate-45' : ''}`}></span>
            <span className={`block mt-1.5 w-6 h-0.5 bg-amalfi-emerald transition-all ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 z-40 glassmorphic">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-4 right-4 text-amalfi-white p-2" 
                onClick={handleMobileMenuClose}
                aria-label="Close menu"
              >
                <span className="block w-6 h-0.5 bg-amalfi-emerald rotate-45"></span>
                <span className="block w-6 h-0.5 bg-amalfi-emerald -rotate-45 -mt-0.5"></span>
              </Button>
              <MobileNavLinks setIsMobileMenuOpen={setIsMobileMenuOpen} />
              <Button 
                variant="outline" 
                className="border border-amalfi-emerald/30 hover:border-amalfi-emerald/80 text-amalfi-white bg-transparent hover:bg-amalfi-emerald/10 transition-all hover:shadow-glow-sm"
                asChild
                onClick={handleMobileMenuClose}
              >
                <a href="https://soarai.app.n8n.cloud/form/889b9500-9b97-40fd-a200-193ace0f0cca" target="_blank" rel="noopener noreferrer">
                  Let&apos;s Chat
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Desktop Navigation Links
interface NavLinksProps {
  mobile?: boolean;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Success Stories', href: '#success' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-amalfi-white hover:text-amalfi-emerald transition-colors text-sm lg:text-base"
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

// Mobile Navigation Links - separated to ensure they only appear in the mobile menu
const MobileNavLinks: React.FC<{ setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsMobileMenuOpen }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Success Stories', href: '#success' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-amalfi-white hover:text-amalfi-emerald transition-colors text-xl py-2"
          onClick={handleClick}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default Navbar;

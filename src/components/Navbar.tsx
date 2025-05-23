
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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphic py-3 shadow-glow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-container flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button variant="outline" className="border border-amalfi-emerald/30 hover:border-amalfi-emerald/80 text-amalfi-white bg-transparent hover:bg-amalfi-emerald/10 transition-all hover:shadow-glow-sm">
            Let&apos;s Chat
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-amalfi-white" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 relative ${isMobileMenuOpen ? 'h-0' : 'h-0.5 bg-amalfi-emerald'} transition-all`}></span>
            <span className={`block mt-1.5 w-6 h-0.5 bg-amalfi-emerald transition-all ${isMobileMenuOpen ? 'rotate-45' : ''}`}></span>
            <span className={`block mt-1.5 w-6 h-0.5 bg-amalfi-emerald transition-all ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 z-40 glassmorphic transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <NavLinks mobile setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Button variant="outline" className="border border-amalfi-emerald/30 hover:border-amalfi-emerald/80 text-amalfi-white bg-transparent hover:bg-amalfi-emerald/10 transition-all hover:shadow-glow-sm">
              Let&apos;s Chat
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile = false, setIsMobileMenuOpen }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Success Stories', href: '#success' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = () => {
    if (mobile && setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`text-amalfi-white hover:text-amalfi-emerald transition-colors ${
            mobile ? 'text-xl py-2' : ''
          }`}
          onClick={handleClick}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default Navbar;

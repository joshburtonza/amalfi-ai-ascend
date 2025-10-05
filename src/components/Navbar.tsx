import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
          ? 'bg-amalfi-black/80 backdrop-blur-sm py-2' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-container flex items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NavLinks currentPath={location.pathname} />
          <Button
            variant="outline" 
            className="border border-hsl(var(--amalfi-teal)/0.3) hover:border-hsl(var(--amalfi-teal)/0.8) text-foreground bg-transparent hover:bg-hsl(var(--amalfi-teal)/0.1) transition-all"
            asChild
          >
            <Link to="/contact">
              Let&apos;s Chat
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-foreground p-1" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 relative ${isMobileMenuOpen ? 'h-0' : 'h-0.5 bg-hsl(var(--amalfi-teal))'} transition-all`}></span>
            <span className={`block mt-1.5 w-6 h-0.5 bg-hsl(var(--amalfi-teal)) transition-all ${isMobileMenuOpen ? 'rotate-45' : ''}`}></span>
            <span className={`block mt-1.5 w-6 h-0.5 bg-hsl(var(--amalfi-teal)) transition-all ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-4 right-4 text-foreground p-2" 
                onClick={handleMobileMenuClose}
                aria-label="Close menu"
              >
                <span className="block w-6 h-0.5 bg-hsl(var(--amalfi-teal)) rotate-45"></span>
                <span className="block w-6 h-0.5 bg-hsl(var(--amalfi-teal)) -rotate-45 -mt-0.5"></span>
              </Button>
              <MobileNavLinks setIsMobileMenuOpen={setIsMobileMenuOpen} currentPath={location.pathname} />
              <Button
                variant="outline" 
                className="border border-hsl(var(--amalfi-teal)/0.3) hover:border-hsl(var(--amalfi-teal)/0.8) text-foreground bg-transparent hover:bg-hsl(var(--amalfi-teal)/0.1) transition-all"
                asChild
                onClick={handleMobileMenuClose}
              >
                <Link to="/contact">
                  Let&apos;s Chat
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Desktop Navigation Links
const NavLinks = ({ currentPath }: { currentPath: string }) => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Recruitment', href: '/recruitment-automation' },
    { label: 'Voice AI', href: '/ai-voice-receptionist' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className={`transition-colors text-sm lg:text-base font-medium ${
            currentPath === item.href 
              ? 'text-hsl(var(--amalfi-teal))' 
              : 'text-foreground hover:text-hsl(var(--amalfi-teal))'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

// Mobile Navigation Links
const MobileNavLinks: React.FC<{ 
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentPath: string;
}> = ({ setIsMobileMenuOpen, currentPath }) => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Recruitment', href: '/recruitment-automation' },
    { label: 'Voice AI', href: '/ai-voice-receptionist' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
  ];

  const handleClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className={`transition-colors text-xl py-2 font-medium ${
            currentPath === item.href
              ? 'text-hsl(var(--amalfi-teal))'
              : 'text-foreground hover:text-hsl(var(--amalfi-teal))'
          }`}
          onClick={handleClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(isScrolled || window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-container flex items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavBar 
            items={[
              { name: 'Home', url: '/' },
              { 
                name: 'Services', 
                url: '#',
                isDropdown: true,
                dropdownItems: [
                  { name: 'Recruitment Automation', url: '/recruitment-automation' },
                  { name: 'AI Voice Receptionist', url: '/ai-voice-receptionist' },
                ]
              },
              { name: 'Case Studies', url: '/case-studies' },
              { name: 'Resources', url: '/resources' },
              { name: 'About', url: '/about' },
              { name: "Let's Chat", url: '/contact' },
            ]}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-hsl(var(--amalfi-teal)) transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-hsl(var(--amalfi-teal)) transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-hsl(var(--amalfi-teal)) transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 z-40 bg-background/98 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <button
                className="absolute top-6 right-6 p-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute block w-full h-0.5 bg-hsl(var(--amalfi-teal)) rotate-45 top-1/2"></span>
                  <span className="absolute block w-full h-0.5 bg-hsl(var(--amalfi-teal)) -rotate-45 top-1/2"></span>
                </div>
              </button>
              <MobileNavLinks 
                setIsMobileMenuOpen={setIsMobileMenuOpen} 
                currentPath={location.pathname} 
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Mobile Navigation Links
const MobileNavLinks: React.FC<{ 
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentPath: string;
}> = ({ setIsMobileMenuOpen, currentPath }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
    { label: "Let's Chat", href: '/contact' },
  ];

  const serviceItems = [
    { label: 'Recruitment Automation', href: '/recruitment-automation' },
    { label: 'AI Voice Receptionist', href: '/ai-voice-receptionist' },
  ];

  const handleClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {navItems.slice(0, 1).map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className={`transition-colors text-2xl py-2 font-semibold ${
            currentPath === item.href
              ? 'text-hsl(var(--amalfi-teal))'
              : 'text-foreground hover:text-hsl(var(--amalfi-teal))'
          }`}
          onClick={handleClick}
        >
          {item.label}
        </Link>
      ))}
      
      {/* Services Dropdown */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="flex items-center gap-2 text-2xl py-2 font-semibold text-foreground hover:text-hsl(var(--amalfi-teal)) transition-colors"
        >
          Services
          <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
        </button>
        {servicesOpen && (
          <div className="flex flex-col items-center mt-2 space-y-2">
            {serviceItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors text-lg py-1 font-medium ${
                  currentPath === item.href
                    ? 'text-hsl(var(--amalfi-teal))'
                    : 'text-muted-foreground hover:text-hsl(var(--amalfi-teal))'
                }`}
                onClick={handleClick}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      
      {navItems.slice(1).map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className={`transition-colors text-2xl py-2 font-semibold ${
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

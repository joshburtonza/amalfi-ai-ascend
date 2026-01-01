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
                name: 'Solutions', 
                url: '#',
                isDropdown: true,
                dropdownItems: [
                  { name: 'Example Systems', url: '/services/systems' },
                  { name: 'Partnership', url: '/services/partnership' },
                ]
              },
              { name: 'Case Studies', url: '/case-studies' },
              { name: 'Investment & Fit', url: '/pricing' },
              { name: 'FAQ', url: '/faq' },
              { name: 'About', url: '/about' },
              { name: 'Apply', url: '/apply' },
            ]}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 -mr-2 touch-manipulation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-foreground transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-foreground transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-foreground transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 z-40 bg-background/98 backdrop-blur-lg animate-fade-in">
            <div className="flex flex-col items-stretch justify-start h-full pt-20 px-6 overflow-y-auto">
              <button
                className="absolute top-4 right-4 p-3 touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute block w-full h-0.5 bg-foreground rotate-45 top-1/2"></span>
                  <span className="absolute block w-full h-0.5 bg-foreground -rotate-45 top-1/2"></span>
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
    { label: 'Investment & Fit', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'About', href: '/about' },
    { label: 'Apply', href: '/apply' },
  ];

  const serviceItems = [
    { label: 'Example Systems', href: '/services/systems' },
    { label: 'Partnership', href: '/services/partnership' },
  ];

  const handleClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full space-y-2">
      {navItems.slice(0, 1).map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className={`block w-full text-left transition-colors text-xl py-4 px-4 rounded-lg font-semibold touch-manipulation ${
            currentPath === item.href
              ? 'text-primary bg-primary/10'
              : 'text-foreground hover:text-primary hover:bg-primary/5'
          }`}
          onClick={handleClick}
        >
          {item.label}
        </Link>
      ))}
      
      {/* Solutions Dropdown */}
      <div className="w-full">
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="flex items-center justify-between w-full text-left text-xl py-4 px-4 rounded-lg font-semibold text-foreground hover:text-primary hover:bg-primary/5 transition-colors touch-manipulation"
        >
          Solutions
          <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
        </button>
        {servicesOpen && (
          <div className="mt-1 space-y-1 pl-4">
            {serviceItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block w-full text-left transition-colors text-lg py-3 px-4 rounded-lg font-medium touch-manipulation ${
                  currentPath === item.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
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
          className={`block w-full text-left transition-colors text-xl py-4 px-4 rounded-lg font-semibold touch-manipulation ${
            currentPath === item.href
              ? 'text-primary bg-primary/10'
              : 'text-foreground hover:text-primary hover:bg-primary/5'
          }`}
          onClick={handleClick}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;

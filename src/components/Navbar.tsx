import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from 'lucide-react';
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
          <Link
            to="/"
            className={`transition-colors text-sm lg:text-base font-medium ${
              location.pathname === '/' 
                ? 'text-hsl(var(--amalfi-teal))' 
                : 'text-foreground hover:text-hsl(var(--amalfi-teal))'
            }`}
          >
            Home
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm lg:text-base font-medium text-foreground hover:text-hsl(var(--amalfi-teal)) data-[state=open]:text-hsl(var(--amalfi-teal))">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background border border-border">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/recruitment-automation"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Recruitment Automation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            AI-powered recruitment solutions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/ai-voice-receptionist"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">AI Voice Receptionist</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Intelligent voice automation
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            to="/case-studies"
            className={`transition-colors text-sm lg:text-base font-medium ${
              location.pathname === '/case-studies' 
                ? 'text-hsl(var(--amalfi-teal))' 
                : 'text-foreground hover:text-hsl(var(--amalfi-teal))'
            }`}
          >
            Case Studies
          </Link>
          
          <Link
            to="/resources"
            className={`transition-colors text-sm lg:text-base font-medium ${
              location.pathname === '/resources' 
                ? 'text-hsl(var(--amalfi-teal))' 
                : 'text-foreground hover:text-hsl(var(--amalfi-teal))'
            }`}
          >
            Resources
          </Link>
          
          <Link
            to="/about"
            className={`transition-colors text-sm lg:text-base font-medium ${
              location.pathname === '/about' 
                ? 'text-hsl(var(--amalfi-teal))' 
                : 'text-foreground hover:text-hsl(var(--amalfi-teal))'
            }`}
          >
            About
          </Link>
          
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
              <MobileNavLinks setIsMobileMenuOpen={setIsMobileMenuOpen} currentPath={location.pathname} isMobileMenuOpen={isMobileMenuOpen} />
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

// Mobile Navigation Links
const MobileNavLinks: React.FC<{ 
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentPath: string;
  isMobileMenuOpen: boolean;
}> = ({ setIsMobileMenuOpen, currentPath, isMobileMenuOpen }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
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
      
      {/* Services Dropdown */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="flex items-center gap-2 text-xl py-2 font-medium text-foreground hover:text-hsl(var(--amalfi-teal)) transition-colors"
        >
          Services
          <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
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

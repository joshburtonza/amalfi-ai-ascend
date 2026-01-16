import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import CartDrawer from './CartDrawer';

const StoreHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-muted-foreground sm:inline">Digital Products</span>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};

export default StoreHeader;

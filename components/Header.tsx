'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Store, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSignIn: () => void;
  onListBusiness: () => void;
}

export default function Header({
  searchQuery,
  onSearchChange,
  onSignIn,
  onListBusiness
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Restaurants', href: '#restaurants' },
    { label: 'Grocery', href: '#grocery' },
    { label: 'Beauty', href: '#beauty' },
    { label: 'Services', href: '#services' },
    { label: 'Fashion', href: '#fashion' },
    { label: 'Health', href: '#health' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-primary-orange" aria-hidden="true" />
            <span className="heading-secondary text-xl font-semibold">
              Desi BizDirectory
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="body-secondary text-sm font-medium hover:text-primary-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <Input
                type="text"
                placeholder="Search businesses..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 w-full focus:ring-2 focus:ring-focus-ring"
                aria-label="Search businesses"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onSignIn}
              className="hidden sm:inline-flex focus:ring-2 focus:ring-focus-ring"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              onClick={onListBusiness}
              className="cta-primary focus:ring-2 focus:ring-focus-ring"
            >
              List Business
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden focus:ring-2 focus:ring-focus-ring"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <Input
                      type="text"
                      placeholder="Search businesses..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="pl-10 pr-4 w-full"
                      aria-label="Search businesses"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
                    {navigationItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="body-secondary text-base font-medium hover:text-primary-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-sm px-2 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile Action Buttons */}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={() => {
                        onSignIn();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => {
                        onListBusiness();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full cta-primary"
                    >
                      List Business
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
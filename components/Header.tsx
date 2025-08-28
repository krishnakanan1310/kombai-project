'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSignIn: () => void;
  onListBusiness: () => void;
}

export default function Header({ searchQuery, onSearchChange, onSignIn, onListBusiness }: HeaderProps) {
  return (
    <header className="bg-white border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <LogoIcon width={15} height={20} color="#111827" />
          <span className="text-2xl font-bold text-text-primary">BD BizDirectory</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <SearchIcon width={16} height={16} color="#9ca3af" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search businesses..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Auth & Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onSignIn} className="text-text-primary hover:bg-secondary">
            Sign In
          </Button>
          <Button 
            onClick={onListBusiness}
            className="bg-primary-orange hover:bg-primary-orange-dark text-white font-semibold px-6"
          >
            List Your Business
          </Button>
        </div>
      </div>
    </header>
  );
}
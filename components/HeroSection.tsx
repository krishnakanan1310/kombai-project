'use client';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { BusinessCategory } from '@/lib/enums';
import SearchIcon from './icons/SearchIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import RestaurantIcon from './icons/RestaurantIcon';
import GroceryIcon from './icons/GroceryIcon';
import BeautyIcon from './icons/BeautyIcon';
import ServicesIcon from './icons/ServicesIcon';

interface HeroSectionProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  onSearch: () => void;
  onCategorySelect: (category: BusinessCategory) => void;
}

const categoryIcons = {
  [BusinessCategory.RESTAURANTS]: RestaurantIcon,
  [BusinessCategory.GROCERY]: GroceryIcon,
  [BusinessCategory.BEAUTY]: BeautyIcon,
  [BusinessCategory.SERVICES]: ServicesIcon,
};

const categories = [
  { id: BusinessCategory.RESTAURANTS, name: 'Restaurants', icon: RestaurantIcon },
  { id: BusinessCategory.GROCERY, name: 'Grocery', icon: GroceryIcon },
  { id: BusinessCategory.BEAUTY, name: 'Beauty', icon: BeautyIcon },
  { id: BusinessCategory.SERVICES, name: 'Services', icon: ServicesIcon },
];

export default function HeroSection({ selectedLocation, onLocationChange, onSearch, onCategorySelect }: HeroSectionProps) {
  return (
    <section className="gradient-primary text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Text */}
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Find Your Perfect Desi Business
        </h1>
        <p className="text-2xl mb-12 max-w-4xl mx-auto">
          Discover authentic South Asian restaurants, grocery stores, services, and more in your area
        </p>

        {/* Search Section */}
        <div className="flex items-center justify-center gap-4 mb-12 max-w-4xl mx-auto">
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger className="w-64 bg-white text-black">
              <SelectValue placeholder="All Locations" />
              <ChevronDownIcon width={14} height={8} color="#000000" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="jackson-heights">Jackson Heights, NY</SelectItem>
              <SelectItem value="devon-avenue">Devon Avenue, Chicago</SelectItem>
              <SelectItem value="fremont">Fremont, CA</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            onClick={onSearch}
            className="bg-white text-primary-orange hover:bg-gray-100 font-semibold px-8 py-3 h-auto"
          >
            <SearchIcon width={16} height={16} color="#ff5722" className="mr-2" />
            Search Now
          </Button>
        </div>

        {/* Category Quick Access */}
        <div className="flex justify-center gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="glass-card p-6 cursor-pointer hover:bg-white/30 transition-colors"
                onClick={() => onCategorySelect(category.id)}
              >
                <div className="flex flex-col items-center gap-2">
                  <IconComponent width={26} height={30} color="#ffffff" />
                  <span className="font-semibold text-white">{category.name}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
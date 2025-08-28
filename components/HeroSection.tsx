'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin } from 'lucide-react';
import { BusinessCategory } from '@/lib/enums';

interface HeroSectionProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  onSearch: () => void;
  onCategorySelect: (category: BusinessCategory) => void;
}

export default function HeroSection({
  selectedLocation,
  onLocationChange,
  onSearch,
  onCategorySelect
}: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const locations = [
    'All Locations',
    'Jackson Heights, NY',
    'Devon Avenue, Chicago',
    'Fremont, CA',
    'Southall, London',
    'Brick Lane, London'
  ];

  const categories = [
    { id: BusinessCategory.RESTAURANTS, name: 'Restaurants', color: 'bg-category-restaurants' },
    { id: BusinessCategory.GROCERY, name: 'Grocery', color: 'bg-category-grocery' },
    { id: BusinessCategory.BEAUTY, name: 'Beauty', color: 'bg-category-beauty' },
    { id: BusinessCategory.SERVICES, name: 'Services', color: 'bg-category-services' },
    { id: BusinessCategory.FASHION, name: 'Fashion', color: 'bg-category-fashion' },
    { id: BusinessCategory.HEALTH, name: 'Health', color: 'bg-category-health' }
  ];

  const handleSearch = () => {
    onSearch();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-orange/10 via-primary-orange-light/5 to-background py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Content */}
        <div className="mb-12">
          <h1 className="heading-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect{' '}
            <span className="text-primary-orange">Desi Business</span>
          </h1>
          <p className="body-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Discover authentic South Asian businesses in your area. From restaurants to services, 
            find trusted local businesses that understand your culture and needs.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <Input
                type="text"
                placeholder="Search businesses, services, cuisine..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 pr-4 py-4 text-lg border-2 focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20"
                aria-label="Search for businesses"
              />
            </div>

            {/* Location Selector */}
            <div className="lg:w-64">
              <Select value={selectedLocation} onValueChange={onLocationChange}>
                <SelectTrigger className="py-4 text-lg border-2 focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-2" aria-hidden="true" />
                    <SelectValue placeholder="Select location" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              size="lg"
              className="cta-primary py-4 px-8 text-lg font-semibold focus:ring-2 focus:ring-focus-ring"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Quick Categories */}
        <div>
          <h2 className="heading-secondary text-xl font-semibold mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                aria-label={`Browse ${category.name} businesses`}
              >
                <div className={`w-12 h-12 rounded-full ${category.color} mb-3 group-hover:scale-110 transition-transform duration-200`} />
                <span className="body-secondary text-sm font-medium group-hover:text-primary-orange transition-colors">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-orange/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-orange-light/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { BusinessCategory, SortOption, RatingLevel } from '@/lib/enums';
import { mockBusinesses, mockCategories, mockLocations, mockStats } from '@/lib/businessDirectoryMockData';
import Header from './Header';
import HeroSection from './HeroSection';
import FilterSidebar from './FilterSidebar';
import SearchResultsHeader from './SearchResultsHeader';
import BusinessCard from './BusinessCard';
import SearchResultsPagination from './SearchResultsPagination';
import CategoryGrid from './CategoryGrid';
import PopularLocations from './PopularLocations';
import BusinessOwnerCTA from './BusinessOwnerCTA';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';
import SearchIcon from './icons/SearchIcon';

interface FilterState {
  rating: RatingLevel;
  priceRanges: string[];
  categories: BusinessCategory[];
  features: string[];
  cuisines: string[];
}

export default function BusinessDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [secondarySearchQuery, setSecondarySearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedCategory, setSelectedCategory] = useState<BusinessCategory | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>(SortOption.MOST_RELEVANT);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    rating: RatingLevel.ANY,
    priceRanges: [],
    categories: [],
    features: [],
    cuisines: []
  });

  const resultsPerPage = 10;
  const totalResults = mockBusinesses.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement search logic
  };

  const handleCategorySelect = (category: BusinessCategory) => {
    setSelectedCategory(category);
    // Filter results by category
  };

  const handleBusinessAction = (businessId: string, action: string) => {
    console.log(`${action} for business:`, businessId);
    // Implement business actions
  };

  const handleNewsletterSubscribe = (email: string) => {
    console.log('Newsletter subscription:', email);
    // Implement newsletter subscription
  };

  const handleFooterLink = (link: string) => {
    console.log('Footer link clicked:', link);
    // Implement navigation
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSignIn={() => console.log('Sign in')}
        onListBusiness={() => console.log('List business')}
      />

      {/* Hero Section */}
      <HeroSection
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
      />

      {/* Secondary Search */}
      <section className="py-6 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon width={16} height={16} color="#9ca3af" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search businesses, services, cuisine..."
              value={secondarySearchQuery}
              onChange={(e) => setSecondarySearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 w-full text-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Filters Sidebar */}
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />

          {/* Results */}
          <div className="flex-1">
            <SearchResultsHeader
              totalResults={totalResults}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            {/* Business Listings */}
            <div className="space-y-6 mb-8">
              {mockBusinesses.slice(0, resultsPerPage).map((business) => (
                <BusinessCard
                  key={business.id}
                  business={business}
                  onCall={(id) => handleBusinessAction(id, 'call')}
                  onDirections={(id) => handleBusinessAction(id, 'directions')}
                  onViewDetails={(id) => handleBusinessAction(id, 'view')}
                  onFavorite={(id) => handleBusinessAction(id, 'favorite')}
                />
              ))}
            </div>

            {/* Pagination */}
            <SearchResultsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <CategoryGrid
        categories={mockCategories}
        onCategorySelect={handleCategorySelect}
      />

      {/* Popular Locations */}
      <PopularLocations
        locations={mockLocations}
        onLocationSelect={(locationId) => console.log('Location selected:', locationId)}
      />

      {/* Business Owner CTA */}
      <BusinessOwnerCTA
        stats={mockStats}
        onListBusiness={() => console.log('List business')}
        onLearnMore={() => console.log('Learn more')}
      />

      {/* Newsletter */}
      <NewsletterSignup onSubscribe={handleNewsletterSubscribe} />

      {/* Footer */}
      <Footer onLinkClick={handleFooterLink} />
    </div>
  );
}
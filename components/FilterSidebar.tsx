'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Filter, Star, DollarSign, MapPin, X } from 'lucide-react';
import { BusinessCategory, PriceRange, RatingLevel } from '@/lib/enums';
import { mockFilterOptions } from '@/lib/businessDirectoryMockData';

interface FilterState {
  rating: RatingLevel;
  priceRanges: string[];
  categories: BusinessCategory[];
  features: string[];
  cuisines: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export default function FilterSidebar({
  filters,
  onFiltersChange,
  selectedLocation,
  onLocationChange
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const locations = [
    'All Locations',
    'Jackson Heights, NY',
    'Devon Avenue, Chicago',
    'Fremont, CA',
    'Southall, London',
    'Brick Lane, London'
  ];

  const ratingOptions = [
    { value: RatingLevel.ANY, label: 'Any Rating' },
    { value: RatingLevel.FIVE_STAR, label: '5 Stars' },
    { value: RatingLevel.FOUR_STAR, label: '4+ Stars' },
    { value: RatingLevel.THREE_STAR, label: '3+ Stars' },
    { value: RatingLevel.TWO_STAR, label: '2+ Stars' }
  ];

  const handlePriceRangeChange = (priceRange: string, checked: boolean) => {
    const newPriceRanges = checked
      ? [...filters.priceRanges, priceRange]
      : filters.priceRanges.filter(p => p !== priceRange);
    
    onFiltersChange({ ...filters, priceRanges: newPriceRanges });
  };

  const handleCategoryChange = (category: BusinessCategory, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    const newFeatures = checked
      ? [...filters.features, feature]
      : filters.features.filter(f => f !== feature);
    
    onFiltersChange({ ...filters, features: newFeatures });
  };

  const handleCuisineChange = (cuisine: string, checked: boolean) => {
    const newCuisines = checked
      ? [...filters.cuisines, cuisine]
      : filters.cuisines.filter(c => c !== cuisine);
    
    onFiltersChange({ ...filters, cuisines: newCuisines });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      rating: RatingLevel.ANY,
      priceRanges: [],
      categories: [],
      features: [],
      cuisines: []
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.rating !== RatingLevel.ANY) count++;
    count += filters.priceRanges.length;
    count += filters.categories.length;
    count += filters.features.length;
    count += filters.cuisines.length;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex items-center justify-between">
          <span className="body-secondary text-sm">
            {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} applied
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-primary-orange hover:text-primary-orange-dark"
          >
            Clear All
          </Button>
        </div>
      )}

      {/* Location Filter */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Label className="heading-secondary text-sm font-medium">Location</Label>
        </div>
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="w-full focus:ring-2 focus:ring-focus-ring">
            <SelectValue placeholder="Select location" />
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

      <Separator />

      {/* Rating Filter */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Star className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Label className="heading-secondary text-sm font-medium">Rating</Label>
        </div>
        <Select
          value={filters.rating}
          onValueChange={(value: RatingLevel) => onFiltersChange({ ...filters, rating: value })}
        >
          <SelectTrigger className="w-full focus:ring-2 focus:ring-focus-ring">
            <SelectValue placeholder="Select rating" />
          </SelectTrigger>
          <SelectContent>
            {ratingOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Price Range Filter */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <Label className="heading-secondary text-sm font-medium">Price Range</Label>
        </div>
        <div className="space-y-3">
          {mockFilterOptions.priceRanges.map((priceRange) => (
            <div key={priceRange.id} className="flex items-center space-x-3">
              <Checkbox
                id={`price-${priceRange.id}`}
                checked={filters.priceRanges.includes(priceRange.id)}
                onCheckedChange={(checked) => handlePriceRangeChange(priceRange.id, checked as boolean)}
                className="focus:ring-2 focus:ring-focus-ring"
              />
              <Label
                htmlFor={`price-${priceRange.id}`}
                className="flex-1 body-secondary text-sm cursor-pointer"
              >
                {priceRange.name}
              </Label>
              <Badge variant="secondary" className="text-xs">
                {priceRange.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Categories Filter */}
      <div className="space-y-3">
        <Label className="heading-secondary text-sm font-medium">Categories</Label>
        <div className="space-y-3">
          {mockFilterOptions.categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-3">
              <Checkbox
                id={`category-${category.id}`}
                checked={filters.categories.includes(category.id as BusinessCategory)}
                onCheckedChange={(checked) => handleCategoryChange(category.id as BusinessCategory, checked as boolean)}
                className="focus:ring-2 focus:ring-focus-ring"
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="flex-1 body-secondary text-sm cursor-pointer"
              >
                {category.name}
              </Label>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Features Filter */}
      <div className="space-y-3">
        <Label className="heading-secondary text-sm font-medium">Features</Label>
        <div className="space-y-3">
          {mockFilterOptions.features.map((feature) => (
            <div key={feature.id} className="flex items-center space-x-3">
              <Checkbox
                id={`feature-${feature.id}`}
                checked={filters.features.includes(feature.id)}
                onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
                className="focus:ring-2 focus:ring-focus-ring"
              />
              <Label
                htmlFor={`feature-${feature.id}`}
                className="flex-1 body-secondary text-sm cursor-pointer"
              >
                {feature.name}
              </Label>
              <Badge variant="secondary" className="text-xs">
                {feature.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Cuisines Filter */}
      <div className="space-y-3">
        <Label className="heading-secondary text-sm font-medium">Cuisines</Label>
        <div className="space-y-3">
          {mockFilterOptions.cuisines.map((cuisine) => (
            <div key={cuisine.id} className="flex items-center space-x-3">
              <Checkbox
                id={`cuisine-${cuisine.id}`}
                checked={filters.cuisines.includes(cuisine.id)}
                onCheckedChange={(checked) => handleCuisineChange(cuisine.id, checked as boolean)}
                className="focus:ring-2 focus:ring-focus-ring"
              />
              <Label
                htmlFor={`cuisine-${cuisine.id}`}
                className="flex-1 body-secondary text-sm cursor-pointer"
              >
                {cuisine.name}
              </Label>
              <Badge variant="secondary" className="text-xs">
                {cuisine.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80">
        <Card className="sticky top-24">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" aria-hidden="true" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <Badge className="bg-primary-orange text-white">
                  {activeFiltersCount}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="max-h-[calc(100vh-200px)] overflow-y-auto">
            <FilterContent />
          </CardContent>
        </Card>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full mb-4 focus:ring-2 focus:ring-focus-ring"
            >
              <Filter className="h-4 w-4 mr-2" aria-hidden="true" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 bg-primary-orange text-white">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" aria-hidden="true" />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <Badge className="bg-primary-orange text-white">
                    {activeFiltersCount}
                  </Badge>
                )}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 max-h-[calc(100vh-120px)] overflow-y-auto">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BusinessCategory, PriceRange, RatingLevel } from '@/lib/enums';
import { mockFilterOptions } from '@/lib/businessDirectoryMockData';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface FilterState {
  rating: RatingLevel;
  priceRanges: PriceRange[];
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

export default function FilterSidebar({ filters, onFiltersChange, selectedLocation, onLocationChange }: FilterSidebarProps) {
  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = <K extends keyof FilterState>(key: K, value: string) => {
    const currentArray = filters[key] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilter(key, newArray as FilterState[K]);
  };

  return (
    <Card className="w-80 p-6 h-fit">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-text-primary">Filters</h3>
        <Button 
          variant="ghost" 
          className="text-primary-orange hover:bg-primary-orange/10"
          onClick={() => onFiltersChange({
            rating: RatingLevel.ANY,
            priceRanges: [],
            categories: [],
            features: [],
            cuisines: []
          })}
        >
          Clear All
        </Button>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-3">Location</h4>
        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="w-full">
            <SelectValue />
            <ChevronDownIcon width={14} height={8} color="#000000" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="jackson-heights">Jackson Heights, NY</SelectItem>
            <SelectItem value="devon-avenue">Devon Avenue, Chicago</SelectItem>
            <SelectItem value="fremont">Fremont, CA</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-3">Minimum Rating</h4>
        <RadioGroup value={filters.rating} onValueChange={(value) => updateFilter('rating', value as RatingLevel)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={RatingLevel.ANY} id="any-rating" />
            <Label htmlFor="any-rating" className="text-text-secondary">Any Rating</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={RatingLevel.FIVE_STAR} id="5-star" />
            <Label htmlFor="5-star" className="flex items-center gap-1">
              <span className="text-rating-star">★★★★★</span>
              <span className="text-text-secondary">& up</span>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={RatingLevel.FOUR_STAR} id="4-star" />
            <Label htmlFor="4-star" className="flex items-center gap-1">
              <span className="text-rating-star">★★★★</span>
              <span className="text-rating-empty">★</span>
              <span className="text-text-secondary">& up</span>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={RatingLevel.THREE_STAR} id="3-star" />
            <Label htmlFor="3-star" className="flex items-center gap-1">
              <span className="text-rating-star">★★★</span>
              <span className="text-rating-empty">★★</span>
              <span className="text-text-secondary">& up</span>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={RatingLevel.TWO_STAR} id="2-star" />
            <Label htmlFor="2-star" className="flex items-center gap-1">
              <span className="text-rating-star">★★</span>
              <span className="text-rating-empty">★★★</span>
              <span className="text-text-secondary">& up</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-3">Categories</h4>
        <div className="space-y-3">
          {mockFilterOptions.categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={filters.categories.includes(category.id)}
                  onCheckedChange={() => toggleArrayFilter('categories', category.id)}
                />
                <Label htmlFor={category.id} className="text-text-secondary">{category.name}</Label>
              </div>
              <span className="text-text-light text-sm">{category.count}</span>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="text-primary-orange hover:bg-primary-orange/10 mt-2">
          Show Less
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-3">Price Range</h4>
        <div className="space-y-3">
          {mockFilterOptions.priceRanges.map((priceRange) => (
            <div key={priceRange.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={priceRange.id}
                  checked={filters.priceRanges.includes(priceRange.id)}
                  onCheckedChange={() => toggleArrayFilter('priceRanges', priceRange.id)}
                />
                <Label htmlFor={priceRange.id} className="text-text-secondary">{priceRange.name}</Label>
              </div>
              <span className="text-text-light text-sm">{priceRange.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-text-primary mb-3">Features & Amenities</h4>
        <div className="space-y-3">
          {mockFilterOptions.features.map((feature) => (
            <div key={feature.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={feature.id}
                  checked={filters.features.includes(feature.id)}
                  onCheckedChange={() => toggleArrayFilter('features', feature.id)}
                />
                <Label htmlFor={feature.id} className="text-text-secondary">{feature.name}</Label>
              </div>
              <span className="text-text-light text-sm">{feature.count}</span>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="text-primary-orange hover:bg-primary-orange/10 mt-2">
          Show More (2 more)
        </Button>
      </div>

      {/* Cuisine Type */}
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-3">Cuisine Type</h4>
        <div className="space-y-3">
          {mockFilterOptions.cuisines.map((cuisine) => (
            <div key={cuisine.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={cuisine.id}
                  checked={filters.cuisines.includes(cuisine.id)}
                  onCheckedChange={() => toggleArrayFilter('cuisines', cuisine.id)}
                />
                <Label htmlFor={cuisine.id} className="text-text-secondary">{cuisine.name}</Label>
              </div>
              <span className="text-text-light text-sm">{cuisine.count}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
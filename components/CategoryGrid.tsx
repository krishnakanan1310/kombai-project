'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Utensils, 
  ShoppingBag, 
  Sparkle, 
  Briefcase, 
  Shirt, 
  Stethoscope 
} from 'lucide-react';
import { BusinessCategory } from '@/lib/enums';

interface Category {
  id: BusinessCategory;
  name: string;
  count: number;
}

interface CategoryGridProps {
  categories: Category[];
  onCategorySelect: (category: BusinessCategory) => void;
}

export default function CategoryGrid({
  categories,
  onCategorySelect
}: CategoryGridProps) {
  const getCategoryIcon = (category: BusinessCategory) => {
    switch (category) {
      case BusinessCategory.RESTAURANTS:
        return <Utensils className="h-8 w-8" aria-hidden="true" />;
      case BusinessCategory.GROCERY:
        return <ShoppingBag className="h-8 w-8" aria-hidden="true" />;
      case BusinessCategory.BEAUTY:
        return <Sparkle className="h-8 w-8" aria-hidden="true" />;
      case BusinessCategory.SERVICES:
        return <Briefcase className="h-8 w-8" aria-hidden="true" />;
      case BusinessCategory.FASHION:
        return <Shirt className="h-8 w-8" aria-hidden="true" />;
      case BusinessCategory.HEALTH:
        return <Stethoscope className="h-8 w-8" aria-hidden="true" />;
      default:
        return <Briefcase className="h-8 w-8" aria-hidden="true" />;
    }
  };

  const getCategoryColor = (category: BusinessCategory) => {
    switch (category) {
      case BusinessCategory.RESTAURANTS:
        return 'text-category-restaurants bg-orange-50 hover:bg-orange-100';
      case BusinessCategory.GROCERY:
        return 'text-category-grocery bg-emerald-50 hover:bg-emerald-100';
      case BusinessCategory.BEAUTY:
        return 'text-category-beauty bg-pink-50 hover:bg-pink-100';
      case BusinessCategory.SERVICES:
        return 'text-category-services bg-blue-50 hover:bg-blue-100';
      case BusinessCategory.FASHION:
        return 'text-category-fashion bg-purple-50 hover:bg-purple-100';
      case BusinessCategory.HEALTH:
        return 'text-category-health bg-red-50 hover:bg-red-100';
      default:
        return 'text-muted-foreground bg-gray-50 hover:bg-gray-100';
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-primary text-3xl md:text-4xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="body-secondary text-lg max-w-2xl mx-auto">
            Discover authentic South Asian businesses across different categories. 
            From traditional restaurants to professional services, find what you need.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-focus-ring focus-within:ring-offset-2"
              onClick={() => onCategorySelect(category.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onCategorySelect(category.id);
                }
              }}
              aria-label={`Browse ${category.name} businesses`}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 ${getCategoryColor(category.id)}`}>
                  {getCategoryIcon(category.id)}
                </div>

                {/* Category Name */}
                <h3 className="heading-secondary text-xl font-semibold mb-2 group-hover:text-primary-orange transition-colors">
                  {category.name}
                </h3>

                {/* Business Count */}
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary" className="text-sm">
                    {category.count.toLocaleString()} businesses
                  </Badge>
                </div>

                {/* Hover Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="body-secondary text-sm">
                    Explore {category.name.toLowerCase()} →
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="body-secondary text-lg mb-6">
            Can't find what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="cta-primary px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
              onClick={() => {
                // Scroll to search or open search modal
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Search All Businesses
            </button>
            <button
              className="cta-secondary px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
              onClick={() => {
                // Handle list business action
                console.log('List your business');
              }}
            >
              List Your Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
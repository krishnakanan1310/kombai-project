'use client';

import { Card } from '@/components/ui/card';
import { BusinessCategory } from '@/lib/enums';
import { formatBusinessCount } from '@/lib/formatters';
import RestaurantIcon from './icons/RestaurantIcon';
import GroceryIcon from './icons/GroceryIcon';
import BeautyIcon from './icons/BeautyIcon';
import ServicesIcon from './icons/ServicesIcon';
import FashionIcon from './icons/FashionIcon';
import HealthIcon from './icons/HealthIcon';

interface Category {
  id: BusinessCategory;
  name: string;
  count: number;
}

interface CategoryGridProps {
  categories: Category[];
  onCategorySelect: (category: BusinessCategory) => void;
}

const categoryIcons = {
  [BusinessCategory.RESTAURANTS]: RestaurantIcon,
  [BusinessCategory.GROCERY]: GroceryIcon,
  [BusinessCategory.BEAUTY]: BeautyIcon,
  [BusinessCategory.SERVICES]: ServicesIcon,
  [BusinessCategory.FASHION]: FashionIcon,
  [BusinessCategory.HEALTH]: HealthIcon,
};

const categoryColors = {
  [BusinessCategory.RESTAURANTS]: '#ea580c',
  [BusinessCategory.GROCERY]: '#059669',
  [BusinessCategory.BEAUTY]: '#db2777',
  [BusinessCategory.SERVICES]: '#2563eb',
  [BusinessCategory.FASHION]: '#9333ea',
  [BusinessCategory.HEALTH]: '#dc2626',
};

export default function CategoryGrid({ categories, onCategorySelect }: CategoryGridProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Browse by Category</h2>
          <p className="text-xl text-text-secondary">Discover the best Desi businesses in your area</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.id];
            const color = categoryColors[category.id];
            
            return (
              <Card
                key={category.id}
                className="p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onCategorySelect(category.id)}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
                    <IconComponent width={32} height={32} color={color} />
                  </div>
                  <h3 className="font-semibold text-text-primary">{category.name}</h3>
                  <p className="text-text-light text-sm">{formatBusinessCount(category.count)}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
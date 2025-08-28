// Mock data for business directory application
import { BusinessCategory, PriceRange, RatingLevel, SortOption, BusinessStatus } from './enums';

// Mock data for business listings
export const mockBusinesses = [
  {
    id: '1',
    name: 'Spice Garden Indian Restaurant',
    category: BusinessCategory.RESTAURANTS as const,
    subcategory: 'Indian Restaurant',
    rating: 4.5,
    reviewCount: 324,
    priceRange: PriceRange.MODERATE as const,
    distance: 0.5,
    address: '123 Main St, Downtown',
    status: BusinessStatus.OPEN as const,
    closingTime: 22,
    description: 'Authentic Indian cuisine with traditional spices and flavors. Family-owned restaurant serving the community for over 15 years with fresh ingredients and time-honored recipes.',
    tags: ['Samosa', 'Takeout', 'Vegetarian Options', 'Delivery'],
    featured: true,
    verified: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Desi Grocery Mart',
    category: BusinessCategory.GROCERY as const,
    subcategory: 'Grocery Store',
    rating: 4.2,
    reviewCount: 189,
    priceRange: PriceRange.BUDGET as const,
    distance: 1.2,
    address: '456 Oak Ave, Midtown',
    status: BusinessStatus.OPEN as const,
    closingTime: 21,
    description: 'Your one-stop shop for authentic South Asian groceries, spices, and specialty items. Fresh produce, halal meat, and imported goods from India, Pakistan, and Bangladesh.',
    tags: ['Fresh Produce', 'Halal Meat', 'Money Transfer', 'Spices'],
    featured: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Mehndi Beauty Lounge',
    category: BusinessCategory.BEAUTY as const,
    subcategory: 'Beauty & Wellness',
    rating: 4.8,
    reviewCount: 156,
    priceRange: PriceRange.MODERATE as const,
    distance: 0.8,
    address: '789 Park Blvd, Eastside',
    status: BusinessStatus.OPEN as const,
    closingTime: 20,
    description: 'Professional beauty services specializing in traditional South Asian beauty treatments, bridal makeup, mehndi designs, and modern styling services.',
    tags: ['Bridal Makeup', 'Mehndi', 'Hair Styling', 'Threading'],
    featured: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Khan & Associates Law Firm',
    category: BusinessCategory.SERVICES as const,
    subcategory: 'Professional Services',
    rating: 4.6,
    reviewCount: 89,
    priceRange: PriceRange.EXPENSIVE as const,
    distance: 2.1,
    address: '321 Business Center Dr, Suite 200',
    status: BusinessStatus.OPEN as const,
    closingTime: 18,
    description: 'Experienced immigration and family law attorneys serving the South Asian community. Bilingual services in English, Urdu, Hindi, and Bengali.',
    tags: ['Immigration Law', 'Family Law', 'Bilingual', 'Free Consultation'],
    featured: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    name: 'Silk & Saris Boutique',
    category: BusinessCategory.FASHION as const,
    subcategory: 'Fashion & Clothing',
    rating: 4.3,
    reviewCount: 124,
    priceRange: PriceRange.MODERATE as const,
    distance: 1.7,
    address: '567 Fashion Ave, Shopping District',
    status: BusinessStatus.OPEN as const,
    closingTime: 19,
    description: 'Exquisite collection of traditional and contemporary South Asian clothing. Specializing in bridal wear, party outfits, and custom tailoring services.',
    tags: ['Bridal Wear', 'Custom Tailoring', 'Sarees', 'Lehengas'],
    featured: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    name: 'Dr. Patel Family Medicine',
    category: BusinessCategory.HEALTH as const,
    subcategory: 'Health Services',
    rating: 4.9,
    reviewCount: 267,
    priceRange: PriceRange.MODERATE as const,
    distance: 1.4,
    address: '890 Medical Plaza, Suite 150',
    status: BusinessStatus.OPEN as const,
    closingTime: 17,
    description: 'Comprehensive family medicine practice with culturally sensitive care. Bilingual staff and understanding of South Asian health concerns and dietary needs.',
    tags: ['Family Medicine', 'Preventive Care', 'Bilingual Staff', 'Same Day Appointments'],
    featured: false,
    verified: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop'
  }
];


// Mock data for categories
export const mockCategories = [
  {
    id: BusinessCategory.RESTAURANTS,
    name: 'Restaurants',
    count: 324
  },
  {
    id: BusinessCategory.GROCERY,
    name: 'Grocery',
    count: 198
  },
  {
    id: BusinessCategory.BEAUTY,
    name: 'Beauty',
    count: 156
  },
  {
    id: BusinessCategory.SERVICES,
    name: 'Services',
    count: 134
  },
  {
    id: BusinessCategory.FASHION,
    name: 'Fashion',
    count: 89
  },
  {
    id: BusinessCategory.HEALTH,
    name: 'Health',
    count: 76
  }
];

// Mock data for popular locations
export const mockLocations = [
  {
    id: '1',
    name: 'Jackson Heights, NY',
    businessCount: 234,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Devon Avenue, Chicago',
    businessCount: 189,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Fremont, CA',
    businessCount: 156,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
  }
];

// Mock data for filter options
export const mockFilterOptions = {
  categories: [
    { id: BusinessCategory.RESTAURANTS, name: 'Restaurants', count: 324 },
    { id: BusinessCategory.GROCERY, name: 'Grocery Stores', count: 198 },
    { id: BusinessCategory.BEAUTY, name: 'Beauty & Wellness', count: 156 },
    { id: BusinessCategory.SERVICES, name: 'Professional Services', count: 134 },
    { id: BusinessCategory.FASHION, name: 'Fashion & Clothing', count: 89 },
    { id: BusinessCategory.HEALTH, name: 'Health Services', count: 76 }
  ],
  priceRanges: [
    { id: PriceRange.BUDGET, name: '$ (Budget-friendly)', count: 189 },
    { id: PriceRange.MODERATE, name: '$$ (Moderate)', count: 245 },
    { id: PriceRange.EXPENSIVE, name: '$$$ (Expensive)', count: 134 },
    { id: PriceRange.VERY_EXPENSIVE, name: '$$$$ (Very Expensive)', count: 97 }
  ],
  features: [
    { id: 'delivery', name: 'Delivery Available', count: 234 },
    { id: 'wheelchair', name: 'Wheelchair Accessible', count: 189 },
    { id: 'parking', name: 'Parking Available', count: 167 }
  ],
  cuisines: [
    { id: 'indian', name: 'Indian', count: 156 },
    { id: 'pakistani', name: 'Pakistani', count: 89 },
    { id: 'bangladeshi', name: 'Bangladeshi', count: 67 },
    { id: 'sri_lankan', name: 'Sri Lankan', count: 34 }
  ]
};

// Mock data for stats
export const mockStats = {
  totalBusinesses: 1101,
  citiesCovered: 25,
  monthlyVisitors: 50000,
  averageRating: 4.8
};

// Root component props
export const mockRootProps = {
  searchQuery: '',
  selectedLocation: 'All Locations',
  selectedCategory: null as BusinessCategory | null,
  selectedFilters: {
    rating: RatingLevel.ANY as const,
    priceRanges: [] as PriceRange[],
    categories: [] as BusinessCategory[],
    features: [] as string[],
    cuisines: [] as string[]
  },
  sortBy: SortOption.MOST_RELEVANT as const,
  currentPage: 1,
  resultsPerPage: 10
};
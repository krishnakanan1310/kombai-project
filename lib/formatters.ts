// Formatting functions for business directory data
import { PriceRange, BusinessStatus, BusinessCategory } from './enums';

export const formatDistance = (distance: number): string => {
  return `${distance} miles away`;
};

export const formatReviewCount = (count: number): string => {
  return `${count} reviews`;
};

export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

export const formatPriceRange = (priceRange: PriceRange): string => {
  return priceRange;
};

export const formatBusinessStatus = (status: BusinessStatus): string => {
  switch (status) {
    case BusinessStatus.OPEN:
      return 'Open';
    case BusinessStatus.CLOSED:
      return 'Closed';
    case BusinessStatus.TEMPORARILY_CLOSED:
      return 'Temporarily Closed';
    default:
      return 'Unknown';
  }
};

export const formatClosingTime = (hour: number): string => {
  if (hour === 0) return '12:00 AM';
  if (hour === 12) return '12:00 PM';
  if (hour < 12) return `${hour}:00 AM`;
  return `${hour - 12}:00 PM`;
};

export const formatCategoryName = (category: BusinessCategory): string => {
  switch (category) {
    case BusinessCategory.RESTAURANTS:
      return 'Restaurants';
    case BusinessCategory.GROCERY:
      return 'Grocery';
    case BusinessCategory.BEAUTY:
      return 'Beauty';
    case BusinessCategory.SERVICES:
      return 'Services';
    case BusinessCategory.FASHION:
      return 'Fashion';
    case BusinessCategory.HEALTH:
      return 'Health';
    default:
      return 'Other';
  }
};
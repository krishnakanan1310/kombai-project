import { PriceRange } from './enums';

export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

export const formatReviewCount = (count: number): string => {
  return `(${count} reviews)`;
};

export const formatDistance = (miles: number): string => {
  return `${miles} miles away`;
};

export const formatBusinessCount = (count: number): string => {
  return `${count} businesses`;
};

export const formatOpenHours = (hour: number): string => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour;
  return `Open until ${displayHour}:00 ${period}`;
};

export const formatPriceRange = (range: PriceRange): string => {
  return range;
};

export const formatResultsCount = (current: number, total: number): string => {
  return `Showing 1-${current} of ${total.toLocaleString()} results`;
};

export const formatTotalResults = (total: number): string => {
  return `Showing ${total.toLocaleString()} results found`;
};
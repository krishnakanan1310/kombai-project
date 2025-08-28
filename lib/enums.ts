// Business category types
export enum BusinessCategory {
  RESTAURANTS = 'restaurants',
  GROCERY = 'grocery',
  BEAUTY = 'beauty',
  SERVICES = 'services',
  FASHION = 'fashion',
  HEALTH = 'health'
}

// Price range options
export enum PriceRange {
  BUDGET = '$',
  MODERATE = '$$',
  EXPENSIVE = '$$$',
  VERY_EXPENSIVE = '$$$$'
}

// Rating levels
export enum RatingLevel {
  ANY = 'any',
  FIVE_STAR = '5',
  FOUR_STAR = '4',
  THREE_STAR = '3',
  TWO_STAR = '2'
}

// Sort options
export enum SortOption {
  MOST_RELEVANT = 'most_relevant',
  HIGHEST_RATED = 'highest_rated',
  NEAREST = 'nearest',
  NEWEST = 'newest'
}

// Business status
export enum BusinessStatus {
  OPEN = 'open',
  CLOSED = 'closed',
  TEMPORARILY_CLOSED = 'temporarily_closed'
}
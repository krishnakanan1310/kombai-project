'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Phone, 
  Compass, 
  Heart, 
  Star, 
  MapPin, 
  Clock, 
  CircleCheck,
  DollarSign
} from 'lucide-react';
import { formatDistance, formatReviewCount, formatRating, formatBusinessStatus, formatClosingTime } from '@/lib/formatters';
import { BusinessStatus, PriceRange } from '@/lib/enums';

interface Business {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  rating: number;
  reviewCount: number;
  priceRange: PriceRange;
  distance: number;
  address: string;
  status: BusinessStatus;
  closingTime: number;
  description: string;
  tags: string[];
  featured: boolean;
  verified: boolean;
  image: string;
}

interface BusinessCardProps {
  business: Business;
  onCall: (id: string) => void;
  onDirections: (id: string) => void;
  onViewDetails: (id: string) => void;
  onFavorite: (id: string) => void;
}

export default function BusinessCard({
  business,
  onCall,
  onDirections,
  onViewDetails,
  onFavorite
}: BusinessCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="h-4 w-4 fill-rating-star text-rating-star"
          aria-hidden="true"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="h-4 w-4 fill-rating-star/50 text-rating-star"
          aria-hidden="true"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="h-4 w-4 text-gray-300"
          aria-hidden="true"
        />
      );
    }

    return stars;
  };

  const getPriceRangeColor = (priceRange: PriceRange) => {
    switch (priceRange) {
      case PriceRange.BUDGET:
        return 'text-price-budget';
      case PriceRange.MODERATE:
        return 'text-price-moderate';
      case PriceRange.EXPENSIVE:
        return 'text-price-expensive';
      case PriceRange.VERY_EXPENSIVE:
        return 'text-price-luxury';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200 focus-within:ring-2 focus-within:ring-focus-ring focus-within:ring-offset-2">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Business Image */}
          <div className="lg:w-48 lg:h-32 w-full h-48 flex-shrink-0">
            <Avatar className="w-full h-full rounded-lg">
              <AvatarImage
                src={business.image}
                alt={`${business.name} business photo`}
                className="object-cover rounded-lg"
              />
              <AvatarFallback className="w-full h-full rounded-lg bg-muted flex items-center justify-center text-2xl font-semibold">
                {business.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Business Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex-1 min-w-0">
                {/* Business Name and Badges */}
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="heading-secondary text-xl font-semibold text-primary line-clamp-2">
                    {business.name}
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    {business.featured && (
                      <Badge className="bg-featured-bg text-featured-text text-xs font-medium">
                        FEATURED
                      </Badge>
                    )}
                    {business.verified && (
                      <Badge className="bg-verified-bg text-verified-text text-xs font-medium">
                        <CircleCheck className="h-3 w-3 mr-1" aria-hidden="true" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Category and Price Range */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="body-secondary text-sm">{business.subcategory}</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-muted-foreground mr-1" aria-hidden="true" />
                    <span className={`text-sm font-medium ${getPriceRangeColor(business.priceRange)}`}>
                      {business.priceRange}
                    </span>
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    {renderStars(business.rating)}
                  </div>
                  <span className="body-primary text-sm font-medium">
                    {formatRating(business.rating)}
                  </span>
                  <span className="body-secondary text-sm">
                    ({formatReviewCount(business.reviewCount)})
                  </span>
                </div>

                {/* Location and Status */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                    <span className="body-secondary text-sm">{business.address}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="body-secondary text-sm">
                      {formatDistance(business.distance)}
                    </span>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        business.status === BusinessStatus.OPEN 
                          ? 'bg-status-open' 
                          : 'bg-status-closed'
                      }`} />
                      <span className={`text-sm font-medium ${
                        business.status === BusinessStatus.OPEN 
                          ? 'text-status-open' 
                          : 'text-status-closed'
                      }`}>
                        {formatBusinessStatus(business.status)}
                        {business.status === BusinessStatus.OPEN && (
                          <span className="text-muted-foreground ml-1">
                            • Closes {formatClosingTime(business.closingTime)}
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="body-secondary text-sm line-clamp-2 mb-4">
                  {business.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {business.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {business.tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{business.tags.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex sm:flex-col gap-2 flex-shrink-0">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onCall(business.id)}
                  className="flex items-center gap-2 focus:ring-2 focus:ring-focus-ring"
                  aria-label={`Call ${business.name}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onDirections(business.id)}
                  className="flex items-center gap-2 focus:ring-2 focus:ring-focus-ring"
                  aria-label={`Get directions to ${business.name}`}
                >
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  Directions
                </Button>
                <Button
                  size="sm"
                  onClick={() => onViewDetails(business.id)}
                  className="cta-primary focus:ring-2 focus:ring-focus-ring"
                  aria-label={`View details for ${business.name}`}
                >
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => onFavorite(business.id)}
                  className="focus:ring-2 focus:ring-focus-ring"
                  aria-label={`Save ${business.name} to favorites`}
                >
                  <Heart className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
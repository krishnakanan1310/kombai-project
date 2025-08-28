'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { formatRating, formatReviewCount, formatDistance, formatOpenHours, formatPriceRange } from '@/lib/formatters';
import { BusinessCategory, PriceRange, BusinessStatus } from '@/lib/enums';
import StarRatingIcon from './icons/StarRatingIcon';
import ClockIcon from './icons/ClockIcon';
import LocationIcon from './icons/LocationIcon';
import PhoneIcon from './icons/PhoneIcon';
import DirectionsIcon from './icons/DirectionsIcon';
import CheckmarkIcon from './icons/CheckmarkIcon';
import HeartIcon from './icons/HeartIcon';

interface Business {
  id: string;
  name: string;
  category: BusinessCategory;
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
  onCall: (businessId: string) => void;
  onDirections: (businessId: string) => void;
  onViewDetails: (businessId: string) => void;
  onFavorite: (businessId: string) => void;
}

export default function BusinessCard({ business, onCall, onDirections, onViewDetails, onFavorite }: BusinessCardProps) {
  return (
    <Card className="p-6 shadow-card hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2">
          {business.featured && (
            <Badge className="bg-featured-bg text-featured-text text-xs font-medium">
              FEATURED
            </Badge>
          )}
          {business.verified && (
            <Badge className="bg-verified-bg text-verified-text text-xs font-medium">
              <CheckmarkIcon width={12} height={12} color="#166534" className="mr-1" />
              Verified
            </Badge>
          )}
        </div>
        <Button variant="ghost" size="sm" onClick={() => onFavorite(business.id)}>
          <HeartIcon width={20} height={17} color="#dbb6c2" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Image */}
        <div className="w-48 h-36 relative rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={business.image}
            alt={business.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3">
          {/* Title & Price */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-text-primary">{business.name}</h3>
              <p className="text-text-secondary">{business.subcategory}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-orange">{formatPriceRange(business.priceRange)}</div>
              <p className="text-text-light text-sm">{formatDistance(business.distance)}</p>
            </div>
          </div>

          {/* Rating & Hours */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <StarRatingIcon width={92} height={24} color="#facc15" />
              <span className="font-semibold text-text-primary">{formatRating(business.rating)}</span>
              <span className="text-text-light">{formatReviewCount(business.reviewCount)}</span>
            </div>
            <div className="flex items-center gap-1 text-status-open">
              <ClockIcon width={16} height={16} color="#16a34a" />
              <span className="text-sm">{formatOpenHours(business.closingTime)}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed">{business.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {business.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-blue-600 bg-blue-50">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Address & Actions */}
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-1">
              <LocationIcon width={12} height={16} color="#4b5563" />
              <span className="text-text-secondary">{business.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onCall(business.id)}
                className="flex items-center gap-1"
              >
                <PhoneIcon width={16} height={16} color="#000000" />
                Call
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onDirections(business.id)}
                className="flex items-center gap-1"
              >
                <DirectionsIcon width={16} height={16} color="#000000" />
                Directions
              </Button>
              <Button 
                variant="ghost" 
                className="text-primary-orange hover:bg-primary-orange/10 font-semibold"
                onClick={() => onViewDetails(business.id)}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, TrendingUp } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  businessCount: number;
  image: string;
}

interface PopularLocationsProps {
  locations: Location[];
  onLocationSelect: (locationId: string) => void;
}

export default function PopularLocations({
  locations,
  onLocationSelect
}: PopularLocationsProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary-orange" aria-hidden="true" />
            <h2 className="heading-primary text-3xl md:text-4xl font-bold">
              Popular Locations
            </h2>
          </div>
          <p className="body-secondary text-lg max-w-2xl mx-auto">
            Explore thriving South Asian business communities in these popular areas. 
            Each location offers a unique blend of culture, cuisine, and services.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={location.id}
              className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 focus-within:ring-2 focus-within:ring-focus-ring focus-within:ring-offset-2"
              onClick={() => onLocationSelect(location.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onLocationSelect(location.id);
                }
              }}
              aria-label={`Explore businesses in ${location.name}`}
            >
              <CardContent className="p-0">
                {/* Location Image */}
                <div className="relative h-48 overflow-hidden">
                  <Avatar className="w-full h-full rounded-none">
                    <AvatarImage
                      src={location.image}
                      alt={`${location.name} area view`}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                    <AvatarFallback className="w-full h-full rounded-none bg-gradient-to-br from-primary-orange/20 to-primary-orange-light/20 flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-primary-orange" aria-hidden="true" />
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Popular Badge */}
                  {index === 0 && (
                    <Badge className="absolute top-4 left-4 bg-primary-orange text-white font-medium">
                      Most Popular
                    </Badge>
                  )}
                </div>

                {/* Location Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="heading-secondary text-xl font-semibold mb-2 group-hover:text-primary-orange transition-colors line-clamp-1">
                        {location.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                        <Badge variant="outline" className="text-sm">
                          {location.businessCount.toLocaleString()} businesses
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="body-secondary text-sm mb-4 line-clamp-2">
                    A vibrant community hub with authentic South Asian businesses, 
                    restaurants, and cultural centers serving the local community.
                  </p>

                  {/* Explore Link */}
                  <div className="flex items-center justify-between">
                    <span className="body-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore businesses →
                    </span>
                    <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-primary-orange rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-primary-orange-light rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-primary-orange-dark rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 max-w-2xl mx-auto">
            <h3 className="heading-secondary text-xl font-semibold mb-4">
              Don't see your area listed?
            </h3>
            <p className="body-secondary mb-6">
              Help us expand our network by suggesting new locations or listing your business 
              to help build the community in your area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="cta-primary px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-focus-ring focus:ring-offset-2">
                Suggest a Location
              </button>
              <button className="cta-secondary px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-focus-ring focus:ring-offset-2">
                List Your Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { formatBusinessCount } from '@/lib/formatters';

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

export default function PopularLocations({ locations, onLocationSelect }: PopularLocationsProps) {
  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Popular Locations</h2>
          <p className="text-xl text-text-secondary">Find Desi businesses in these bustling neighborhoods</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onLocationSelect(location.id)}
            >
              <div className="relative h-48">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
                  <p className="text-lg">{formatBusinessCount(location.businessCount)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
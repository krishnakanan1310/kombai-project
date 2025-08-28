'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CheckmarkIcon from './icons/CheckmarkIcon';

interface Stats {
  totalBusinesses: number;
  citiesCovered: number;
  monthlyVisitors: number;
  averageRating: number;
}

interface BusinessOwnerCTAProps {
  stats: Stats;
  onListBusiness: () => void;
  onLearnMore: () => void;
}

const benefits = [
  'Free basic listing with photos and contact info',
  'Manage reviews and customer messages',
  'Analytics and insights about your customers',
  'Premium features for enhanced visibility'
];

export default function BusinessOwnerCTA({ stats, onListBusiness, onLearnMore }: BusinessOwnerCTAProps) {
  return (
    <section className="gradient-primary py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">Own a Desi Business?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join thousands of business owners who trust BD BizDirectory to connect with their community. 
            Get discovered by customers looking for authentic South Asian businesses.
          </p>
          
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckmarkIcon width={24} height={24} color="#ffffff" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4">
            <Button 
              onClick={onListBusiness}
              className="bg-white text-primary-orange hover:bg-gray-100 font-bold text-lg px-8 py-3 h-auto"
            >
              List Your Business Free
            </Button>
            <Button 
              variant="outline"
              onClick={onLearnMore}
              className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-3 h-auto"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Stats */}
        <Card className="glass-card p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Quick Stats</h3>
            <p className="text-lg">See what BD BizDirectory can do for your business</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats.totalBusinesses.toLocaleString()}+</div>
              <div className="text-lg">Listed Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats.citiesCovered}+</div>
              <div className="text-lg">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{(stats.monthlyVisitors / 1000).toFixed(0)}K+</div>
              <div className="text-lg">Monthly Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats.averageRating}★</div>
              <div className="text-lg">Average Rating</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
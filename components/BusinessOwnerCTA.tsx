'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Store, 
  Users, 
  MapPin, 
  TrendingUp, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

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

export default function BusinessOwnerCTA({
  stats,
  onListBusiness,
  onLearnMore
}: BusinessOwnerCTAProps) {
  const benefits = [
    {
      icon: <Users className="h-5 w-5" aria-hidden="true" />,
      title: 'Reach More Customers',
      description: 'Connect with thousands of customers actively searching for South Asian businesses'
    },
    {
      icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
      title: 'Boost Your Visibility',
      description: 'Get featured in search results and category listings to increase your online presence'
    },
    {
      icon: <Star className="h-5 w-5" aria-hidden="true" />,
      title: 'Build Your Reputation',
      description: 'Collect reviews and ratings to build trust with potential customers'
    },
    {
      icon: <CheckCircle className="h-5 w-5" aria-hidden="true" />,
      title: 'Verified Business Badge',
      description: 'Get verified to show customers that your business is authentic and trustworthy'
    }
  ];

  const statsData = [
    {
      icon: <Store className="h-6 w-6" aria-hidden="true" />,
      value: stats.totalBusinesses.toLocaleString(),
      label: 'Listed Businesses',
      color: 'text-primary-orange'
    },
    {
      icon: <MapPin className="h-6 w-6" aria-hidden="true" />,
      value: stats.citiesCovered.toString(),
      label: 'Cities Covered',
      color: 'text-category-services'
    },
    {
      icon: <Users className="h-6 w-6" aria-hidden="true" />,
      value: `${(stats.monthlyVisitors / 1000).toFixed(0)}K+`,
      label: 'Monthly Visitors',
      color: 'text-category-grocery'
    },
    {
      icon: <Star className="h-6 w-6" aria-hidden="true" />,
      value: stats.averageRating.toFixed(1),
      label: 'Average Rating',
      color: 'text-rating-star'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary-orange/5 via-white to-primary-orange-light/5">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-r from-white to-gray-50">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <Badge className="bg-primary-orange/10 text-primary-orange border-primary-orange/20 mb-4">
                    For Business Owners
                  </Badge>
                  <h2 className="heading-primary text-3xl lg:text-4xl font-bold mb-4">
                    Own a <span className="text-primary-orange">Desi Business?</span>
                  </h2>
                  <p className="body-secondary text-lg mb-6">
                    Join our growing community of South Asian businesses and connect with 
                    customers who are actively looking for authentic services and products.
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-orange/10 rounded-lg flex items-center justify-center text-primary-orange">
                        {benefit.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="heading-secondary text-sm font-semibold mb-1">
                          {benefit.title}
                        </h4>
                        <p className="body-secondary text-xs">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={onListBusiness}
                    size="lg"
                    className="cta-primary flex items-center gap-2 focus:ring-2 focus:ring-focus-ring"
                  >
                    List Your Business
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button
                    onClick={onLearnMore}
                    variant="outline"
                    size="lg"
                    className="focus:ring-2 focus:ring-focus-ring"
                  >
                    Learn More
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="body-secondary text-sm mb-3 font-medium">
                    Trusted by business owners across the community
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-rating-star text-rating-star" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="body-secondary text-sm">
                      {stats.averageRating}/5 average business rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Side */}
              <div className="bg-gradient-to-br from-primary-orange to-primary-orange-dark p-8 lg:p-12 text-white">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Join a Thriving Community
                  </h3>
                  <p className="text-primary-orange-light">
                    See why thousands of businesses choose our platform
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {statsData.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-primary-orange-light">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Success Stories */}
                <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-3">Success Story</h4>
                  <blockquote className="text-sm text-primary-orange-light italic mb-3">
                    "Since joining the directory, we've seen a 40% increase in new customers. 
                    The platform really helps us connect with our community."
                  </blockquote>
                  <div className="text-xs font-medium">
                    - Raj Patel, Spice Garden Restaurant
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
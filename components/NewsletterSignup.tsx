'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Bell,
  Gift,
  TrendingUp
} from 'lucide-react';

interface NewsletterSignupProps {
  onSubscribe: (email: string) => void;
}

export default function NewsletterSignup({ onSubscribe }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    
    // Validate email
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      onSubscribe(email);
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: <Bell className="h-4 w-4" aria-hidden="true" />,
      text: 'New business alerts'
    },
    {
      icon: <Gift className="h-4 w-4" aria-hidden="true" />,
      text: 'Exclusive deals & offers'
    },
    {
      icon: <TrendingUp className="h-4 w-4" aria-hidden="true" />,
      text: 'Community updates'
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-green-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" aria-hidden="true" />
                </div>
              </div>
              <h2 className="heading-secondary text-2xl font-bold text-green-800 mb-2">
                Welcome to our community!
              </h2>
              <p className="body-secondary text-green-700 mb-4">
                Thank you for subscribing to our newsletter. You'll receive updates about 
                new businesses, exclusive deals, and community news.
              </p>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Subscription confirmed
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary-orange/5 via-white to-primary-orange-light/5">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden shadow-xl border-0">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 lg:p-12 bg-white">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Mail className="h-6 w-6 text-primary-orange" aria-hidden="true" />
                    <Badge className="bg-primary-orange/10 text-primary-orange border-primary-orange/20">
                      Stay Updated
                    </Badge>
                  </div>
                  <h2 className="heading-primary text-3xl font-bold mb-4">
                    Join Our <span className="text-primary-orange">Community</span>
                  </h2>
                  <p className="body-secondary text-lg mb-6">
                    Get the latest updates on new businesses, exclusive deals, and community 
                    events delivered straight to your inbox.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-orange/10 rounded-lg flex items-center justify-center text-primary-orange">
                        {benefit.icon}
                      </div>
                      <span className="body-secondary text-sm">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`pl-10 pr-4 py-3 text-base focus:ring-2 focus:ring-focus-ring ${
                          error ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        disabled={isLoading}
                        required
                        aria-describedby={error ? 'email-error' : undefined}
                      />
                    </div>
                    {error && (
                      <div id="email-error" className="flex items-center gap-2 mt-2 text-red-600">
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                        <span className="text-sm">{error}</span>
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full cta-primary focus:ring-2 focus:ring-focus-ring"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe to Newsletter'
                    )}
                  </Button>
                </form>

                {/* Privacy Note */}
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to receive marketing emails. You can unsubscribe 
                  at any time. We respect your privacy and will never share your information.
                </p>
              </div>

              {/* Visual Side */}
              <div className="bg-gradient-to-br from-primary-orange to-primary-orange-dark p-8 lg:p-12 text-white flex items-center">
                <div className="w-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="h-10 w-10 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Stay in the Loop
                    </h3>
                    <p className="text-primary-orange-light">
                      Join 10,000+ community members who stay updated with our newsletter
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-1">10K+</div>
                      <div className="text-sm text-primary-orange-light">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">2x</div>
                      <div className="text-sm text-primary-orange-light">Monthly</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="h-4 w-4 text-green-300" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-sm text-primary-orange-light italic mb-3">
                      "The newsletter keeps me updated on all the new restaurants and 
                      services in my area. Love the exclusive deals!"
                    </blockquote>
                    <div className="text-xs font-medium">
                      - Sarah K., Community Member
                    </div>
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
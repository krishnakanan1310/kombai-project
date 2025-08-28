'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface NewsletterSignupProps {
  onSubscribe: (email: string) => void;
}

export default function NewsletterSignup({ onSubscribe }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateEmail(email);
    setIsValid(valid);
    
    if (valid) {
      onSubscribe(email);
      setEmail('');
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-text-primary mb-4">Stay Connected</h2>
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Get weekly updates about new businesses, special offers, and community events in your area.
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-lg mx-auto mb-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsValid(true);
            }}
            className={`flex-1 ${!isValid ? 'border-destructive' : ''}`}
          />
          <Button 
            type="submit"
            className="bg-primary-orange hover:bg-primary-orange-dark text-white font-semibold px-8"
          >
            Subscribe
          </Button>
        </form>
        
        {!isValid && (
          <p className="text-destructive text-sm mb-2">Please enter a valid email address</p>
        )}
        
        <p className="text-text-light text-sm">
          No spam, unsubscribe anytime. Your privacy is protected.
        </p>
      </div>
    </section>
  );
}
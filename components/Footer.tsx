'use client';

import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Store, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart
} from 'lucide-react';

interface FooterProps {
  onLinkClick: (link: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'For Customers',
      links: [
        { label: 'Find Businesses', href: '/search' },
        { label: 'Browse Categories', href: '/categories' },
        { label: 'Popular Locations', href: '/locations' },
        { label: 'Write Reviews', href: '/reviews' },
        { label: 'Mobile App', href: '/app' }
      ]
    },
    {
      title: 'For Business Owners',
      links: [
        { label: 'List Your Business', href: '/list-business' },
        { label: 'Business Dashboard', href: '/dashboard' },
        { label: 'Pricing Plans', href: '/pricing' },
        { label: 'Success Stories', href: '/success-stories' },
        { label: 'Marketing Tools', href: '/marketing' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Report an Issue', href: '/report' },
        { label: 'Community Guidelines', href: '/guidelines' },
        { label: 'Safety Center', href: '/safety' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press Kit', href: '/press' },
        { label: 'Investor Relations', href: '/investors' },
        { label: 'Blog', href: '/blog' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" aria-hidden="true" />, label: 'Facebook', href: '#facebook' },
    { icon: <Twitter className="h-5 w-5" aria-hidden="true" />, label: 'Twitter', href: '#twitter' },
    { icon: <Instagram className="h-5 w-5" aria-hidden="true" />, label: 'Instagram', href: '#instagram' },
    { icon: <Linkedin className="h-5 w-5" aria-hidden="true" />, label: 'LinkedIn', href: '#linkedin' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Accessibility', href: '/accessibility' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Store className="h-8 w-8 text-primary-orange" aria-hidden="true" />
              <span className="heading-secondary text-2xl font-bold">
                Desi BizDirectory
              </span>
            </div>
            <p className="body-secondary text-gray-300 mb-6 max-w-md">
              Connecting South Asian communities with authentic businesses worldwide. 
              Discover, review, and support local businesses that understand your culture and needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-primary-orange" aria-hidden="true" />
                <a 
                  href="mailto:hello@desibizdir.com" 
                  className="hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                >
                  hello@desibizdir.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-primary-orange" aria-hidden="true" />
                <a 
                  href="tel:+1-555-123-4567" 
                  className="hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-primary-orange mt-0.5" aria-hidden="true" />
                <address className="not-italic">
                  123 Business Ave<br />
                  Suite 100<br />
                  New York, NY 10001
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick(social.href);
                  }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={`Follow us on ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="heading-secondary text-lg font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onLinkClick(link.href);
                      }}
                      className="body-secondary text-gray-300 hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400">
            <span className="body-secondary text-sm">
              © {currentYear} Desi BizDirectory. Made with
            </span>
            <Heart className="h-4 w-4 text-red-500 fill-current" aria-hidden="true" />
            <span className="body-secondary text-sm">
              for the South Asian community.
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-6">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick(link.href);
                  }}
                  className="body-secondary text-sm text-gray-400 hover:text-primary-orange transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-600">•</span>
                )}
              </div>
            ))}
          </div>

          {/* Language/Region Selector */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-gray-600 text-gray-300">
              🇺🇸 English (US)
            </Badge>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="body-secondary text-sm text-gray-400 max-w-2xl mx-auto">
              Desi BizDirectory is committed to promoting authentic South Asian businesses 
              and fostering community connections. We verify businesses to ensure quality 
              and authenticity for our users.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
'use client';

import { Separator } from '@/components/ui/separator';
import LogoIcon from './icons/LogoIcon';

interface FooterProps {
  onLinkClick: (link: string) => void;
}

const quickLinks = [
  'Browse Businesses',
  'Add Your Business', 
  'Write a Review',
  'Mobile App',
  'Business Resources',
  'Advertise With Us'
];

const supportLinks = [
  'Help Center',
  'Contact Us',
  'Privacy Policy',
  'Terms of Service',
  'Community Guidelines',
  'Report a Problem'
];

export default function Footer({ onLinkClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon width={15} height={20} color="#ffffff" />
              <span className="text-2xl font-bold">BD BizDirectory</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted source for discovering authentic South Asian businesses. 
              Connecting communities, supporting local entrepreneurs, and celebrating the 
              rich diversity of Desi culture across America.
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons Placeholder */}
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => onLinkClick(link)}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-3">
              {supportLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => onLinkClick(link)}
                  className="block text-gray-300 hover:text-white transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2024 BD BizDirectory. All rights reserved.</p>
          <p>Made with ❤️ for the Desi community</p>
        </div>
      </div>
    </footer>
  );
}
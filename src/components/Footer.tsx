import React from 'react';
import { NavItem } from '../types';
import { ArrowUp, Building2, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  navItems: NavItem[];
  personalName: string;
  personalTitle: string;
}

export const Footer: React.FC<FooterProps> = ({
  navItems,
  personalName,
  personalTitle
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090b0e] text-[#8c92a0] border-t border-[#1a1e28] py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#181c26]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#161922] border border-[#c5a880]/50 flex items-center justify-center text-[#c5a880] font-serif-title font-bold text-lg">
                NG
              </div>
              <span className="font-serif-title font-semibold text-xl text-[#f3f2ee]">
                {personalName}
              </span>
            </div>

            <p className="text-xs text-[#8c92a0] font-sans-body leading-relaxed max-w-md">
              {personalTitle}
            </p>

            <p className="text-xs text-[#6b7280] font-sans-body">
              Boutique real estate developer with over two decades of experience building real estate businesses across India and the UAE.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] font-semibold">
              Quick Navigation
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-sans-body text-[#8c92a0] hover:text-[#c5a880] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-body">
          <p>© 2026 {personalName}. Managing Director, Nyshaa Realty. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#c5a880] hover:underline"
            >
              <span>Back to top</span>
              <div className="p-1.5 rounded-full bg-[#161a22] border border-[#2c3344]">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Building, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  navItems: NavItem[];
  personalName: string;
  personalTitle: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems,
  personalName,
  personalTitle
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0f12]/90 backdrop-blur-md border-b border-[#232834] py-3.5 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-[#0d0f12]/90 via-[#0d0f12]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a href="#hero" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-sm bg-[#1a1e27] border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] font-serif-title font-bold text-xl group-hover:border-[#c5a880] transition-colors shadow-md"
          >
            NG
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif-title font-semibold text-base sm:text-lg text-[#f3f2ee] tracking-tight group-hover:text-[#c5a880] transition-colors">
              {personalName}
            </span>
            <span className="text-[10px] text-[#9fa4b0] font-mono tracking-wider uppercase hidden sm:inline-block">
              Nyshaa Realty & Sukoon Stays
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-sans-body tracking-wide transition-colors rounded-xs ${
                  isActive
                    ? 'text-[#c5a880] font-semibold'
                    : 'text-[#9fa4b0] hover:text-[#f3f2ee] hover:bg-[#161a22]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c5a880] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-sm bg-[#c5a880] text-[#0d0f12] hover:bg-[#d6ba92] transition-colors shadow-md shadow-[#c5a880]/10"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm bg-[#161920] text-[#f3f2ee] border border-[#2a2f3d] hover:border-[#c5a880] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#c5a880]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0e1116] border-b border-[#262b38] shadow-2xl p-6 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-2 max-h-[70vh] overflow-y-auto pr-1">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-3 text-xs rounded-sm border transition-all ${
                      isActive
                        ? 'bg-[#1a1e27] text-[#c5a880] border-[#c5a880]/50 font-semibold'
                        : 'bg-[#13161c] text-[#9fa4b0] border-[#202532] hover:text-[#f3f2ee]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#232834] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-xs font-semibold rounded-sm bg-[#c5a880] text-[#0d0f12]"
              >
                Get In Touch Directly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


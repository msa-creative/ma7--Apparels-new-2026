'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Menu, X, Search, Heart, User, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function PremiumHeader({ onCartClick }: { onCartClick?: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Menu animation
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        duration: 0.3,
        x: 0,
        opacity: 1,
        ease: 'power2.out',
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        duration: 0.3,
        x: '-100%',
        opacity: 0,
        ease: 'power2.in',
      });
    }
  }, [isMenuOpen]);

  // Animate nav items on hover
  const animateNavItem = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.2,
      scale: 1.05,
      color: '#d4af37',
    });
  };

  const resetNavItem = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.2,
      scale: 1,
      color: '#ffffff',
    });
  };

  return (
    <>
      {/* Top banner */}
      <div className="hidden md:flex items-center justify-center gap-8 bg-secondary/20 text-foreground text-sm py-2 px-4">
        <div className="flex items-center gap-2">
          <span>✓</span>
          <span>Complimentary Shipping on orders over $500</span>
        </div>
        <div className="h-px w-px bg-foreground/20" />
        <div className="flex items-center gap-2">
          <span>✓</span>
          <span>Free Returns Within 30 Days</span>
        </div>
      </div>

      {/* Main header */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass bg-primary/40 backdrop-blur-xl border-b border-white/10'
            : 'bg-primary/20 backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
              <span className="text-lg font-serif font-bold text-secondary">MA7</span>
            </div>
            <span className="hidden sm:inline text-sm font-semibold text-foreground">APPARELS</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {['Men', 'Women', 'Accessories', 'Collections'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground font-medium text-sm hover:text-secondary transition-colors relative group"
                onMouseEnter={animateNavItem}
                onMouseLeave={resetNavItem}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-secondary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-foreground hover:text-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-foreground hover:text-secondary transition-colors relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full text-xs text-primary flex items-center justify-center">
                0
              </span>
            </button>
            <button className="text-foreground hover:text-secondary transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={onCartClick}
              className="text-foreground hover:text-secondary transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full text-xs text-primary flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-foreground hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 top-20 left-0 w-full glass-dark translate-x-full lg:hidden"
      >
        <div className="p-6 space-y-4">
          {['Men', 'Women', 'Accessories', 'Collections'].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-foreground hover:text-secondary font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-primary">MA7</h1>
            <p className="text-xs tracking-widest text-muted-foreground">APPARELS</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#collections" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Collections
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <button className="p-2 text-foreground hover:text-secondary transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-foreground hover:text-secondary transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-foreground hover:text-secondary transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-secondary text-primary text-xs rounded-full flex items-center justify-center">0</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-border">
            <a href="#collections" className="block py-3 text-sm font-medium text-foreground hover:text-secondary">
              Collections
            </a>
            <a href="#about" className="block py-3 text-sm font-medium text-foreground hover:text-secondary">
              About
            </a>
            <a href="#contact" className="block py-3 text-sm font-medium text-foreground hover:text-secondary">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

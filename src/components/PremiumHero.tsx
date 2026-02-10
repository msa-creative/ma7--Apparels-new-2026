'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';

export default function PremiumHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate background
    tl.from('.hero-bg', {
      duration: 1.2,
      opacity: 0,
      scale: 1.05,
      ease: 'power2.out',
    })
      // Animate content
      .from(
        '.hero-title',
        {
          duration: 0.8,
          opacity: 0,
          y: 50,
          ease: 'power3.out',
        },
        '-=0.8'
      )
      .from(
        '.hero-subtitle',
        {
          duration: 0.6,
          opacity: 0,
          y: 30,
        },
        '-=0.5'
      )
      .from(
        '.hero-buttons',
        {
          duration: 0.6,
          opacity: 0,
          y: 20,
        },
        '-=0.4'
      );

    // Parallax effect on scroll
    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 100,
      ease: 'none',
    });
  }, []);

  const animateLiquidButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    gsap.to(button, {
      duration: 0.3,
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(212, 175, 55, 0.4)',
    });
  };

  const resetLiquidButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    gsap.to(button, {
      duration: 0.3,
      scale: 1,
      boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2)',
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen md:h-[90vh] overflow-hidden bg-primary flex items-center justify-center"
    >
      {/* Background image with overlay */}
      <div
        className="hero-bg absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(26, 26, 26, 0.5) 100%), url("https://images.unsplash.com/photo-1469336130143-25d1d51f3cac?w=1200&h=600&fit=crop")',
        }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
        <div className="hero-title mb-6">
          <p className="text-secondary text-sm md:text-base font-semibold tracking-[0.3em] mb-4">
            SPRING/SUMMER 2026 COLLECTION
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-2">
            The Art of
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-secondary italic mb-4">
            Refined Elegance
          </h2>
        </div>

        <div className="hero-subtitle mb-8 md:mb-12">
          <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our latest collection where timeless craftsmanship meets contemporary design. Premium apparel for those who appreciate the finer things.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onMouseEnter={animateLiquidButton}
            onMouseLeave={resetLiquidButton}
            className="px-8 md:px-12 py-4 bg-white text-primary font-semibold rounded-full hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
          >
            Shop Women
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onMouseEnter={animateLiquidButton}
            onMouseLeave={resetLiquidButton}
            className="px-8 md:px-12 py-4 border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground/10 transition-all duration-300 flex items-center gap-2 group"
          >
            Shop Men
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-foreground/50 text-xs">Scroll to explore</p>
          <div className="w-6 h-10 border border-foreground/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function LoadingPage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate logo
    tl.from('.loading-logo', {
      duration: 0.8,
      opacity: 0,
      scale: 0.8,
      ease: 'back.out',
    })
      .to('.loading-logo', {
        duration: 1.5,
        opacity: 1,
        scale: 1,
      }, 0)
      .from(
        '.loading-text',
        {
          duration: 0.6,
          opacity: 0,
          y: 20,
        },
        '-=0.5'
      )
      .to('.loading-bar', {
        duration: 2,
        width: '100%',
        ease: 'power2.inOut',
      })
      .to(
        '.loading-container',
        {
          duration: 0.5,
          opacity: 0,
          onComplete: () => setIsVisible(false),
        },
        '+=0.5'
      );

    // Animate particles
    const particles = gsap.utils.toArray('.particle');
    particles.forEach((particle: any, index) => {
      gsap.to(particle, {
        duration: 2 + Math.random() * 1,
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: 0,
        delay: index * 0.05,
        repeat: -1,
      });
    });
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-container fixed inset-0 bg-background flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        <div className="loading-logo mb-8 w-24 h-24 relative">
          <div className="w-full h-full rounded-full glass flex items-center justify-center">
            <div className="text-4xl font-serif font-bold text-secondary">MA7</div>
          </div>
        </div>

        <div className="loading-text space-y-2 mb-12">
          <h1 className="text-3xl font-serif font-bold text-foreground">MA7 APPARELS</h1>
          <p className="text-muted-foreground">Luxury Refined</p>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div className="loading-bar h-full bg-gradient-to-r from-secondary via-secondary to-accent" />
        </div>

        <p className="text-sm text-muted-foreground mt-6 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    description: 'Discover our curated collection',
  },
  {
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop',
    description: 'Premium fashion essentials',
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=600&fit=crop',
    description: 'Complete your style',
  },
];

export default function ShopByCategory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate section title
    gsap.from('.category-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: 'power3.out',
    });

    // Animate category cards with stagger
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        delay: index * 0.15,
        ease: 'power3.out',
      });

      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          scale: 1.05,
          y: -10,
        });
        gsap.to(card.querySelector('.category-overlay'), {
          duration: 0.3,
          opacity: 1,
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          scale: 1,
          y: 0,
        });
        gsap.to(card.querySelector('.category-overlay'), {
          duration: 0.3,
          opacity: 0,
        });
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-32 bg-primary px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="category-title text-secondary text-sm md:text-base font-semibold tracking-[0.2em] mb-4">
            EXPLORE
          </p>
          <h2 className="category-title text-4xl md:text-5xl font-serif font-bold text-foreground">
            Shop by Category
          </h2>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative h-80 md:h-96 rounded-lg overflow-hidden cursor-pointer group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

              {/* Content overlay */}
              <div className="category-overlay absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 bg-black/40">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">{category.description}</p>
                  <button className="px-6 py-2 bg-secondary text-primary font-semibold rounded-full text-sm hover:bg-secondary/90 transition-colors">
                    Explore Now →
                  </button>
                </div>
              </div>

              {/* Static content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

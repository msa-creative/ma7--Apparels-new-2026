'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Sarah Mitchell',
    role: 'Fashion Enthusiast',
    rating: 5,
    text: 'Absolutely exceptional quality and attention to detail. MA7 Apparels truly delivers luxury without compromise.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'James Chen',
    role: 'Business Professional',
    rating: 5,
    text: 'The craftsmanship is impeccable. Every piece feels premium and timeless. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Style Curator',
    rating: 5,
    text: 'MA7 Apparels has become my go-to for sophisticated pieces that elevate any wardrobe. Outstanding service too.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Thompson',
    role: 'Designer',
    rating: 5,
    text: 'The design philosophy of MA7 is truly inspiring. Premium materials and perfect execution every time.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export default function CustomerReviews() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate title
    gsap.from('.reviews-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: 'power3.out',
    });

    // Animate review cards
    reviewsRef.current.forEach((review, index) => {
      gsap.from(review, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        rotationX: 10,
        delay: index * 0.1,
        ease: 'power3.out',
        transformOrigin: 'center bottom',
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-32 bg-primary px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reviews-title text-secondary text-sm md:text-base font-semibold tracking-[0.2em] mb-4">
            TESTIMONIALS
          </p>
          <h2 className="reviews-title text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Customer Satisfaction
          </h2>
          <p className="reviews-title text-foreground/60 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the MA7 difference
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              ref={(el) => {
                if (el) reviewsRef.current[index] = el;
              }}
              className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground/80 text-base mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent overflow-hidden flex-shrink-0">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-foreground/60">{review.role}</p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-12 h-12 text-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.756-5-7-5-6 0-6 5-6 11v3c0 1 0 4 6 4z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="glass rounded-lg p-8">
            <p className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
              98%
            </p>
            <p className="text-foreground/60">Customer Satisfaction</p>
          </div>
          <div className="glass rounded-lg p-8">
            <p className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
              50K+
            </p>
            <p className="text-foreground/60">Happy Customers</p>
          </div>
          <div className="glass rounded-lg p-8">
            <p className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
              4.9★
            </p>
            <p className="text-foreground/60">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

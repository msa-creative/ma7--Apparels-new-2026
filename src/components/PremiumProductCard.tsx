'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface PremiumProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors?: string[];
  badge?: string;
}

export default function PremiumProductCard({
  id,
  name,
  category,
  price,
  image,
  colors = [],
  badge,
}: PremiumProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleMouseEnter = () => {
    if (!cardRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      duration: 0.4,
      scale: 1.1,
      filter: 'brightness(0.8)',
      ease: 'power2.out',
    });

    gsap.to(cardRef.current.querySelector('.product-overlay'), {
      duration: 0.3,
      opacity: 1,
      pointerEvents: 'auto',
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      duration: 0.4,
      scale: 1,
      filter: 'brightness(1)',
      ease: 'power2.out',
    });

    gsap.to(cardRef.current.querySelector('.product-overlay'), {
      duration: 0.3,
      opacity: 0,
      pointerEvents: 'none',
      ease: 'power2.out',
    });
  };

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      quantity: 1,
      image,
      color: colors[0],
    });

    // Animate button
    gsap.to('.add-to-cart-btn', {
      duration: 0.2,
      scale: 0.95,
      onComplete: () => {
        gsap.to('.add-to-cart-btn', {
          duration: 0.2,
          scale: 1,
        });
      },
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    gsap.to('.wishlist-btn', {
      duration: 0.3,
      scale: 1.2,
      onComplete: () => {
        gsap.to('.wishlist-btn', {
          duration: 0.1,
          scale: 1,
        });
      },
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative h-full flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card container */}
      <div className="relative h-96 md:h-full rounded-xl overflow-hidden glass bg-gradient-to-br from-white/10 to-white/5 flex-1 flex flex-col">
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-secondary text-primary text-xs font-bold rounded-full uppercase">
              {badge}
            </span>
          </div>
        )}

        {/* Image container */}
        <div ref={imageRef} className="relative w-full h-60 overflow-hidden flex-grow">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product info */}
        <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
          <div>
            <p className="text-secondary text-xs font-semibold tracking-wider mb-2 uppercase">
              {category}
            </p>
            <h3 className="text-foreground font-semibold text-sm md:text-base leading-tight mb-3 line-clamp-2">
              {name}
            </h3>
          </div>

          {/* Price and color swatches */}
          <div className="space-y-3">
            {/* Colors */}
            {colors.length > 0 && (
              <div className="flex gap-2">
                {colors.map((color, i) => (
                  <button
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white/20 hover:border-secondary transition-colors"
                    style={{ backgroundColor: color }}
                    title={`Color option ${i + 1}`}
                  />
                ))}
              </div>
            )}

            <div className="flex items-end justify-between">
              <p className="text-secondary text-lg md:text-xl font-bold">
                ${price.toFixed(2)}
              </p>

              {/* Quick action buttons */}
              <div className="flex gap-2">
                <button
                  onClick={toggleWishlist}
                  className="wishlist-btn p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Heart
                    className="w-4 h-4"
                    fill={isWishlisted ? 'currentColor' : 'none'}
                    color={isWishlisted ? '#d4af37' : 'currentColor'}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay with CTA buttons */}
        <div className="product-overlay absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none z-10">
          <button
            onClick={handleAddToCart}
            className="add-to-cart-btn px-6 py-3 bg-gradient-to-r from-secondary to-accent text-primary font-semibold rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-secondary/40 transition-all duration-300 group/btn"
          >
            <ShoppingBag className="w-5 h-5 group-hover/btn:animate-bounce" />
            Add to Bag
          </button>

          <button className="px-6 py-3 border border-foreground/30 text-foreground rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300">
            <Eye className="w-5 h-5" />
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
}

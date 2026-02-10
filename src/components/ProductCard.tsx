'use client';

import Image from 'next/image';
import { ShoppingBag, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors?: string[];
}

export default function ProductCard({ id, name, category, price, image, colors = [] }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted aspect-square mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <button className="p-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <ShoppingBag size={20} />
          </button>
          <button 
            onClick={() => setIsFavorited(!isFavorited)}
            className="p-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            {category}
          </p>
          <h3 className="text-lg font-serif font-semibold text-primary text-balance">
            {name}
          </h3>
        </div>

        {/* Colors */}
        {colors.length > 0 && (
          <div className="flex gap-2">
            {colors.map((color) => (
              <div
                key={color}
                className="w-5 h-5 rounded-full border border-border hover:border-secondary cursor-pointer"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        )}

        {/* Price */}
        <p className="text-lg font-serif font-semibold text-secondary">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

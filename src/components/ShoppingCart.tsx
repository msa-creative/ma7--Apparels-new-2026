'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function ShoppingCart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, total } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Animate backdrop
      gsap.to(cartRef.current, {
        duration: 0.3,
        opacity: 1,
        pointerEvents: 'auto',
        ease: 'power2.out',
      });

      // Animate cart content
      gsap.to(contentRef.current, {
        duration: 0.3,
        x: 0,
        opacity: 1,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        duration: 0.3,
        x: 384,
        opacity: 0,
        ease: 'power2.in',
      });

      gsap.to(cartRef.current, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: 'none',
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  if (!isOpen && !items.length) return null;

  return (
    <div
      ref={cartRef}
      className="fixed inset-0 z-50 opacity-0 pointer-events-none"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Cart panel */}
      <div
        ref={contentRef}
        className="absolute right-0 top-0 h-full w-full max-w-sm translate-x-96 bg-primary shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-serif font-bold text-foreground">Shopping Bag</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-foreground font-semibold">Your bag is empty</p>
              <p className="text-sm text-muted-foreground">Add items to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                {/* Item image */}
                <div className="w-20 h-20 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                  {item.color && (
                    <p className="text-xs text-muted-foreground">Color: {item.color}</p>
                  )}
                  {item.size && (
                    <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                  )}
                  <p className="text-secondary font-semibold mt-2">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1 hover:bg-white/10 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1 hover:bg-white/10 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto p-1 hover:bg-red-500/10 rounded"
                    >
                      <X className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/10 p-6 space-y-4">
            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-foreground/70">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-foreground/70">
                <span>Shipping</span>
                <span className="text-secondary">Free</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-lg font-bold text-foreground">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout button */}
            <button className="w-full py-3 bg-gradient-to-r from-secondary to-accent rounded-lg text-primary font-semibold hover:shadow-lg hover:shadow-secondary/30 transition-all">
              Checkout
            </button>

            {/* Continue shopping */}
            <button
              onClick={onClose}
              className="w-full py-3 border border-white/10 rounded-lg text-foreground font-semibold hover:bg-white/5 transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

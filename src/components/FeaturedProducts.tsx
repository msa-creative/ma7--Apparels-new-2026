'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PremiumProductCard from './PremiumProductCard';

gsap.registerPlugin(ScrollTrigger);

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Leather Satchel',
    category: 'Bags',
    price: 189.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012229-Si3gWT2v05axfnHYdUmqC8zmx9Z2AG.jpeg',
    badge: 'BESTSELLER',
    colors: ['#1a1511', '#c9a85d']
  },
  {
    id: '2',
    name: 'Classic Baseball Cap',
    category: 'Caps',
    price: 45.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012334-MX8urWmkVySJFermlzwHWG14jHkO2t.jpeg',
    badge: 'NEW',
    colors: ['#1a1511', '#2c5aa0', '#c41e3a']
  },
  {
    id: '3',
    name: 'Leather Belt Collection',
    category: 'Accessories',
    price: 79.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012341%20%281%29-D2Cnyx87ZrbTpyhesTX2CQq3ZTml6Y.jpeg',
    colors: ['#1a1511', '#6b4423', '#c9a85d']
  },
  {
    id: '4',
    name: 'Signature T-Shirt',
    category: 'Apparel',
    price: 49.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012344-E8z7rA91KkDjCVMC1UWTdXijrbl0wF.jpeg',
    colors: ['#1a1511', '#ffffff']
  },
  {
    id: '5',
    name: 'Cargo Utility Pants',
    category: 'Bottoms',
    price: 99.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012226-01jlB27NMPulFYkUjW8vbh3BxVsJp4.jpeg',
    colors: ['#1a1511']
  },
  {
    id: '6',
    name: 'Premium Duffle Bag',
    category: 'Bags',
    price: 249.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012228-Rc26aXmsNGUAbSHCL7DwwzspZxpauI.jpeg',
    badge: 'LUXURY',
    colors: ['#1a1511']
  },
  {
    id: '7',
    name: 'Oversized Hoodie',
    category: 'Apparel',
    price: 129.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012227-306SuSuvh4ZpnUV2Um9DWK0ctsRWDG.jpeg',
    colors: ['#1a1511']
  },
  {
    id: '8',
    name: 'Tailored Trousers',
    category: 'Bottoms',
    price: 129.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012224-F4BkHYVDS0E7njJu5mt2DRkphHjL3x.jpeg',
    colors: ['#3a3a3a']
  }
];

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate title
    gsap.from('.featured-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: 'power3.out',
    });

    // Animate product cards with stagger
    productsRef.current.forEach((product, index) => {
      gsap.from(product, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        duration: 0.8,
        opacity: 0,
        y: 40,
        rotationX: 5,
        delay: index * 0.08,
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
          <p className="featured-title text-secondary text-sm md:text-base font-semibold tracking-[0.2em] mb-4">
            CURATED
          </p>
          <h2 className="featured-title text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Featured Pieces
          </h2>
          <p className="featured-title text-foreground/60 text-base md:text-lg max-w-2xl mx-auto">
            Handpicked premium selections that define contemporary luxury and timeless craftsmanship
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                if (el) productsRef.current[index] = el;
              }}
            >
              <PremiumProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-gradient-to-r from-secondary to-accent text-primary font-semibold rounded-full hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 hover:scale-105">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
}

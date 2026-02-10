'use client';

import { useState } from 'react';
import PremiumHeader from '@/components/PremiumHeader';
import LoadingPage from '@/components/LoadingPage';
import PremiumHero from '@/components/PremiumHero';
import ShopByCategory from '@/components/ShopByCategory';
import FeaturedProducts from '@/components/FeaturedProducts';
import CustomerReviews from '@/components/CustomerReviews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="w-full bg-background">
      <LoadingPage />
      <PremiumHeader onCartClick={() => setIsCartOpen(true)} />
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div className="pt-0">
        <PremiumHero />
        <ShopByCategory />
        <FeaturedProducts />
        <CustomerReviews />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}

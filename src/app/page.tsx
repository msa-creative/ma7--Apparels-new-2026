import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandStory from '@/components/BrandStory';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-background">
      <Header />
      <div className="pt-20">
        <Hero />
        <FeaturedProducts />
        <BrandStory />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}

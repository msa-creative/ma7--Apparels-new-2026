import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-primary">
              Elevate Your <span className="text-secondary">Style</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Discover curated collections of premium apparel, accessories, and lifestyle essentials crafted for the modern individual.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Shop Collection
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-primary text-primary font-medium hover:bg-primary/5 transition-colors w-full sm:w-auto">
              Explore More
            </button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative h-96 md:h-full min-h-96 bg-muted rounded-sm flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Premium Product Showcase</p>
          </div>
        </div>
      </div>
    </section>
  );
}

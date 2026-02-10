import { CheckCircle2 } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-secondary uppercase tracking-widest">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Crafted for <span className="text-secondary">Purpose</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                MA7 Apparels was founded on the belief that quality and style shouldn't compromise on purpose. We create pieces designed for those who value authenticity, durability, and aesthetic excellence.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                'Premium Quality Materials',
                'Sustainable Manufacturing',
                'Timeless Design',
                'Customer First Approach'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Every piece in our collection tells a story of meticulous craftsmanship and attention to detail. From premium leather goods to essential apparel, we're committed to delivering products that transcend trends.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-96 md:h-full min-h-96 bg-background rounded-sm flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Brand Heritage Visual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

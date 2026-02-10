'use client';

import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <Mail size={32} className="text-secondary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">
            Stay Connected
          </h2>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new collections, and style inspiration delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 bg-primary-foreground text-primary placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-secondary text-primary font-medium hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>

          {isSubmitted && (
            <p className="text-primary-foreground/80 text-sm">
              Thank you! Check your email for exclusive offers.
            </p>
          )}

          <p className="text-xs text-primary-foreground/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

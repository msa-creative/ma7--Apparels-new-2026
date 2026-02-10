import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-serif font-bold">MA7</h3>
              <p className="text-xs tracking-widest text-primary-foreground/60">APPARELS</p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Premium fashion and accessories crafted with purpose and precision.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">All Products</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Apparel</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Accessories</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Sustainability</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/60">
              &copy; {currentYear} MA7 Apparels. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-primary-foreground/60">Accepted payments</span>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 border border-primary-foreground/30 rounded text-primary-foreground/60">Visa</span>
                <span className="text-xs px-2 py-1 border border-primary-foreground/30 rounded text-primary-foreground/60">MC</span>
                <span className="text-xs px-2 py-1 border border-primary-foreground/30 rounded text-primary-foreground/60">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

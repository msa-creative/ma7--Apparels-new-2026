import ProductCard from './ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Leather Satchel',
    category: 'Bags',
    price: 189.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012229-Si3gWT2v05axfnHYdUmqC8zmx9Z2AG.jpeg',
    colors: ['#1a1511', '#c9a85d']
  },
  {
    id: '2',
    name: 'Classic Baseball Cap',
    category: 'Caps',
    price: 45.00,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Use_the_uploaded_2k_202602012334-MX8urWmkVySJFermlzwHWG14jHkO2t.jpeg',
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
  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium text-secondary uppercase tracking-widest mb-4">
            New Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium pieces that define contemporary style and quality craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-10 py-4 border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

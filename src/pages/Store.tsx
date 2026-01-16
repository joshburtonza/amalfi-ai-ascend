import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Loader2, Package } from 'lucide-react';
import StoreHeader from '@/components/store/StoreHeader';
import ProductCard from '@/components/store/ProductCard';
import { fetchProducts, ShopifyProduct } from '@/lib/shopify';
import Footer from '@/components/Footer';

const Store: React.FC = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch only digital products
        const allProducts = await fetchProducts(50, 'product_type:"Digital Products"');
        setProducts(allProducts);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Digital Products | Amalfi AI</title>
        <meta name="description" content="Premium digital playbooks and guides for AI-powered business automation." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex min-h-screen flex-col bg-background">
        <StoreHeader />

        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-hero py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-glow opacity-50" />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Digital <span className="text-gradient">Products</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Premium playbooks and implementation guides to help you build AI-powered automation systems for your business.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="flex-1 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-destructive">{error}</p>
              </div>
            ) : products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Package className="mb-4 h-16 w-16 text-muted-foreground/50" />
                <p className="text-lg text-muted-foreground">No products available</p>
                <p className="mt-1 text-sm text-muted-foreground/70">Check back soon for new releases</p>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {products.length} product{products.length !== 1 ? 's' : ''} available
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.node.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Store;

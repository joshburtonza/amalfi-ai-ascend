import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Loader2, FileText } from 'lucide-react';
import { useCartStore, ShopifyProduct } from '@/stores/cartStore';
import { toast } from 'sonner';

interface ProductCardProps {
  product: ShopifyProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  
  const { node } = product;
  const variant = node.variants.edges[0]?.node;
  const image = node.images.edges[0]?.node;
  const price = variant?.price || node.priceRange.minVariantPrice;

  const handleAddToCart = async () => {
    if (!variant) return;
    
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });
    
    toast.success('Added to cart', {
      description: node.title,
      position: 'top-center',
    });
  };

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <FileText className="h-16 w-16 text-muted-foreground/50" />
            </div>
          )}
          
          {/* Price Badge */}
          <div className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur-sm">
            <span className="text-sm font-bold text-primary">
              R{parseFloat(price.amount).toFixed(0)}
            </span>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="space-y-3 p-5">
          <h3 className="line-clamp-2 text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
            {node.title}
          </h3>
          
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {node.description}
          </p>
          
          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={isLoading || !variant?.availableForSale}
            className="w-full gap-2"
            variant="gradient"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

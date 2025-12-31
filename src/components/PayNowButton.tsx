import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { getOfferById } from '@/config/offers';
import { createDirectCheckout } from '@/lib/shopify';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface PayNowButtonProps {
  offerId: string;
  variant?: 'default' | 'outline' | 'gradient' | 'glass' | 'premium';
  size?: 'default' | 'sm' | 'lg' | 'xl';
  className?: string;
  customCta?: string;
}

const PayNowButton: React.FC<PayNowButtonProps> = ({
  offerId,
  variant = 'gradient',
  size = 'lg',
  className = '',
  customCta,
}) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const offer = getOfferById(offerId);

  const handleClick = async () => {
    if (!offer) {
      toast({
        title: 'Offer not found',
        description: 'This offer is currently unavailable.',
        variant: 'destructive',
      });
      return;
    }

    if (!offer.shopifyVariantId) {
      toast({
        title: 'Coming Soon',
        description: 'Payment processing will be available shortly. Please contact us for now.',
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create checkout via Shopify Storefront API
      const checkoutUrl = await createDirectCheckout(offer.shopifyVariantId);
      
      if (checkoutUrl) {
        // Open checkout in new tab
        window.open(checkoutUrl, '_blank');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: 'Checkout Error',
        description: 'Unable to create checkout. Please try again or contact us.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!offer) {
    return null;
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        customCta || offer.cta
      )}
    </Button>
  );
};

export default PayNowButton;

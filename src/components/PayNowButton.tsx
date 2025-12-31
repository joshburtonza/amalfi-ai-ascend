import React from 'react';
import { Button } from '@/components/ui/button';
import { getOfferById, Offer } from '@/config/offers';
import { useToast } from '@/hooks/use-toast';

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
  const offer = getOfferById(offerId);

  const handleClick = () => {
    if (!offer) {
      toast({
        title: 'Offer not found',
        description: 'This offer is currently unavailable.',
        variant: 'destructive',
      });
      return;
    }

    if (!offer.checkoutUrl) {
      toast({
        title: 'Coming Soon',
        description: 'Payment processing will be available shortly. Please contact us for now.',
      });
      return;
    }

    // Build URL with UTM parameters
    const utmParams = new URLSearchParams({
      utm_source: 'amalfiai.com',
      utm_medium: 'cta',
      utm_campaign: `offer_${offerId}`,
    });

    const checkoutUrlWithUtm = `${offer.checkoutUrl}${offer.checkoutUrl.includes('?') ? '&' : '?'}${utmParams.toString()}`;

    // Redirect to Shopify checkout
    window.location.href = checkoutUrlWithUtm;
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
    >
      {customCta || offer.cta}
    </Button>
  );
};

export default PayNowButton;

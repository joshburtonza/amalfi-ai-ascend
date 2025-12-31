import { toast } from 'sonner';

// Shopify Storefront API configuration
const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'amalfi-ai-ascend-cqksi.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = 'da6fbc5d8501627713cbf3d17a13d9c3';

// GraphQL mutation for cart creation
const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Storefront API helper function
export async function storefrontApiRequest(query: string, variables: Record<string, unknown> = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (response.status === 402) {
    toast.error('Shopify: Payment required', {
      description: 'Shopify API access requires an active billing plan.',
    });
    return null;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(`Error calling Shopify: ${data.errors.map((e: { message: string }) => e.message).join(', ')}`);
  }

  return data;
}

// Create checkout with a single variant
export async function createDirectCheckout(variantId: string, quantity: number = 1): Promise<string | null> {
  try {
    const cartData = await storefrontApiRequest(CART_CREATE_MUTATION, {
      input: {
        lines: [
          {
            quantity,
            merchandiseId: variantId,
          },
        ],
      },
    });

    if (!cartData) return null;

    if (cartData.data.cartCreate.userErrors.length > 0) {
      throw new Error(
        `Cart creation failed: ${cartData.data.cartCreate.userErrors.map((e: { message: string }) => e.message).join(', ')}`
      );
    }

    const cart = cartData.data.cartCreate.cart;

    if (!cart.checkoutUrl) {
      throw new Error('No checkout URL returned from Shopify');
    }

    // Add channel parameter for proper checkout access
    const url = new URL(cart.checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    
    return url.toString();
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
}

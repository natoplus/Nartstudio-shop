# Nartstudio Shop

The storefront is currently a preview catalogue. The named items and collections are concepts, not confirmed products; no prices, inventory, fulfillment, payment or order records are configured.

The preview bag is a local shortlist saved in the current browser. It is not a cart for purchasing and is not sent to a server. Checkout is intentionally disabled until product, price, inventory, shipping, tax and payment details are approved and configured.

## Development

```bash
npm install
npm run dev
```

Before enabling sales, connect a configured product catalogue and payment provider (for example, Stripe), and verify fulfillment, taxes, customer support and applicable store policies. Do not expose secret payment keys in client-side environment variables.

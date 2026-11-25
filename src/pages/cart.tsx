import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { useCart } from '../context/CartContext'
import { products } from '../lib/products'

export default function PreviewBag() {
  const { items, ready, message, removeItem, clearItems } = useCart()
  const selected = products.filter(product => items.includes(product.slug))
  return <SiteLayout><Head><title>Preview bag | Nartstudio Shop</title><meta name="description" content="Review locally saved Nartstudio product concepts. This is not a purchase or order." /></Head>
    <main id="main-content" className="content-page cart-page"><p className="eyebrow"><Link href="/">SHOP PREVIEW</Link> / YOUR BAG</p><h1>Your ideas,<br /><em>in one place.</em></h1><p className="lede">This bag is a local shortlist of product concepts, not a cart for purchasing. Nothing is reserved or ordered.</p><p className="storage-message" role="status" aria-live="polite">{ready ? message : 'Loading preview bag…'}</p>
      {selected.length ? <><div className="cart-list">{selected.map(product => <article key={product.slug}><span>{product.label}</span><div><small>{product.category}</small><h2>{product.name}</h2><p>Preview concept · not available to purchase</p></div><button type="button" onClick={() => removeItem(product.slug)} aria-label={`Remove ${product.name} from preview bag`}>Remove</button></article>)}</div><button className="clear-button" type="button" onClick={clearItems}>Clear shortlist</button></> : <div className="empty-bag"><h2>No concepts saved yet.</h2><p>Browse the catalogue and add concepts to keep a local shortlist.</p><Link className="button-primary" href="/#drops">Browse preview drops <span aria-hidden="true">↗</span></Link></div>}
      <section className="checkout-notice"><strong>Checkout is not configured.</strong><p>There is no payment, shipping, inventory or order service connected. This site cannot accept or process purchases.</p><button type="button" disabled aria-disabled="true">Checkout unavailable</button></section>
    </main>
  </SiteLayout>
}

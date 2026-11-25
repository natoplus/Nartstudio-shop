import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { collections } from '../lib/products'

export default function Collections() {
  return <SiteLayout><Head><title>Collections | Nartstudio Shop</title><meta name="description" content="Browse Nartstudio shop collection directions. These are concepts, not available products." /></Head>
    <main id="main-content" className="content-page"><p className="eyebrow"><Link href="/">SHOP PREVIEW</Link> / COLLECTIONS</p><h1>Worlds, in<br /><em>material form.</em></h1><p className="lede">These are collection directions, not live product listings. Formats, prices and release dates have not been confirmed.</p><div className="collection-grid collection-page-grid">{collections.map((collection, index) => <article key={collection.name}><span>{String(index + 1).padStart(2, '0')} / {collection.category}</span><h2>{collection.name}</h2><p>{collection.description}</p><small>CONCEPT ONLY · NO RELEASE DATE</small></article>)}</div><aside className="checkout-notice"><strong>Purchase flow is not available.</strong><p>Product setup, pricing, fulfillment and payment processing must be completed before orders can be placed.</p></aside></main>
  </SiteLayout>
}

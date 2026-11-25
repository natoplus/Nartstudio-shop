import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { useCart } from '../context/CartContext'
import { collections, products } from '../lib/products'

export default function ShopHome() {
  const { addItem, items } = useCart()
  return <SiteLayout><Head><title>Nartstudio Shop | Preview catalogue</title><meta name="description" content="Explore Nartstudio collection concepts. Product availability and checkout are not yet configured." /></Head>
    <main id="main-content">
      <section className="hero"><div className="hero-copy"><p className="eyebrow"><span /> THE NARTSTUDIO SHOP / PREVIEW</p><h1>Objects from<br /><em>other worlds.</em></h1><p className="lede">A first look at ideas for the studio’s creative universe. This catalogue is a preview only—there are no prices, stock claims or orders yet.</p><Link className="button-primary" href="#drops">Explore preview drops <span aria-hidden="true">↓</span></Link><p className="availability">CHECKOUT NOT CONFIGURED · NOTHING HERE IS FOR SALE</p></div><div className="hero-art" aria-label="Abstract editorial artwork"><span>CATALOGUE / 001</span><strong>Future<br /><em>objects.</em></strong><i>NS / 2026</i></div></section>
      <section id="collections" className="section"><div className="section-heading"><div><p className="eyebrow">COLLECTION DIRECTIONS</p><h2>Made for every world.</h2></div><Link href="/collections">Explore all directions <span aria-hidden="true">↗</span></Link></div><div className="collection-grid">{collections.map((collection, index) => <article key={collection.name}><span>{String(index + 1).padStart(2, '0')} / {collection.category}</span><h3>{collection.name}</h3><p>{collection.description}</p></article>)}</div></section>
      <section id="drops" className="section drops"><div className="section-heading"><div><p className="eyebrow">CONCEPTS / NOT FOR SALE</p><h2>Preview drops.</h2></div><p>Bag selections are saved locally as a shortlist. They are not an order.</p></div><div className="product-grid">{products.map(product => <article className="product-card" key={product.slug}><Link className="product-art" href={`/products/${product.slug}`} aria-label={`View ${product.name} preview`}><span>{product.label} / PREVIEW</span><i>NS</i><b aria-hidden="true">↗</b></Link><div className="product-meta"><small>{product.category}</small><h3>{product.name}</h3><p>Concept · details not announced</p><button type="button" onClick={() => addItem(product.slug)}>{items.includes(product.slug) ? 'Added to preview bag' : 'Add to preview bag'}</button></div></article>)}</div></section>
    </main>
  </SiteLayout>
}

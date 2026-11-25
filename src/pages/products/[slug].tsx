import Head from 'next/head'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import SiteLayout from '../../components/SiteLayout'
import { useCart } from '../../context/CartContext'
import { products, type ProductPreview } from '../../lib/products'

export default function ProductPreviewPage({ product }: { product: ProductPreview }) {
  const { addItem, items } = useCart()
  return <SiteLayout><Head><title>{product.name} | Nartstudio Shop Preview</title><meta name="description" content={`${product.description} This preview is not for sale.`} /></Head>
    <main id="main-content" className="product-page"><p className="eyebrow"><Link href="/">SHOP PREVIEW</Link> / {product.category}</p><div className="product-detail"><div className="product-detail-art"><span>{product.label} / CONCEPT</span><i>NS</i></div><div className="product-detail-copy"><p className="eyebrow">NOT FOR SALE</p><h1>{product.name}</h1><p>{product.description}</p><ul><li>Price: not announced</li><li>Availability: not confirmed</li><li>Checkout: not configured</li></ul><button className="button-primary" type="button" onClick={() => addItem(product.slug)}>{items.includes(product.slug) ? 'Saved to preview bag' : 'Save to preview bag'}</button><p className="fine-print">Saving this preview creates a local shortlist only. It does not place an order or reserve an item.</p></div></div></main>
  </SiteLayout>
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: products.map(product => ({ params: { slug: product.slug } })), fallback: false })
export const getStaticProps: GetStaticProps<{ product: ProductPreview }> = async ({ params }) => {
  const product = products.find(item => item.slug === params?.slug)
  return product ? { props: { product } } : { notFound: true }
}

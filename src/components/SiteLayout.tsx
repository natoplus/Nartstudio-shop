import Link from 'next/link'
import type { ReactNode } from 'react'
import { useCart } from '../context/CartContext'
import ParallaxAtmosphere from './ParallaxAtmosphere'

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { items } = useCart()
  return <div className="shop-site"><ParallaxAtmosphere />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><Link className="wordmark" href="/"><img src="/brand-mark.svg" alt="" />NARTSTUDIO <span>SHOP</span></Link><nav aria-label="Main navigation"><Link href="/collections">Collections</Link><Link href="/#drops">Preview drops</Link><Link href="/cart" aria-label={`Preview bag, ${items.length} items`}>Bag <span className="bag-count">{items.length}</span></Link></nav></header>
    {children}
    <footer className="site-footer"><p>PREVIEW CATALOGUE / NO CHECKOUT OR ORDERS</p><p>© NARTSTUDIO · <a href="https://nartstudio.com">Visit the studio ↗</a></p></footer>
  </div>
}

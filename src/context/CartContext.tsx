import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { products } from '../lib/products'

const storageKey = 'nartstudio-shop-preview-bag-v1'
type CartContextValue = {
  items: string[]
  ready: boolean
  message: string
  addItem: (slug: string) => void
  removeItem: (slug: string) => void
  clearItems: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([])
  const [ready, setReady] = useState(false)
  const [storageAvailable, setStorageAvailable] = useState(true)
  const [message, setMessage] = useState('Loading preview bag…')

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey)
      if (saved) {
        const parsed: unknown = JSON.parse(saved)
        if (!Array.isArray(parsed) || parsed.some(item => typeof item !== 'string' || !products.some(product => product.slug === item))) {
          throw new Error('Saved preview bag has an unexpected format.')
        }
        setItems([...new Set(parsed)])
      }
    } catch (error) {
      console.error('Could not restore the shop preview bag:', error)
      setStorageAvailable(false)
      setMessage('Local storage is unavailable or the saved bag could not be read. Your selections will remain only while this page is open.')
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready || !storageAvailable) return
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(items))
      setMessage('Preview selections are saved on this device only.')
    } catch (error) {
      console.error('Could not save the shop preview bag:', error)
      setStorageAvailable(false)
      setMessage('The browser could not save your preview bag. Selections remain while this page is open.')
    }
  }, [items, ready, storageAvailable])

  function addItem(slug: string) {
    if (!products.some(product => product.slug === slug)) {
      throw new Error(`Unknown shop preview item: ${slug}`)
    }
    setItems(current => current.includes(slug) ? current : [...current, slug])
  }

  function removeItem(slug: string) {
    setItems(current => current.filter(item => item !== slug))
  }

  function clearItems() {
    setItems([])
  }

  return <CartContext.Provider value={{ items, ready, message, addItem, removeItem, clearItems }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider.')
  return context
}

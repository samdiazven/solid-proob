import { createSignal } from "solid-js";
import { createMutable } from "solid-js/store";
import type { IProducts } from "../interfaces/Products";


interface Store {
  products: IProducts[]
  addToCart: (product: IProducts) => void
  removeFromCart: (productId: IProducts['id']) => void
  total: number
}

export const cart = createMutable<Store>({
  products: JSON.parse(window.localStorage.getItem('products') || '[]'),
  addToCart(product: IProducts) {
    const foundProduct = this.products.find(item => item.id === product.id)
    if (foundProduct) {
      alert('product already exists')
      return
    }
    this.products.push(product)
    window.localStorage.setItem('products', JSON.stringify(this.products))
  },
  removeFromCart(productId: IProducts['id']) {
    this.products = this.products.filter(item => item.id !== productId)
  },
  get total(): number {
    return this.products.reduce((total, product) => total + product.price, 0)
  }

})

export const [search, setSearch] = createSignal('')

export const handleSearch = (value: string) => {
  setSearch(value)
}


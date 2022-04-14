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
  products: [],
  addToCart(product: IProducts) {
    this.products.push(product)
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


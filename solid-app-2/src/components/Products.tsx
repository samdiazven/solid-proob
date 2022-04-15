import { IProducts } from "../interfaces/Products";
import Product from "./Product";
import { Component, createMemo, createResource, For } from "solid-js";
import { search } from "../store";


const Products: Component = () => {
  const [products] = createResource<IProducts[]>(() => fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    , {
      initialValue: []
    })

  const filteredProducts = createMemo(() => {
    if (search().length === 0) return products()
    return products().filter(item => {
      return item.title.toLowerCase().includes(search().toLowerCase()) || item.description.toLowerCase().includes(search().toLowerCase())
    })
  })


  return (
    <section className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 grid-cols-1">
      <For each={filteredProducts()} fallback={<p>Loading.....</p>}>
        {(item) => (
          <Product product={item} />
        )}
      </For>

    </section>
  );
};

export default Products;

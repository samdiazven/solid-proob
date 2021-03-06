import React, { useEffect, useMemo, useState } from "react";
import type { FC } from "react";
import { IProducts } from "../interfaces/Products";
import Product from "./Product";

interface Props {
  addToCart: (product: IProducts) => void;
  search: string
}
const Products: FC<Props> = ({ addToCart, search }) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const filteredProducts = () => {
    if (search.length === 0) return products

    return products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
  }
  if (!products.length) {
    return <p>Loading.....</p>;
  }
  return (
    <section className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 grid-cols-1">
      {filteredProducts().map((item) => (
        <Product key={item.id} product={item} addToCart={addToCart} />
      ))}
    </section>
  );
};

export default Products;

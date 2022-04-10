import React, { FC, useMemo, useState } from "react";
import { IProducts } from "../interfaces/Products";

interface Props {
  cart: IProducts[];
  removeFromCart: (productId: IProducts["id"]) => void;
}

const Cart: FC<Props> = ({ cart, removeFromCart }) => {
  const total = useMemo(
    () => cart.reduce((acc, el) => acc + el.price, 0),
    [cart]
  );
  return (
    <ul className="absolute right-8 top-16 shadow-lg rounded-md bg-white w-80 p-6 border-b-2 border-b-teal-200">
      {cart.length > 0 &&
        cart.map((product, idx) => (
          <li
            key={idx}
            className="flex items-center p-2"
            onClick={() => removeFromCart(product.id)}
          >
            <figure className="mr-4">
              <img
                className="w-16 h-16 object-contain"
                src={product.image}
                alt={product.image}
              />
            </figure>
            <h6 className="text-md font-bold"> {product.title}</h6>
          </li>
        ))}
      <p>Total: ${total}</p>
    </ul>
  );
};

export default Cart;

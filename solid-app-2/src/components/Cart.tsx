import { Component, For } from "solid-js";
import { cart } from '../store'


const Cart: Component = () => {

  return (
    <ul className="absolute right-8 top-16 shadow-lg rounded-md bg-white w-80 p-6 border-b-2 border-b-teal-200">
      <For each={cart.products}>
        {(product) => (
          <li
            className="flex items-center p-2"
            onClick={() => cart.removeFromCart(product.id)}
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
        )}
      </For>

      <p>Total: ${cart.total}</p>
    </ul>
  );
};

export default Cart;

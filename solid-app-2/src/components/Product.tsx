import type { IProducts } from "../interfaces/Products";
import { useNavigate } from "solid-app-router";
import { Component } from "solid-js";
import { cart } from "../store";

interface Props {
  product: IProducts;
}

const Product: Component<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <article className="bg-white border-2 shadow-md rounded-lg p-4 flex flex-col justify-between">
      <h5 className="text-md font-semibold  text-ellipsis ">{props.product.title}</h5>
      <figure
        className="cursor-pointer"
        onClick={() => navigate(`/product/${props.product.id}`)}
      >
        <img
          className="object-contain w-24 h-24"
          src={props.product.image}
          alt={props.product.image}
        />
      </figure>
      <div className="flex justify-between p-2 items-center">
        <b className="text-xs font-extrabold mt-4">${props.product.price}</b>
        <button
          className="rounded-lg p-2 bg-teal-400 shadow-md"
          onClick={() => cart.addToCart(props.product)}
        >
          <img
            className="w-8 h-8 object-contain"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2Fdc8%2FXja%2Fdc8Xjangi.png&f=1&nofb=1"
            alt="cart-logo"
          />
        </button>
      </div>
    </article>
  );
};

export default Product;

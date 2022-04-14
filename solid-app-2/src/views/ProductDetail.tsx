import { useNavigate, useParams } from "solid-app-router";
import { Component, createResource, Show } from "solid-js";
import Product from "../components/Product";
import { IProducts } from "../interfaces/Products";

type Params = {
  productId: string;
};


const ProductDetail: Component = () => {
  const params = useParams<Params>();
  const navigate = useNavigate();
  const [product] = createResource<IProducts>(() =>
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
  )

  return (
    <div className="p-4">
      <Show when={product()} fallback={<p>Loading.....</p>}>
        <Product product={product()!} />
      </Show>
      <button
        className="rounded-lg bg-teal-300 text-black mt-4 fonr-bold p-4 self-end"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default ProductDetail;

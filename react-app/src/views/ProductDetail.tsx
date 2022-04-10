import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../components/Product";
import { IProducts } from "../interfaces/Products";

type Params = {
  productId: string;
};

interface Props {
  addToCart: (product: IProducts) => void;
}

const ProductDetail: FC<Props> = ({ addToCart }) => {
  const params = useParams<Params>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProducts>();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.productId]);

  if (!product) {
    return <p>Loading......</p>;
  }
  return (
    <div className="p-4">
      <Product product={product} addToCart={addToCart} />
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

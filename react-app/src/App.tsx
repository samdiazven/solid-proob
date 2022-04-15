import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { IProducts } from "./interfaces/Products";
import ProductDetail from "./views/ProductDetail";

function App() {
  const [cart, setCart] = useState<IProducts[]>([]);
  const [search, setSearch] = useState<string>('');

  const handleAddtoCart = (product: IProducts) => {
    const foundProduct = cart.find((item) => item.id === product.id);

    if (foundProduct) {
      alert("product already exist");
      return;
    }

    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (productId: IProducts["id"]) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleSearch = (value: string) => setSearch(value)

  return (
    <main className="max-w-4xl m-auto">
      <Navbar cart={cart} removeFromCart={handleRemoveFromCart} handleSearch={handleSearch} />
      <Router>
        <Routes>
          <Route path="/" element={<Products addToCart={handleAddtoCart} search={search} />} />
          <Route
            path="product/:productId"
            element={<ProductDetail addToCart={handleAddtoCart} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

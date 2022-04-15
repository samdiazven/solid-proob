import { Routes, Route, Router } from 'solid-app-router'
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductDetail from "./views/ProductDetail";


function App() {
  return (
    <main className="max-w-4xl m-auto">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route
            path="product/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

import { Routes, Route, Router } from 'solid-app-router'
import { createSignal } from 'solid-js';
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductDetail from "./views/ProductDetail";


function App() {
  const [search, setSearch] = createSignal('')

  const handleSearch = (value: string) => {
    setSearch(value)
  }


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

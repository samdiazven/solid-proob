import { Component, createSignal } from "solid-js";
import { cart, handleSearch } from "../store";
import Cart from "./Cart";


const Navbar: Component = () => {
  const [cartIsVisible, setCartIsVisible] = createSignal(false);
  return (
    <nav className="w-full bg-teal-400 flex justify-between items-center p-4 mr-6 mb-4 relative">
      <h3 className="font-mono font-bold text-2xl text-white cursor-pointer">
        E-COMMERCE
      </h3>
      <input
        className="p-2 flex-1 mx-4 max-w-md bg-white rounded-md"
        type="text"
        placeholder="search your product....."
        onKeyUp={(e) => handleSearch(e.currentTarget.value)}
      />
      <figure
        className="relative h-12 w-12 object-contain cursor-pointer"
        onClick={() => setCartIsVisible((prev) => !prev)}
      >
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2Fdc8%2FXja%2Fdc8Xjangi.png&f=1&nofb=1"
          alt="cart-logo"
        />
        <p className="absolute right-0 bottom-0 p-1 h-6">{cart.products.length}</p>
      </figure>
      {cartIsVisible() && cart.products.length > 0 && (
        <Cart />
      )}
    </nav>
  );
};

export default Navbar;

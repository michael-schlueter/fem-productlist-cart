import { useState } from "react";
import Cart from "./components/Cart";
import CartList from "./components/CartList";
import { CartItem } from "./types";

function App() {
  const [cartItems, setCartItems] = useState([
    {
      name: "Waffle with Berries",
      price: 6.5,
      quantity: 2,
    },
    {
      name: "Vanilla Bean Crème Brûlée",
      price: 7,
      quantity: 1,
    },
    {
      name: "Macaron Mix of Five",
      price: 8,
      quantity: 2,
    },
  ]);

  const addCartItem = (cartItem: CartItem) => {
    setCartItems([...cartItems, cartItem]);
  };

  return (
    <div className="bg-rose-50">
      <main className="flex flex-col gap-8 p-6">
        <CartList onAddCartItem={addCartItem} cartItems={cartItems} />
        <Cart cartItems={cartItems} />
      </main>
    </div>
  );
}

export default App;

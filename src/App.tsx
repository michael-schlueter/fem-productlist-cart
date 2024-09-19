import { useState } from "react";
import Cart from "./components/Cart";
import CartList from "./components/CartList";
import { CartItem } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addCartItem = (cartItem: CartItem) => {
    setCartItems([...cartItems, cartItem]);
  };

  const increaseItemQuantity = (cartItemName: string) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.name === cartItemName) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="bg-rose-50">
      <main className="flex flex-col gap-8 p-6">
        <CartList
          onAddCartItem={addCartItem}
          cartItems={cartItems}
          onIncreaseItemQuantity={increaseItemQuantity}
        />
        <Cart cartItems={cartItems} />
      </main>
    </div>
  );
}

export default App;

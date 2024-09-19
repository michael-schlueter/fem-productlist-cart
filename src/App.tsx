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

  const decreaseItemQuantity = (cartItemName: string) => {
    setCartItems(
      cartItems
        .map((item) => {
          if (item.name === cartItemName) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0) // filter out items with quantity 0
    );
  };

  const removeItemFromCart = (cartItemName: string) => {
    setCartItems(cartItems.filter((item) => item.name !== cartItemName));
  };

  return (
    <div className="bg-rose-50">
      <main className="flex flex-col gap-8 p-6 sm:p-10">
        <CartList
          onAddCartItem={addCartItem}
          cartItems={cartItems}
          onIncreaseItemQuantity={increaseItemQuantity}
          onDecreaseItemQuantity={decreaseItemQuantity}
        />
        <Cart cartItems={cartItems} onRemoveItemFromCart={removeItemFromCart} />
      </main>
    </div>
  );
}

export default App;

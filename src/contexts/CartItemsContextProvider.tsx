import { CartItem } from "@/types";
import { createContext, useState } from "react";

type CartItemsContext = {
  cartItems: CartItem[];
  addCartItem: (cartItem: CartItem) => void;
  increaseItemQuantity: (cartItemName: string) => void;
  decreaseItemQuantity: (cartItemName: string) => void;
  removeItemFromCart: (cartItemName: string) => void;
  startNewOrder: () => void;
};

export const CartItemsContext = createContext<CartItemsContext | null>(null);

export default function CartItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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

  const startNewOrder = () => {
    setCartItems([]);
    window.scrollTo({ top: 0 });
  };

  const contextValue = {
    cartItems,
    addCartItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
    startNewOrder,
  };

  return (
    <CartItemsContext.Provider value={contextValue}>
      {children}
    </CartItemsContext.Provider>
  );
}

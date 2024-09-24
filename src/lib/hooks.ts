import { CartItemsContext } from "@/contexts/CartItemsContextProvider";
import { useContext } from "react";

export function useCartItemsContext() {
  const context = useContext(CartItemsContext);

  if (!context) {
    throw new Error(
      "useCartItemsContext must be used within an CartItemsContextProvider."
    );
  }

  return context;
}

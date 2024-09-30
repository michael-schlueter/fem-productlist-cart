import { useCartItemsContext } from "@/lib/hooks";
import { formatPrice } from "@/lib/utils";
import { useMemo } from "react";

export default function CartPrice() {
  const { cartItems } = useCartItemsContext();

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
  }, [cartItems]);

  return (
    <div className="mt-6 flex justify-between items-center">
      <p className="text-sm text-rose-900">Order Total</p>
      <p
        className="text-xl text-rose-900 font-bold"
        data-testid="cart-total-price"
      >
        ${formatPrice(totalPrice)}
      </p>
    </div>
  );
}

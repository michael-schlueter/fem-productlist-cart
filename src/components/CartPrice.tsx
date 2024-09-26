import { useCartItemsContext } from "@/lib/hooks";
import { formatPrice } from "@/lib/utils";

export default function CartPrice() {
  const { cartItems } = useCartItemsContext();

  return (
    <div className="mt-6 flex justify-between items-center">
      <p className="text-sm text-rose-900">Order Total</p>
      <p className="text-xl text-rose-900 font-bold" data-testid="cart-total-price">
        $
        {formatPrice(
          cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
          )
        )}
      </p>
    </div>
  );
}

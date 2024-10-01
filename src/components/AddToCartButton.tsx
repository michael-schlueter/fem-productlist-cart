import { useCartItemsContext } from "@/lib/hooks";
import { CartItem } from "@/types";
interface AddToCartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cartItem: Omit<CartItem, "quantity">;
}

export default function AddToCartButton({
  cartItem,
  ...props
}: AddToCartButtonProps) {
  const { addCartItem } = useCartItemsContext();

  return (
    <button
      // -mt-38 to offset gap and 1/2 height of button
      className="w-40 h-[44px] bg-white rounded-full border border-rose-400 hover:border-red-500 focus-visible:border-red-500 focus:outline-none text-rose-900 hover:text-red-500 focus-visible:text-red-500 focus-visible:ring-2 focus-visible:ring-red-500 text-sm font-semibold flex gap-2 items-center justify-center self-center p-3 -mt-[38px] transition duration-200"
      aria-label={`Add ${cartItem.name} to cart`}
      onClick={() =>
        addCartItem({
          ...cartItem,
          quantity: 1,
        })
      }
      {...props}
    >
      <img
        src="./assets/images/icon-add-to-cart.svg"
        alt="Add to cart Icon"
      />
      Add to Cart
    </button>
  );
}

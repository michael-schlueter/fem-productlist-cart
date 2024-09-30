import { useCartItemsContext } from "@/lib/hooks";
import { formatPrice } from "@/lib/utils";

export default function CartList() {
  const { cartItems, removeCartItem } = useCartItemsContext();

  return (
    <ul className="flex flex-col" aria-label="Cart list">
      {cartItems.map((cartItem, index) => (
        <li
          key={index}
          className="flex items-center justify-between cart-item py-4 border-b-[1px] border-b-rose-100"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-rose-900">{cartItem.name}</h3>
            <div className="flex gap-2 text-sm">
              <p className="text-red-500 font-bold">{cartItem.quantity}x</p>
              <p className="text-rose-500">@{formatPrice(cartItem.price)}</p>
              <p className="text-rose-500 font-bold">
                ${formatPrice(cartItem.quantity * cartItem.price)}
              </p>
            </div>
          </div>
          <button
            onClick={() => removeCartItem(cartItem.name)}
            className="group w-5 h-5 flex justify-center items-center rounded-full border border-rose-500 hover:border-rose-900 focus:outline-none focus-visible:border-rose-900 transition duration-200"
            aria-label={`Remove ${cartItem.name} from cart`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                className="group-hover:fill-rose-900 group-focus-visible:fill-rose-900 transition duration-200"
                fill="#CAAFA7"
                d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}

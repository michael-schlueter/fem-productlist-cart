import { CartItem } from "../types";

interface AddToCartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cartItem: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
  onAddCartItem: (cartItem: CartItem) => void;
}

export default function AddToCartButton({
  cartItem,
  onAddCartItem,
  ...props
}: AddToCartButtonProps) {
  return (
    // -mt-38 to offset gap and 1/2 height of button
    <button
      className="w-40 h-[44px] bg-white rounded-full border border-rose-400 hover:border-red-500 focus-visible:border-red-500 text-rose-900 hover:text-red-500 focus-visible:text-red-500 text-sm font-bold flex gap-2 items-center justify-center self-center p-3 -mt-[38px]"
      onClick={() =>
        onAddCartItem({
          name: cartItem.name,
          price: cartItem.price,
          quantity: 1,
        })
      }
      {...props}
    >
      <img src="./public/assets/images/icon-add-to-cart.svg" alt="Cart Icon" />
      Add to Cart
    </button>
  );
}

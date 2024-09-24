import { CartItem } from "../types";

type SelectQuantityButtonProps = {
  onIncreaseItemQuantity: (cartItemName: string) => void;
  onDecreaseItemQuantity: (cartItemName: string) => void;
  cartItem: CartItem;
};

export default function SelectQuantityButton({
  onIncreaseItemQuantity,
  onDecreaseItemQuantity,
  cartItem,
}: SelectQuantityButtonProps) {
  return (
    // -mt-38 to offset gap and 1/2 height of button
    <div className="w-40 h-[44px] rounded-full bg-red-500 text-sm text-white font-bold flex items-center justify-between p-3 cursor-auto self-center -mt-[38px]">
      <button
        onClick={() => onDecreaseItemQuantity(cartItem.name)}
        className="group w-5 h-5 border border-white hover:bg-white rounded-full flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path
            fill="#fff"
            d="M0 .375h10v1.25H0V.375Z"
            className="group-hover:fill-red-500"
          />
        </svg>
      </button>
      {cartItem.quantity}
      <button
        onClick={() => onIncreaseItemQuantity(cartItem.name)}
        className="group w-5 h-5 border border-white hover:bg-white rounded-full flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            className="group-hover:fill-red-500"
          />
        </svg>
      </button>
    </div>
  );
}

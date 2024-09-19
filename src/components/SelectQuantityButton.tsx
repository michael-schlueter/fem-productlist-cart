import { CartItem } from "../types";

type SelectQuantityButtonProps = {
  onIncreaseItemQuantity: (cartItemName: string) => void;
  cartItem: CartItem;
};

export default function SelectQuantityButton({
  onIncreaseItemQuantity,
  cartItem,
}: SelectQuantityButtonProps) {
  return (
    // -mt-38 to offset gap and 1/2 height of button
    <div className="w-40 h-[44px] rounded-full bg-red-500 text-sm text-white font-bold flex items-center justify-between p-3 cursor-auto self-center -mt-[38px]">
      <button className="w-5 h-5 border border-white rounded-full flex items-center justify-center">
        <img
          src="./public/assets/images/icon-decrement-quantity.svg"
          alt="decrement quantity"
        />
      </button>
      {cartItem.quantity}
      <button
        onClick={() => onIncreaseItemQuantity(cartItem.name)}
        className="w-5 h-5 border border-white rounded-full flex items-center justify-center"
      >
        <img
          src="./public/assets/images/icon-increment-quantity.svg"
          alt="increment quantity"
        />
      </button>
    </div>
  );
}

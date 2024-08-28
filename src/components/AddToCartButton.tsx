export default function AddToCartButton() {
  return (
    <button className="w-40 h-[44px] rounded-full border border-rose-400 hover:border-red-500 focus-visible:border-red-500 text-rose-900 hover:text-red-500 focus-visible:text-red-500 text-sm font-bold flex gap-2 items-center justify-center p-3">
      <img src="./public/assets/images/icon-add-to-cart.svg" alt="Cart Icon" />
      Add to Cart
    </button>
  );
}



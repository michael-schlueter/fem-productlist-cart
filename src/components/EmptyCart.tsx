export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="w-32 h-32">
        <img
          src="./assets/images/illustration-empty-cart.svg"
          alt="Empty shopping cart"
        />
      </div>
      <p className="text-sm text-center font-semibold text-rose-500">
        Your added items will appear here
      </p>
    </div>
  );
}

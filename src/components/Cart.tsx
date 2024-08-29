export default function Cart() {
  return (
    <section className="bg-white p-6 flex flex-col gap-6">
      <h3 className="text-xl font-bold text-red-500">Your Cart (0)</h3>
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="w-32 h-32">
          <img
            src="./public/assets/images/illustration-empty-cart.svg"
            alt=""
          />
        </div>
        <p className="text-sm text-center font-bold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </section>
  );
}

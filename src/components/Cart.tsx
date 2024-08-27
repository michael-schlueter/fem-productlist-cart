export default function Cart() {
  return (
    <section>
      <h3 className="text-xl font-bold text-red">Your Cart (0)</h3>
      <div>
        <img src="./public/assets/images/illustration-empty-cart.svg" alt="" />
        <p className="text-sm font-bold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </section>
  );
}

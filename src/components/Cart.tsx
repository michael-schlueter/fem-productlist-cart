import CartList from "@/components/CartList";
import CartPrice from "@/components/CartPrice";
import EmptyCart from "@/components/EmptyCart";
import OrderConfirmation from "@/components/OrderConfirmation";
import { useCartItemsContext } from "@/lib/hooks";

export default function Cart() {
  const { cartItems } = useCartItemsContext();

  return (
    <section>
      <div className="bg-white p-6 flex flex-col gap-6 rounded-xl">
        <h3 className="text-xl font-bold text-red-500">
          Your Cart ({cartItems.length})
        </h3>
        {cartItems.length > 0 ? (
          <div>
            <CartList />
            <CartPrice />
            <div className="flex mt-6 mb-6 py-4 items-center justify-center gap-2 bg-rose-50">
              <img
                src="./assets/images/icon-carbon-neutral.svg"
                alt="carbon neutral icon"
              />
              <p className="text-sm text-rose-900">
                This is a <span className="font-semibold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <OrderConfirmation />
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
}

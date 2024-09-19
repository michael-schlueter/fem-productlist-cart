import { formatPrice } from "../utils";
import Button from "./Button";

type CartProps = {
  cartItems: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

export default function Cart({ cartItems }: CartProps) {
  return (
    <section className="bg-white p-6 flex flex-col gap-6">
      <h3 className="text-xl font-bold text-red-500">
        Your Cart ({cartItems.length})
      </h3>
      {cartItems.length > 0 ? (
        <div>
          <ul className="flex flex-col">
            {cartItems.map((cartItem, index) => (
              <li key={index} className="flex items-center justify-between cart-item py-4 border-b-[1px] border-b-rose-100">
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-bold text-rose-900">
                    {cartItem.name}
                  </h3>
                  <div className="flex gap-2 text-sm">
                    <p className="text-red-500 font-bold">
                      {cartItem.quantity}x
                    </p>
                    <p className="text-rose-500">
                      @{formatPrice(cartItem.price)}
                    </p>
                    <p className="text-rose-500 font-bold">
                      ${formatPrice(cartItem.quantity * cartItem.price)}
                    </p>
                  </div>
                </div>
                <div className="w-5 h-5 flex justify-center items-center rounded-full border border-rose-500">
                  <img src="./public/assets/images/icon-remove-item.svg" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-rose-900">Order Total</p>
            <p className="text-xl text-rose-900 font-bold">
              $
              {formatPrice(
                cartItems.reduce(
                  (total, cartItem) =>
                    total + cartItem.quantity * cartItem.price,
                  0
                )
              )}
            </p>
          </div>
          <div className="flex mt-6 mb-6 py-4 items-center justify-center gap-2 bg-rose-50">
            <img src="./public/assets/images/icon-carbon-neutral.svg" />
            <p className="text-sm text-rose-900">
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <Button>Confirm Order</Button>
        </div>
      ) : (
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
      )}
    </section>
  );
}

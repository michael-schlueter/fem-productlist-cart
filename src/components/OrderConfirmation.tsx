import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/Button";
import { formatPrice } from "@/lib/utils";
import { useCartItemsContext } from "@/lib/hooks";

export default function OrderConfirmation() {
  const { cartItems, startNewOrder } = useCartItemsContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Confirm Order</Button>
      </DialogTrigger>
      <DialogContent className="grid gap-8 p-6 pt-10 border-none rounded-t-xl">
        <div>
          <img alt="Order confirmed" src="./public/assets/images/icon-order-confirmed.svg" />
          <DialogTitle className="text-2xl text-rose-900 font-bold mt-6">
            Order Confirmed
          </DialogTitle>
          <DialogDescription className="text-rose-500 mt-2">
            We hope you enjoy your food!
          </DialogDescription>
        </div>
        <div className="bg-rose-50 p-6 pt-2">
          <ul className="flex flex-col" aria-label="Confirmed cart list">
            {cartItems.map((cartItem, index) => (
              <li
                key={index}
                className="grid grid-cols-[auto_1fr_auto] gap-4 items-center justify-between cart-item py-4 border-b-[1px] border-b-rose-100"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded overflow-hidden">
                  <img src={cartItem.image.thumbnail} alt={cartItem.name} />
                </div>
                <div className="grid gap-2">
                  <h3 className="text-sm font-bold text-rose-900 truncate">
                    {cartItem.name}
                  </h3>
                  <div className="flex gap-2">
                    <p className="text-red-500 text-sm font-bold">
                      {cartItem.quantity}x
                    </p>
                    <p className="text-rose-500 text-sm">
                      @{formatPrice(cartItem.price)}
                    </p>
                  </div>
                </div>

                <p className="text-rose-900 font-semibold">
                  ${formatPrice(cartItem.quantity * cartItem.price)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-rose-900">Order Total</p>
            <p
              className="text-xl text-rose-900 font-bold"
              data-testid="confirmed-order-total"
            >
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
        </div>
        <Button onClick={startNewOrder}>Start New Order</Button>
      </DialogContent>
    </Dialog>
  );
}

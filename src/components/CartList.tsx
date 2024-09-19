import AddToCartButton from "./AddToCartButton";
import desserts from "../data.json";
import { formatPrice } from "../utils";
import SelectQuantityButton from "./SelectQuantityButton";
import { CartItem } from "../types";

type CartListProps = {
  onAddCartItem: (cartItem: CartItem) => void;
  cartItems: CartItem[];
};

export default function CartList({ onAddCartItem, cartItems }: CartListProps) {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Desserts</h1>
      <ul className="flex flex-col gap-6">
        {desserts.map((dessert, index) => {
          const isDessertInCart = cartItems.some(
            (cartItem) => cartItem.name === dessert.name
          );
          return (
            <li className="flex flex-col gap-4" key={index}>
              <div
                className={`rounded-lg overflow-hidden ${
                  isDessertInCart ? " border-2 border-red-500" : ""
                }`}
              >
                <img src={dessert.image.mobile} alt={dessert.name} />
              </div>
              {isDessertInCart ? (
                <SelectQuantityButton />
              ) : (
                <AddToCartButton
                  cartItem={dessert}
                  onAddCartItem={onAddCartItem}
                />
              )}

              <div className="flex flex-col gap-1">
                <h2 className="text-sm text-rose-500">{dessert.category}</h2>
                <p className="text-rose-900 font-semibold">{dessert.name}</p>
                <p className="text-red-500 font-semibold">
                  ${formatPrice(dessert.price)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

import AddToCartButton from "./AddToCartButton";
import desserts from "../data.json";
import { formatPrice } from "../lib/utils";
import SelectQuantityButton from "./SelectQuantityButton";
import { CartItem } from "../types";

type DessertListProps = {
  onAddCartItem: (cartItem: CartItem) => void;
  cartItems: CartItem[];
  onIncreaseItemQuantity: (cartItemName: string) => void;
  onDecreaseItemQuantity: (cartItemName: string) => void;
};

export default function DessertList({
  onAddCartItem,
  cartItems,
  onIncreaseItemQuantity,
  onDecreaseItemQuantity,
}: DessertListProps) {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Desserts</h1>
      <ul className="flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:gap-y-8">
        {desserts.map((dessert, index) => {
          const cartItem = cartItems.find((item) => item.name === dessert.name);
          return (
            <li className="flex flex-col gap-4" key={index}>
              <div
                className={`rounded-lg overflow-hidden ${
                  cartItem ? " border-2 border-red-500" : ""
                }`}
              >
                <picture>
                  <source
                    srcSet={dessert.image.desktop}
                    media="(min-width: 1024px)"
                  />
                </picture>
                <picture>
                  <source
                    srcSet={dessert.image.tablet}
                    media="(min-width: 640px)"
                  />
                </picture>
                <img src={dessert.image.mobile} alt={dessert.name} />
              </div>
              {cartItem ? (
                <SelectQuantityButton
                  onIncreaseItemQuantity={onIncreaseItemQuantity}
                  onDecreaseItemQuantity={onDecreaseItemQuantity}
                  cartItem={cartItem}
                />
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

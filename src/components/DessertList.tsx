import AddToCartButton from "@/components/AddToCartButton";
import desserts from "@/data.json";
import { formatPrice } from "@/lib/utils";
import SelectQuantityButton from "@/components/SelectQuantityButton";
import { useCartItemsContext } from "@/lib/hooks";

export default function DessertList() {
  const { cartItems } = useCartItemsContext();

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Desserts</h1>
      <ul
        className="flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:gap-y-8"
        aria-label="Dessert list"
      >
        {desserts.map((dessert, index) => {
          const cartItem = cartItems.find((item) => item.name === dessert.name);
          return (
            <li className="flex flex-col gap-4 outline-none" key={index}>
              <div
                className={`rounded-lg overflow-hidden transition duration-200 border-none ${
                  cartItem ? "border-red-500" : "border-transparent"
                }`}
              >
                <picture className="block w-full">
                  <source
                    srcSet={dessert.image.desktop}
                    media="(min-width: 1024px)"
                    className="w-full h-auto object-cover"
                  />
                  <source
                    srcSet={dessert.image.tablet}
                    media="(min-width: 640px)"
                    className="w-full h-auto object-cover"
                  />
                  <img
                    src={dessert.image.mobile}
                    alt={dessert.name}
                    className="w-full h-auto object-cover"
                  />
                </picture>
              </div>
              {cartItem ? (
                <SelectQuantityButton cartItem={cartItem} />
              ) : (
                <AddToCartButton cartItem={dessert} />
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

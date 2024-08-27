import Cart from "./components/Cart";
import CartButton from "./components/CartButton";
import desserts from "./data.json";
import { formatPrice } from "./utils";

function App() {
  return (
    <div>
      <main>
        <section>
          <h1 className="text-2xl font-bold">Desserts</h1>
          <ul>
            {desserts.map((dessert, index) => (
              <li key={index}>
                <img src={dessert.image.mobile} alt={dessert.name} />
                <CartButton />
                <h2 className="text-sm text-rose-500">{dessert.category}</h2>
                <p className="text-rose-900 font-semibold">{dessert.name}</p>
                <p className="text-red-500 font-semibold">
                  ${formatPrice(dessert.price)}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <Cart />
      </main>
    </div>
  );
}

export default App;

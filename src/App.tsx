import Cart from "./components/Cart";
import CartButton from "./components/CartButton";
import desserts from "./data.json";

function App() {
  return (
    <div>
      <main>
        <section>
          <h1>Desserts</h1>
          <ul>
            {desserts.map((dessert, index) => (
              <li key={index}>
                <img src={dessert.image.mobile} alt={dessert.name} />
                <CartButton />
                <h2>{dessert.category}</h2>
                <p>{dessert.name}</p>
                <p>${dessert.price}</p>
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

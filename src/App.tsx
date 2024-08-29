import Cart from "./components/Cart";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="bg-rose-50">
      <main className="flex flex-col gap-8 p-6">
        <CartList />
        <Cart />
      </main>
    </div>
  );
}

export default App;

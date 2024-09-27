import Cart from "./components/Cart";
import DessertList from "./components/DessertList";

function App() {
  return (
    <div className="bg-rose-50 lg:flex lg:items-center lg:justify-center">
      <main className="max-w-[1260px] flex flex-col gap-8 p-6 lg:px-0 lg:py-[88px] sm:p-10 lg:grid lg:grid-cols-[25fr_12fr]">
        <DessertList />
        <Cart />
      </main>
    </div>
  );
}

export default App;

import Cart from "./components/Cart";
import CartButton from "./components/CartButton";

function App() {
  return (
    <div>
      <main>
        <section>
          <h1>Desserts</h1>
          <ul>
            <li>
              <img src="./public/assets/images/image-waffle-mobile.jpg" alt="" />
              <CartButton />
              <h2>Waffle</h2>
              <p>Waffle with Berries</p>
              <p>$6.50</p>
            </li>
            <li>
              <img src="./public/assets/images/image-creme-brulee-mobile.jpg" alt="" />
              <CartButton />
              <h2>Crème Brûlée</h2>
              <p>Vanilla Bean Crème Brûlée</p>
              <p>$7.00</p>
            </li>
            <li>
              <img src="./public/assets/images/image-macaron-mobile.jpg" alt="" />
              <CartButton />
              <h2>Macaron</h2>
              <p>Macaron Mix of Five</p>
              <p>$8.00</p>
            </li>
            <li>
              <img src="./public/assets/images/image-tiramisu-mobile.jpg" alt="" />
              <CartButton />
              <h2>Tiramisu</h2>
              <p>Classic Tiramisu</p>
              <p>$5.50</p>
            </li>
            <li>
              <img src="./public/assets/images/image-baklava-mobile.jpg" alt="" />
              <CartButton />
              <h2>Baklava</h2>
              <p>Pistachio Baklava</p>
              <p>$4.00</p>
            </li>
            <li>
              <img src="./public/assets/images/image-meringue-mobile.jpg" alt="" />
              <CartButton />
              <h2>Pie</h2>
              <p>Lemon Meringue Pie</p>
              <p>$5.00</p>
            </li>
            <li>
              <img src="./public/assets/images/image-cake-mobile.jpg" alt="" />
              <CartButton />
              <h2>Cake</h2>
              <p>Red Velvet Cake</p>
              <p>$4.50</p>
            </li>
            <li>
              <img src="./public/assets/images/image-brownie-mobile.jpg" alt="" />
              <CartButton />
              <h2>Brownie</h2>
              <p>Salted Caramel Brownie</p>
              <p>$4.50</p>
            </li>
            <li>
              <img src="./public/assets/images/image-panna-cotta-mobile.jpg" alt="" />
              <CartButton />
              <h2>Panna Cotta</h2>
              <p>Vanilla Panna Cotta</p>
              <p>$6.50</p>
            </li>
          </ul>
        </section>
        <Cart />
      </main>
    </div>
  );
}

export default App;

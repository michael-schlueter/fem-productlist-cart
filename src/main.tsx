import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CartItemsContextProvider from "./contexts/CartItemsContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartItemsContextProvider>
      <App />
    </CartItemsContextProvider>
  </StrictMode>
);

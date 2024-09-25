import { render, RenderOptions } from "@testing-library/react";
import CartItemsContextProvider from "@/contexts/CartItemsContextProvider";
import { ReactElement } from "react";

const renderWithContext = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: CartItemsContextProvider, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

export { renderWithContext as render };

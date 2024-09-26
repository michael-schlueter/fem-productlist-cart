import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "./lib/test-utils";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Mock the data import
vi.mock("@/data.json", () => {
  return {
    default: [
      {
        image: {
          thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
          mobile: "./assets/images/image-waffle-mobile.jpg",
          tablet: "./assets/images/image-waffle-tablet.jpg",
          desktop: "./assets/images/image-waffle-desktop.jpg",
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
      },
      {
        image: {
          thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
          mobile: "./assets/images/image-creme-brulee-mobile.jpg",
          tablet: "./assets/images/image-creme-brulee-tablet.jpg",
          desktop: "./assets/images/image-creme-brulee-desktop.jpg",
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0,
      },
    ],
  };
});

describe("Order flow", () => {
  it("adds a dessert to the cart when the 'Add to cart' button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);
    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });
    expect(addToCartButtons.length).toBeGreaterThan(0);

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Check if the cart item count is updated
    const cartItemCount = screen.getByRole("heading", {
      name: /your cart \(1\)/i,
    });
    expect(cartItemCount).toBeInTheDocument();

    // Check if the item is added to the cart list
    const cartItem = screen.getByRole("heading", {
      name: /waffle with berries/i,
    });
    expect(cartItem).toBeInTheDocument();
  });

  it("increments quantity of the item in the cart", async () => {
    const user = userEvent.setup();
    render(<App />);
    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase quantity/i,
    });
    expect(incrementQuantityButton).toBeInTheDocument();

    // Click the button to increment the quantity
    await user.click(incrementQuantityButton);

    // Verify the quantity displayed in the dessert card is updated to 2
    const dessertCardQuantity = screen.getByText("2");
    expect(dessertCardQuantity).toBeInTheDocument();

    // Verify the quantity displayed in the cart list is updated to 2
    const cartListQuantity = screen.getByText("2x");
    expect(cartListQuantity).toBeInTheDocument();
  });

  it("increments the sum of the price of the item in the cart correctly once quantity is changed from 1 to 2", async () => {
    const user = userEvent.setup();
    render(<App />);
    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Find the cart list container
    const cartList = screen.getByRole("list", { name: /cart list/i });

    // Use 'within' to scope queries to the cart list
    const { getByText } = within(cartList);

    // Verify initial price of the item in the cart
    const initialPrice = getByText("$6.50");
    expect(initialPrice).toBeInTheDocument();

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase quantity/i,
    });

    // Click the button to increment the quantity
    await user.click(incrementQuantityButton);

    // Verify the updated price of the item in the cart
    const updatedPrice = getByText("$13.00");
    expect(updatedPrice).toBeInTheDocument();
  });
});

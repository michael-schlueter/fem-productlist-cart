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

  it("updates the sum of the price of the item in the cart correctly once quantity is changed from 1 to 2", async () => {
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

  it("decrements quantity of the item in the cart", async () => {
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

    // Click the button to increment the quantity to 2
    await user.click(incrementQuantityButton);

    // Find the button to decrement the amount of the dessert in the cart
    const decrementQuantityButton = screen.getByRole("button", {
      name: /decrease quantity/i,
    });

    // Click the button to decrement the quantity to 1
    await user.click(decrementQuantityButton);

    // Verify the quantity in the dessert card is being updated to 1
    const dessertCardQuantity = screen.getByText("1");
    expect(dessertCardQuantity).toBeInTheDocument();

    // Verify the quantity in the cart list is being updated to 1
    const cartListQuantity = screen.getByText("1x");
    expect(cartListQuantity).toBeInTheDocument();
  });

  it("updattes the sum of the price of the item in the cart correctly once quantity is changed from 2 to 1", async () => {
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

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase quantity/i,
    });

    // Click the button to increment the quantity
    await user.click(incrementQuantityButton);

    // Verify the increased price of the item in the cart
    const increasedPrice = getByText("$13.00");
    expect(increasedPrice).toBeInTheDocument();

    // Find the button to decrement the amount of the dessert in the cart
    const decrementQuantityButton = screen.getByRole("button", {
      name: /decrease quantity/i,
    });

    // Click the button to decrement the quantity to 1
    await user.click(decrementQuantityButton);

    // Verify the updated price of the item in the cart
    const updatedPrice = getByText("$6.50");
    expect(updatedPrice).toBeInTheDocument();
  });

  it("removes item from the cart if quantity is changed to 0", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Find the button to decrement the amount of the dessert in the cart
    const decrementQuantityButton = screen.getByRole("button", {
      name: /decrease quantity/i,
    });

    // Click the button to decrement the quantity to 0
    await user.click(decrementQuantityButton);

    // Item is not being displayed in the cart anymore
    const cartItem = screen.queryByRole("heading", {
      name: /waffle with berries/i,
    });
    expect(cartItem).not.toBeInTheDocument();

    // Select quantity button is not being displayed in the card of the respective dessert
    const decreaseQuantityButton = screen.queryByRole("button", {
      name: /decrease quantity/i,
    });
    expect(decreaseQuantityButton).not.toBeInTheDocument();
  });

  it("remove item from the cart by clicking the button to remove the item from the cart", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Find the button to remove the item from the cart
    const removeItemButton = screen.getByRole("button", {
      name: /remove waffle with berries from cart/i,
    });

    // Click the button to remove item from cart
    await user.click(removeItemButton);

    // Item is not being displayed in the cart anymore
    const cartItem = screen.queryByRole("heading", {
      name: /waffle with berries/i,
    });
    expect(cartItem).not.toBeInTheDocument();

    // Select quantity button is not being displayed in the card of the respective dessert
    const decreaseQuantityButton = screen.queryByRole("button", {
      name: /decrease quantity/i,
    });
    expect(decreaseQuantityButton).not.toBeInTheDocument();
  });

  it("updates the count of items in the cart when adding an item to the cart", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Amount of items in the cart is updated to 1
    const cartItemCount = screen.getByRole("heading", {
      name: /your cart \(1\)/i,
    });
    expect(cartItemCount).toBeInTheDocument();
  });

  it("updates the count of items in the cart when removing an item from the cart", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Amount of items in the cart is updated to 1
    const cartItemCount = screen.getByRole("heading", {
      name: /your cart \(1\)/i,
    });
    expect(cartItemCount).toBeInTheDocument();

    // Find the button to remove the item from the cart
    const removeItemButton = screen.getByRole("button", {
      name: /remove waffle with berries from cart/i,
    });

    // Click the button to remove item from cart
    await user.click(removeItemButton);

    // Amount of items in the cart is updated to 0
    const updatedCartItemCount = screen.getByRole("heading", {
      name: /your cart \(0\)/i,
    });
    expect(updatedCartItemCount).toBeInTheDocument();
  });

  it("updates the cart total price if item is added to the cart", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Total is not being displayed initially
    const initialCartTotalPrice = screen.queryByTestId("cart-total-price");
    expect(initialCartTotalPrice).not.toBeInTheDocument();

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Find the total cart price
    const cartTotalPrice = screen.getByTestId("cart-total-price");

    // Check if the total cart price is updated correctly
    expect(cartTotalPrice).toHaveTextContent("$6.50");
  });

  it("updates the cart total price if item is removed from the cart", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Click the second "AddToCart" button
    await user.click(addToCartButtons[1]);

    // Find the initial total cart price
    const cartTotalPrice = screen.getByTestId("cart-total-price");

    // Initial cart total price should be $13,50
    expect(cartTotalPrice).toHaveTextContent("$13.50");

    // Find the button to remove the item from the cart
    const removeItemButton = screen.getByRole("button", {
      name: /remove waffle with berries from cart/i,
    });

    // Click the button to remove item from cart
    await user.click(removeItemButton);

    // Updatd cart total price should be $7.00
    expect(cartTotalPrice).toHaveTextContent("$7.00");
  });

  it("updates the cart total price if quantity of an item in the cart is changed", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButtons[0]);

    // Find the initial total cart price
    const cartTotalPrice = screen.getByTestId("cart-total-price");

    // Initial cart total price should be $6,50
    expect(cartTotalPrice).toHaveTextContent("$6.50");

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase quantity/i,
    });

    // Click the button to increment the quantity
    await user.click(incrementQuantityButton);

    // Updated cart total price should be $13.00
    expect(cartTotalPrice).toHaveTextContent("$13.00");
  });
});

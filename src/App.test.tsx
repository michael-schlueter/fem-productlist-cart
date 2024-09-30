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
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the cart list
    const cartList = screen.getByRole("list", { name: /cart list/i });
    const { getByRole } = within(cartList);

    // Check if the item is added to the cart list
    const cartItem = getByRole("heading", {
      name: /waffle with berries/i,
    });
    expect(cartItem).toBeInTheDocument();
  });

  it("increments quantity of the item in the cart when the 'increase quantity' button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase Waffle with Berries quantity/i,
    });
    expect(incrementQuantityButton).toBeInTheDocument();

    // Click the button to increment the quantity
    await user.click(incrementQuantityButton);

    // Verify the quantity displayed in the dessert card is updated to 2
    const dessertCardQuantity = screen.getByText("2");
    expect(dessertCardQuantity).toBeInTheDocument();

    // Find the cart list
    const cartList = screen.getByRole("list", { name: /cart list/i });
    const { getByText } = within(cartList);

    // Verify the quantity displayed in the cart list is updated to 2
    const cartListQuantity = getByText("2x");
    expect(cartListQuantity).toBeInTheDocument();
  });

  it("updates the sum of the price of the item in the cart correctly if quantity is increased from 1 to 2", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the cart list container
    const cartList = screen.getByRole("list", { name: /cart list/i });

    // Use 'within' to scope queries to the cart list
    const { getByText } = within(cartList);

    // Verify initial price of the item in the cart
    const initialPrice = getByText("$6.50");
    expect(initialPrice).toBeInTheDocument();

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase Waffle with Berries quantity/i,
    });

    // Click the button to increment the quantity
    await user.click(incrementQuantityButton);

    // Verify the updated price of the item in the cart
    const updatedPrice = getByText("$13.00");
    expect(updatedPrice).toBeInTheDocument();
  });

  it("decrements quantity of the item in the cart if the 'decrease quantity' button is clicked", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase Waffle with Berries quantity/i,
    });

    // Click the button to increment the quantity to 2
    await user.click(incrementQuantityButton);

    // Find the button to decrement the amount of the dessert in the cart
    const decrementQuantityButton = screen.getByRole("button", {
      name: /decrease Waffle with Berries quantity/i,
    });

    // Click the button to decrement the quantity to 1
    await user.click(decrementQuantityButton);

    // Verify the quantity in the dessert card is being updated to 1
    const dessertCardQuantity = screen.getByText("1");
    expect(dessertCardQuantity).toBeInTheDocument();

    // Find the cart list
    const cartList = screen.getByRole("list", { name: /cart list/i });
    const { getByText } = within(cartList);

    // Verify the quantity in the cart list is being updated to 1
    const cartListQuantity = getByText("1x");
    expect(cartListQuantity).toBeInTheDocument();
  });

  it("updates the sum of the price of the item in the cart correctly if quantity is decreased from 2 to 1", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the cart list container
    const cartList = screen.getByRole("list", { name: /cart list/i });

    // Use 'within' to scope queries to the cart list
    const { getByText } = within(cartList);

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase Waffle with Berries quantity/i,
    });

    // Click the button to increment the quantity
    await user.click(incrementQuantityButton);

    // Verify the increased price of the item in the cart
    const increasedPrice = getByText("$13.00");
    expect(increasedPrice).toBeInTheDocument();

    // Find the button to decrement the amount of the dessert in the cart
    const decrementQuantityButton = screen.getByRole("button", {
      name: /decrease Waffle with Berries quantity/i,
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
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the button to decrement the amount of the dessert in the cart
    const decrementQuantityButton = screen.getByRole("button", {
      name: /decrease Waffle with Berries quantity/i,
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

  it("removes item from the cart by clicking the button to remove the item from the cart", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the cart list
    const cartList = screen.getByRole("list", { name: /Cart list/i });
    const { getByRole, queryByRole } = within(cartList);

    // Find the button to remove the item from the cart
    const removeItemButton = getByRole("button", {
      name: /remove waffle with berries from cart/i,
    });

    // Click the button to remove item from cart
    await user.click(removeItemButton);

    // Item is not being displayed in the cart anymore
    const cartItem = queryByRole("heading", {
      name: /waffle with berries/i,
    });
    expect(cartItem).not.toBeInTheDocument();

    // Select quantity button is not being displayed in the card of the respective dessert
    const decreaseQuantityButton = screen.queryByRole("button", {
      name: /decrease waffle with berries quantity/i,
    });
    expect(decreaseQuantityButton).not.toBeInTheDocument();
  });

  it("updates the count of items in the cart when adding an item to the cart", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

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
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

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
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Total is not being displayed initially
    const initialCartTotalPrice = screen.queryByTestId("cart-total-price");
    expect(initialCartTotalPrice).not.toBeInTheDocument();

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the total cart price
    const cartTotalPrice = screen.getByTestId("cart-total-price");

    // Check if the total cart price is updated correctly
    expect(cartTotalPrice).toHaveTextContent("$6.50");
  });

  it("updates the cart total price if item is removed from the cart", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addWaffleToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    const addCremeBruleeToCartButton = screen.getByRole("button", {
      name: /Add Vanilla Bean Crème Brûlée to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addWaffleToCartButton);

    // Click the second "AddToCart" button
    await user.click(addCremeBruleeToCartButton);

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
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the initial total cart price
    const cartTotalPrice = screen.getByTestId("cart-total-price");

    // Initial cart total price should be $6,50
    expect(cartTotalPrice).toHaveTextContent("$6.50");

    // Find the button to increment the amount of the dessert in the cart
    const incrementQuantityButton = screen.getByRole("button", {
      name: /increase Waffle with Berries quantity/i,
    });

    // Click the button to increment the quantity
    await user.click(incrementQuantityButton);

    // Updated cart total price should be $13.00
    expect(cartTotalPrice).toHaveTextContent("$13.00");
  });

  it("cart items are correctly displayed in order confirmation", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the order confirmation button
    const orderConfirmationButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    // Click the order confirmation button
    await user.click(orderConfirmationButton);

    // Find list of confirmed cart list items
    const confirmedCartList = screen.getByRole("list", {
      name: /confirmed cart list/i,
    });
    const { getByText } = within(confirmedCartList);

    // Find cart item in confirmed cart item list
    const confirmedCartItem = getByText("Waffle with Berries");
    expect(confirmedCartItem).toBeInTheDocument();
  });

  it("total cart price is correctly displayed in the order confirmation", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addWaffleToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    const addCremeBruleeToCartButton = screen.getByRole("button", {
      name: /Add Vanilla Bean Crème Brûlée to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addWaffleToCartButton);

    // Click the second "AddToCart" button
    await user.click(addCremeBruleeToCartButton);

    // Find the order confirmation button
    const orderConfirmationButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    // Click the order confirmation button
    await user.click(orderConfirmationButton);

    // Find the confirmed order total
    const confirmedOrderTotal = screen.getByTestId("confirmed-order-total");

    // Order total should be $13.50
    expect(confirmedOrderTotal).toHaveTextContent("$13.50");
  });

  it("starts new order", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the order confirmation button
    const orderConfirmationButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    // Click the order confirmation button
    await user.click(orderConfirmationButton);

    // Find the button to start a new order
    const startNewOrderButton = screen.getByRole("button", {
      name: /start new order/i,
    });

    // Click the button to start a new order
    await user.click(startNewOrderButton);

    // Count of items in the cart should be 0
    const cartItemCount = screen.getByRole("heading", {
      name: /your cart \(0\)/i,
    });
    expect(cartItemCount).toBeInTheDocument();

    // All quantities should be reset
    const incrementQuantityButton = screen.queryByRole("button", {
      name: /increase quantity/i,
    });
    expect(incrementQuantityButton).not.toBeInTheDocument();
  });

  it("cart items remain in cart after closing order confirmation without initializing new order", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find the "AddToCart" button for the first dessert
    const addToCartButton = screen.getByRole("button", {
      name: /add waffle with berries to cart/i,
    });

    // Click the first "AddToCart" button
    await user.click(addToCartButton);

    // Find the order confirmation button
    const orderConfirmationButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    // Click the order confirmation button
    await user.click(orderConfirmationButton);

    // Find the close button
    const closeButton = screen.getByRole("button", {
      name: /close/i,
    });

    // Click the close button
    await user.click(closeButton);

    // Find the cart list
    const cartList = screen.getByRole("list", { name: /cart list/i });
    const { getByRole } = within(cartList);

    // Check if the item is still in the cart list
    const cartItem = getByRole("heading", {
      name: /waffle with berries/i,
    });
    expect(cartItem).toBeInTheDocument();
  });
});

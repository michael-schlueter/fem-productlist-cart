# Frontend Mentor Product List with Cart

> This is a solution to a [Frontend Mentor](https://www.frontendmentor.io/) challenge. The challenge was to build a product list project that includes a functional cart and get it looking as close to the design as possible.

## General Information

- This project is the second project of the "JavaScript frameworks and libraries" career path from [Frontend Mentor](https://www.frontendmentor.io/)
- I chose React as the JS library for this project because I am already familiar with it
- For styling I went with Tailwind to get further experience in implementing a design with it including customizing its configuration to fit my needs

## Technologies Used

- React 18.3.1
- TypeScript 5.5.3
- Tailwind CSS 3.4.10
- Vitest 2.1.1
- React Testing Library 16.0.1
- shadcn/ui 0.9.0

## Features

- add items to the cart and remove them
- increase/decrease the number of items in the cart
- provide an order confirmation modal
- reset selection by initializing a new order
- provide optimal layout depending on the screen size of the user
- hover/focus states for all interactive elements on the page

## Screenshots

![Example screenshot](https://i.ibb.co/xMJdjx3/productlist-screenshot.jpg)

## Demo

Live demo [_here_](https://fem-productlist-cart.vercel.app/).

## Setup

The dependencies which are necessary to run this app can be found in the package.json file.

1. Clone the repo
2. Install NPM packages in the project folder by running

```
npm install
```

in the terminal. 3. Run the app

```
npm run dev
```

4. Visit localhost:5173 in your browser

## Learnings

- integrating and customizing a shadcn/ui component (dialog)
- using the picture/source elements to provide different versions of an image depending on the device
- manipulating the fill color of svgs (for focus/hover states)
- using 'within' in tests to provide a specific scope for querying (e.g. a specfic list)

## Project Status

The project is basically finished. I extended the scope of the project by adding some tests. I may add some sort of categorizing in the future as well as saving/loading cart items out of local storage.

## Acknowledgements

- This project is a solution to this [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

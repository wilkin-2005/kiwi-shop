# MVP – Kiwi Shop

## Purpose

The MVP for Kiwi Shop is a local web shop where a visitor can browse products, add them to a cart, complete a simulated checkout, and receive an order confirmation.

The project is primarily intended to practise Next.js Server Components, Client Components, Server Actions, and communication with a local API.

## Included in the MVP

- A local `json-server` backend with:
  - A local copy of DummyJSON’s products
  - An empty collection for orders
- A product catalogue that fetches product data from `json-server`
- A product detail page
- A cart where visitors can:
  - Add products
  - Change quantities
  - Remove products
  - See the total price
- Cart persistence using browser local storage
- A checkout form with name, email, and delivery address
- A Server Action that validates the checkout form and saves a simulated order to `json-server`
- An order-confirmation page showing the order number and summary
- Basic loading and error states when product data cannot be loaded
- A responsive layout that works on both mobile and desktop

## Technical approach

- Server Components will fetch and display product data.
- Client Components will handle interactive cart behaviour and local storage.
- A Server Action will process checkout and create an order.
- The Next.js application will communicate directly with the local `json-server` API.

## Not included in the MVP

- User accounts or login
- Real payments
- Order history
- Stock updates after checkout
- Admin functionality
- Product filtering, search, and sorting
- Advanced animations or complex visual design
- Automated tests

## Definition of done

The MVP is complete when a visitor can select a product, add it to a cart, refresh the page without losing the cart, submit valid checkout details, and see that a new order has been saved in the local backend.

# Mini E-Commerce Product & Cart

A small e-commerce UI built using React to demonstrate component design, state management, and clean React fundamentals.

---

## Features

### Product Listing
- Displays 15–20 products in a responsive grid layout
- Shows product name, price, category, and stock status
- “Add to Cart” button disabled for out-of-stock products

### Filters & Search
- Search products by name
- Filter products by category
- Sort products by price (Low → High, High → Low)
- Clear all filters option
- Filters work together (search + category + sort)

### Cart
- Add and remove products from cart
- Update item quantity
- Quantity restricted by available stock
- Displays total items and total price
- Instant cart updates

### UI & UX
- Clean and minimal user interface
- Clear empty states for product list and cart
- Product list does not re-render on cart updates
- Cart and product logic separated using custom hooks

---

## Tech Stack

- React (Functional Components)
- JavaScript (ES6+)
- CSS (No UI libraries)
- DummyJSON API for product data

## Project Structure


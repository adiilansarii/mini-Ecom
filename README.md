# Mini E-Commerce Product & Cart

A small e-commerce UI built using React to demonstrate component design, state management, and clean React fundamentals.

---

## Screenshots

### 🏠 Home Page
Product listing with search, category filter, sorting, and add-to-cart actions.
<img width="1920" height="1032" alt="home" src="https://github.com/user-attachments/assets/dd47041c-9761-4674-9728-64c870738fab" />

---

### 🛒 Cart & Filters
Cart functionality with quantity updates, stock limits, and combined filters (search + category + sort).
<img width="1920" height="931" alt="Screenshot 2026-01-10 135347" src="https://github.com/user-attachments/assets/b590e751-ab5d-44d6-9a49-b42c97f306c1" />

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

---

## Project Setup

```bash
git clone <repository-url>
cd mini-ecommerce
npm install
npm start

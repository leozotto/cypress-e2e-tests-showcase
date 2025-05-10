# 🧪 Cypress E2E & API Automation – Saucedemo

This project contains a complete Cypress test suite for **End-to-End (E2E)** scenarios on [saucedemo.com](https://www.saucedemo.com). The tests follow **best practices** using **custom commands**, clean structure, and are divided by features.

## 📁 Project Structure

cypress/
├── e2e/
│ ├── auth/
│ ├── cart/
│ ├── checkout/
│ ├── products/
│ └── logout/
├── support/
│ └── commands.js
├── fixtures/
│ └── example.json

- `auth/` – Login scenarios (valid, invalid, locked user)
- `cart/` – Add and remove products
- `checkout/` – Checkout flow and validation
- `products/` – Sorting and product detail pages
- `logout/` – Logout flow
- `commands.js` – All custom commands (login, add to cart, etc.)

---

## ✅ Test Scenarios
|----------------------------------------------------------------|
| # | Feature    | Scenario Description                          |
|---|------------|-----------------------------------------------|
| 1 | Login      | Valid login with standard user                |
| 2 | Login      | Invalid password shows error message          |
| 3 | Login      | Locked out user gets blocked                  |
| 4 | Cart       | Add item to cart                              |
| 5 | Cart       | Remove item from cart                         |
| 6 | Checkout   | Successful checkout process                   |
| 7 | Checkout   | Validation when fields are missing            |
| 8 | Products   | Sort products by price (low to high)          |
| 9 | Products   | View product details                          |
|10 | Logout     | Logout from application                       |
|----------------------------------------------------------------|

---

## 🧰 Technologies

- [Cypress](https://www.cypress.io/) 14+
- JavaScript (ES6)
- GitHub Actions (optional for CI)

---
👨‍💻@Author
Leonardo Zotto

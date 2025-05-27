# E-Commerce React Frontend

## Project Overview

This project is a **frontend-only e-commerce web application** built with **React**, **Tailwind CSS**, and **React Router**. It features a clean, responsive UI designed for an engaging shopping experience focused on plant products. The app includes:

- Product browsing with category and type filters
- Search functionality with navigation to collection page
- Responsive navigation bar and footer
- Shopping cart with add, update, and remove item capabilities
- State management using React Context API
- Styling with Tailwind CSS for rapid UI development
- Accessibility and responsive design best practices

This project is ideal for learning React component architecture, state management, and styling with Tailwind CSS in a real-world context.

---

## Features

- **Product Collection**: Filter by category, type, and search terms.
- **Search Bar**: Redirects to collection page and filters products dynamically.
- **Shopping Cart**: Add products with size selection, update quantities, remove items.
- **Responsive Design**: Mobile-friendly layout with sidebar menu.
- **Reusable Components**: Navbar, Footer, ProductItem, SearchBar, etc.
- **Context API**: Centralized state management for cart, search, and UI toggles.

---

## Tech Stack

- React (v18+)
- React Router (v6+)
- Tailwind CSS
- React Context API
- React Toastify (for notifications)
- JavaScript (ES6+)

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**

git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

2. **Install dependencies**

Using npm:
npm install

Or using yarn:
yarn install

3. **Start the development server**

npm start

or

yarn start

This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

---

## Project Structure

src/
├── assets/ # Images, icons, and static assets
├── components/ # Reusable React components (Navbar, SearchBar, ProductItem, etc.)
├── context/ # React Context for state management (ShopContext)
├── pages/ # Page components (Home, Collection, About, Contact, Cart)
├── App.js # Main app component with routing
├── index.css # Tailwind CSS configuration and custom styles
├── main.jsx # React app entry point (renders App.js)

---

## Available Scripts

- `npm start` or `yarn start`  
  Starts the development server.

- `npm run build` or `yarn build`  
  Builds the app for production to the `build` folder.

- `npm test` or `yarn test`  
  Launches the test runner (if tests are implemented).

---

## Customization

- **Tailwind CSS**  
  Modify `tailwind.config.js` to customize colors, fonts, or extend utilities.

- **Assets**  
  Replace images and icons in the `src/assets` folder with your own.

- **Context State**  
  Extend or modify the `ShopContext` to add new features or state variables.

---

## Future Improvements

- Add user authentication and profile management.
- Integrate backend API for dynamic product data and order processing.
- Implement payment gateway and checkout flow.
- Add pagination and advanced product filtering.
- Enhance accessibility with ARIA roles and keyboard navigation.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

---

## License

This project is open source and available.

---

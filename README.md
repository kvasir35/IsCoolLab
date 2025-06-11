# Shopping Cart & Order History React Project for IsCoolLab Co. Ltd

This is an interview test project made by Yohann Person. It is a React project implementing a shopping cart and order history using Redux Toolkit and TypeScript. It also includes unit tests using Vitest and React Testing Library.

## Project Overview

- **Cart Slice**: Manages the cart items with add, delete, and clear operations.
- **Order History Slice**: Tracks previous orders, storing order items and timestamps.
- **Components**: React components for cart display, item management, and order submission.
- **Testing**: Unit tests for Redux slices and React components using Vitest.

## Project Structure

```
src/
├─ app/
│ └─ store.ts # Redux store configuration
├─ features/
│ ├─ cart/
│ │ ├─ cartSlice.ts # Cart Redux slice
│ │ ├─ Cart.tsx # Cart component
│ │ └─ Cart.test.ts # Cart slice & component tests
│ ├─ orderHistory/
│ │ ├─ orderSlice.ts # Order history Redux slice
│ │ └─ orderSlice.test.ts # Order history slice tests
├─ components/
│ ├── button/ # Reusable button component
│ │ ├── Button.tsx
│ │ ├── index.ts
│ │ └── Button.scss
│ ├── popUp/ # Reusable popUp component
│ │ ├── PopUp.tsx
│ │ ├── index.ts
│ │ └── PopUp.scss
│ └── menu/ # Menu to add to Cart
│ ├── Menu.tsx
│ ├── index.ts
│ └── Menu.scss
├─ assets/ # Images, icons, etc.
├─ type/ # TypeScript types (e.g. CartItem)
└─ test/
└─ setup.ts # Test setup for Vitest and Testing Library
```

## Setup & Installation

### Clone the repo

```bash
git clone https://github.com/kvasir35/IsCoolLab.git
cd IsCoolLab
```

### Install dependencies

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Open your browser at http://localhost:5173/.

## Running Tests

You can run test using this command

```bash
npm run test
```

Or run tests with the interactive UI by running:

```Bash
npm run testui
```

## Linting

You can check code quality using ESLint with:

```bash
npm run lint
```

## Key Features

- Add / remove items in the cart with quantity adjustments.

- Submit orders, which are added to order history with timestamps.

- Clear cart and clear order history actions.

- Unit tested slices and components for quality assurance.

- Alias imports configured with @ to simplify module paths.

## Technologies Used

- React ^19.1.0

- TypeScript ~5.8.3

- Redux Toolkit ^2.8.2

- Vite ^6.3.5

- Vitest ^3.2.3 & React Testing Library ^16.3.0

- Sass ^1.89.2

## License

This project is licensed under the MIT License.

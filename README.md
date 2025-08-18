# Shopping Cart Application

A React and Redux shopping cart application built with TypeScript that calculates bills with special offers and discounts.

## Features

- **Product Management**: Display products with prices and add them to cart
- **Shopping Cart**: Add/remove items, adjust quantities
- **Special Offers**: Automatic calculation of discounts and savings
- **Bill Calculation**: Shows subtotal, savings, and final total
- **Responsive Design**: Built with Tailwind CSS for modern UI
- **TypeScript**: Full type safety throughout the application
- **Redux Toolkit**: Modern state management with Redux

## Special Offers Implemented

1. **Cheese**: Buy One Get One Free
2. **Soup + Bread**: When you buy Soup, Bread is half price
3. **Butter**: Get a third off (33.33% discount)

## Technologies Used

- React 18
- TypeScript
- Redux Toolkit
- React Redux
- Tailwind CSS
- Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd shopping-cart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── ProductCard.tsx
│   ├── CartItem.tsx
│   ├── ShoppingCart.tsx
│   └── SpecialOffers.tsx
├── store/              # Redux store and slices
│   ├── store.ts
│   └── cartSlice.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── data/               # Static data
│   └── products.ts
└── App.tsx             # Main application component
```

## How It Works

1. **Products**: Users can view all available products with their prices
2. **Adding Items**: Click "Add" button to add products to cart
3. **Quantity Management**: Use +/- buttons to adjust quantities
4. **Automatic Calculations**: Special offers are automatically applied
5. **Bill Summary**: View subtotal, savings, and final total

## Special Offer Logic

- **Buy One Get One Free**: For every 2 items, 1 is free
- **Half Price**: Related product gets 50% discount
- **Percentage Discount**: Fixed percentage off the total price

## Testing

Run the test suite:
```bash
npm test
```

## Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

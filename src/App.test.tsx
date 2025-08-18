import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

test('renders shopping cart title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElement = screen.getByText(/Shopping Cart/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders products section', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const productsTitle = screen.getByText(/Products/i);
  expect(productsTitle).toBeInTheDocument();
});

test('renders basket section', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const basketTitle = screen.getByText(/Basket/i);
  expect(basketTitle).toBeInTheDocument();
});

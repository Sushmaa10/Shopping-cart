import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import BasketPage from './pages/BasketPage';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="min-h-screen bg-gray-100">
					<Header />
					<Routes>
						<Route path="/" element={<Navigate to="/products" replace />} />
						<Route path="/products" element={<ProductsPage />} />
						<Route path="/basket" element={<BasketPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

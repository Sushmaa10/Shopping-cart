import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Header: React.FC = () => {
	const itemCount = useSelector((state: RootState) => state.cart.items.reduce((n, i) => n + i.quantity, 0));
	return (
		<header className="bg-white shadow-sm">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<NavLink to="/" className="text-2xl font-bold text-gray-800">Shopping Cart</NavLink>
				<nav className="space-x-6">
					<NavLink
						to="/products"
						className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
					>
						Products
					</NavLink>
					<NavLink
						to="/basket"
						className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
					>
						Basket ({itemCount})
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;

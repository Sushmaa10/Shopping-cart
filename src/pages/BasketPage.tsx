import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

const BasketPage: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<ShoppingCart />
		</div>
	);
};

export default BasketPage;

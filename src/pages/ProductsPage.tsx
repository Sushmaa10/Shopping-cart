import React from 'react';
import { products, specialOffers } from '../data/products';
import ProductCard from '../components/ProductCard';
import SpecialOffers from '../components/SpecialOffers';

const ProductsPage: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map(p => (
					<ProductCard key={p.id} product={p} />
				))}
			</div>
			<div className="mt-10">
				<SpecialOffers offers={specialOffers} />
			</div>
		</div>
	);
};

export default ProductsPage;

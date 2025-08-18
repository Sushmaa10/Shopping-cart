import React from 'react';
import { Product } from '../types';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

interface ProductCardProps {
	product: Product;
}

const offerLabelById: Record<string, string> = {
	cheese: 'Buy 1 Get 1 Free',
	soup: 'Buy Soup, get Bread 50% off',
	bread: '50% off with Soup',
	butter: '33% Off',
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addItem(product));
	};

	const offer = offerLabelById[product.id] || '';

	return (
		<div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
			{product.imageUrl && (
				<div className="w-full h-44 md:h-48 flex items-center justify-center mb-2">
					<img src={product.imageUrl} alt={product.name} className="max-h-full max-w-full object-contain" />
				</div>
			)}
			{offer && (
				<p className="mb-3 text-xs md:text-sm text-blue-700 bg-blue-50 inline-block px-2 py-1 rounded">
					{offer}
				</p>
			)}
			<div className="flex justify-between items-center">
				<div>
					<h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
					<p className="text-2xl font-bold text-blue-600">
						{product.unit} {product.price.toFixed(2)}
					</p>
				</div>
				<button
					onClick={handleAddToCart}
					className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default ProductCard;

import React from 'react';
import { CartItem as CartItemType } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/cartSlice';
import { RootState } from '../store/store';

interface CartItemProps {
	item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
	const dispatch = useDispatch();
	const items = useSelector((state: RootState) => state.cart.items);

	const handleIncreaseQuantity = () => {
		dispatch(addItem(item.product));
	};

	const handleDecreaseQuantity = () => {
		dispatch(removeItem(item.product.id));
	};

	
	const isCheese = item.product.id === 'cheese';
	// For display: show one free Cheese per paid Cheese
	const freeCheeseUnits = isCheese ? item.quantity : 0;
	const paidCheeseUnits = isCheese ? item.quantity : 0;
    const displayCheeseSaved = isCheese ? item.product.price * freeCheeseUnits : 0;

	
	let breadHalfNote = '';
	if (item.product.id === 'bread') {
		const soup = items.find(ci => ci.product.id === 'soup');
		if (soup && soup.quantity > 0 && item.quantity > 0) {
			const applicable = Math.min(soup.quantity, item.quantity);
			breadHalfNote = `Half price on ${applicable} ${applicable > 1 ? 'Breads' : 'Bread'}`;
		}
	}

	return (
		<div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 mb-4">
			<div className="flex justify-between items-start mb-3">
				<div>
					<h3 className="text-lg font-semibold text-gray-800">{item.product.name}</h3>
					<p className="text-gray-600">Unit price {item.product.unit}{item.product.price.toFixed(2)}</p>
				</div>
				<div className="flex items-center space-x-2">
					<button
						onClick={handleDecreaseQuantity}
						className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-1 px-3 rounded transition-colors"
					>
						-
					</button>
					<span className="text-lg font-semibold text-gray-800 min-w-[2rem] text-center">
						{item.quantity}
					</span>
					<button
						onClick={handleIncreaseQuantity}
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded transition-colors"
					>
						+
					</button>
				</div>
			</div>
			
			<div className="space-y-1 text-sm">
				{isCheese ? (
					<>
						<p className="text-gray-700">Unit Price: {item.product.unit}{item.product.price.toFixed(2)}</p>
						<p className="text-gray-700">
							Quantity: {item.quantity} ({paidCheeseUnits} paid + {freeCheeseUnits} free)
						</p>
						<p className="text-gray-700">
							Item cost (before savings): {item.product.unit}{(item.product.price * (paidCheeseUnits + freeCheeseUnits)).toFixed(2)}
						</p>
						<p className="text-red-600 font-medium">
							You saved: {item.product.unit}{displayCheeseSaved.toFixed(2)}
						</p>
					</>
				) : (
					<>
						<p className="text-gray-700">
							Item price {item.product.unit}{item.product.price.toFixed(2)} × {item.quantity} = {item.product.unit}{item.itemPrice.toFixed(2)}
						</p>
						{breadHalfNote && (
							<p className="text-gray-500">{breadHalfNote}</p>
						)}
						{item.savings > 0 && (
							<div className="space-y-0.5">
								<p className="text-red-600 font-medium">
									Savings {item.product.unit}{item.savings.toFixed(2)}
								</p>
							</div>
						)}
						<p className="text-lg font-semibold text-gray-800">
							Item cost {item.product.unit}{item.itemCost.toFixed(2)}
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default CartItem;

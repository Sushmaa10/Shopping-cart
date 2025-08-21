import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem, Product, SpecialOffer } from '../types';
import { specialOffers as defaultOffers } from '../data/products';

const initialState: CartState = {
	items: [],
	subtotal: 0,
	totalSavings: 0,
	totalAmount: 0,
	offers: defaultOffers,
};

function computeSavingsForItem(item: CartItem, items: CartItem[], offers: SpecialOffer[]): number {
	const product = item.product;
	const quantity = item.quantity;
	let savings = 0;

	for (const offer of offers) {
		
		if (offer.productId === product.id) {
			if (offer.type === 'buyOneGetOneFree') {
				// For BOGO 1:1, each paid unit gets one free unit
				const freeUnits = quantity;
				savings += freeUnits * product.price;
			}
			if (offer.type === 'percentageDiscount' && offer.discountPercentage) {
				savings += (product.price * quantity * offer.discountPercentage) / 100;
			}
		}

		
		if (offer.type === 'halfPrice' && offer.relatedProductId === product.id) {
			const trigger = items.find(ci => ci.product.id === offer.productId);
			if (trigger && trigger.quantity > 0 && quantity > 0) {
				const eligiblePairs = Math.min(trigger.quantity, quantity);
				savings += eligiblePairs * (product.price * 0.5);
			}
		}
	}

	return savings;
}

function recomputeCart(state: CartState) {
	for (const item of state.items) {
		item.itemPrice = item.product.price * item.quantity;
		item.savings = computeSavingsForItem(item, state.items, state.offers);
		item.itemCost = item.itemPrice - item.savings;
	}
	state.subtotal = state.items.reduce((sum, it) => sum + it.itemPrice, 0);
	state.totalSavings = state.items.reduce((sum, it) => sum + it.savings, 0);
	state.totalAmount = state.subtotal - state.totalSavings;
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<Product>) => {
			const product = action.payload;
			const existing = state.items.find(i => i.product.id === product.id);
			if (existing) {
				existing.quantity += 1;
			} else {
				state.items.push({
					product,
					quantity: 1,
					itemPrice: product.price,
					savings: 0,
					itemCost: product.price,
				});
			}
			recomputeCart(state);
		},
		removeItem: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const existing = state.items.find(i => i.product.id === id);
			if (!existing) return;
			if (existing.quantity > 1) {
				existing.quantity -= 1;
			} else {
				state.items = state.items.filter(i => i.product.id !== id);
			}
			recomputeCart(state);
		},
		setOffers: (state, action: PayloadAction<SpecialOffer[]>) => {
			state.offers = action.payload;
			recomputeCart(state);
		},
		clearCart: (state) => {
			state.items = [];
			recomputeCart(state);
		},
	},
});

export const { addItem, removeItem, clearCart, setOffers } = cartSlice.actions;
export default cartSlice.reducer;

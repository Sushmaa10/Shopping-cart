import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { products, specialOffers } from '../data/products';
import ProductCard from './ProductCard';
import CartItem from './CartItem';
import SpecialOffers from './SpecialOffers';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, subtotal, totalSavings, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Products Section */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Products</h2>
          <div className="space-y-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Special Offers */}
        <div className="mt-8">
          <SpecialOffers offers={specialOffers} />
        </div>
      </div>

      {/* Basket Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Basket</h2>
            {items.length > 0 && (
              <button
                onClick={handleClearCart}
                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Your basket is empty</p>
              <p className="text-gray-400 text-sm">Add some products to get started!</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>

              {/* Bill Summary */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700">Sub Total:</span>
                  <span className="text-lg font-semibold text-gray-800">
                    £ {subtotal.toFixed(2)}
                  </span>
                </div>
                
                {/* Removed explicit Savings row to show only Total Amount */}
                
                <div className="flex justify-between items-center pt-3 border-t">
                  <span className="text-xl font-bold text-gray-800">Total Amount:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    £ {subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

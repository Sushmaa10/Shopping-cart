import React from 'react';
import { SpecialOffer } from '../types';

interface SpecialOffersProps {
  offers: SpecialOffer[];
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ offers }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Special Offers</h3>
      <div className="space-y-3">
        {offers.map((offer) => (
          <div key={offer.id} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800 font-medium">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;

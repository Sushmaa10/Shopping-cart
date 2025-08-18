import { Product, SpecialOffer } from '../types';

export const products: Product[] = [
  {
    id: 'bread',
    name: 'Bread',
    price: 1.10,
    unit: '£',
    imageUrl: '/images/bread.jpg',
  },
  {
    id: 'milk',
    name: 'Milk',
    price: 0.50,
    unit: '£',
    imageUrl: '/images/milk.jpg',
  },
  {
    id: 'cheese',
    name: 'Cheese',
    price: 0.90,
    unit: '£',
    imageUrl: '/images/cheese.jpg',
  },
  {
    id: 'soup',
    name: 'Soup',
    price: 0.60,
    unit: '£',
    imageUrl: '/images/soup.jpg',
  },
  {
    id: 'butter',
    name: 'Butter',
    price: 1.20,
    unit: '£',
    imageUrl: '/images/butter.jpg',
  },
];

export const specialOffers: SpecialOffer[] = [
  {
    id: 'cheese-bogo',
    description: 'When you buy a Cheese, you get a second Cheese free!',
    type: 'buyOneGetOneFree',
    productId: 'cheese',
  },
  {
    id: 'soup-bread-half',
    description: 'When you buy a Soup, you get a half price Bread!',
    type: 'halfPrice',
    productId: 'soup',
    relatedProductId: 'bread',
  },
  {
    id: 'butter-discount',
    description: 'Get a third off Butter!',
    type: 'percentageDiscount',
    productId: 'butter',
    discountPercentage: 33.33,
  },
];

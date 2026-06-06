import React from 'react';
import ProductCard from './ProductCard';

const ProductCardListing = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 129.99,
      description: 'High-quality sound with active noise cancellation and 30-hour battery life.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 299.99,
      description: 'Advanced fitness tracking with heart rate monitor and 7-day battery.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Ultra HD Webcam',
      price: 159.99,
      description: '4K resolution webcam perfect for streaming and video conferencing.',
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Portable SSD 1TB',
      price: 89.99,
      description: 'Fast and reliable storage with USB 3.1 interface and compact design.',
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Mechanical Keyboard RGB',
      price: 149.99,
      description: 'Customizable RGB lighting with mechanical switches and aluminum frame.',
      image: 'https://images.unsplash.com/photo-1587829191301-f282c4b1c0b5?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Wireless Mouse Pro',
      price: 79.99,
      description: 'Ergonomic design with precision tracking and silent clicking technology.',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="product-listing">
          <div className="container">
      <div className="product-listing__header">
        <h2 className="product-listing__title">Featured Products</h2>
      </div>
      <div className="product-listing__grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        </div>
    </div>
  );
};

export default ProductCardListing;

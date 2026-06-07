import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <section className="product-card">

            <div className="product-card__image-wrapper">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-card__image"
                />
            </div>
            <div className="product-card__content">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__description">{product.description}</p>
                <div className="product-card__footer">
                    <span className="product-card__price">${product.price.toFixed(2)}</span>
                    <button
                        className={`btn btn--primary product-card__btn ${isAdded ? 'product-card__btn--added' : ''}`}
                        onClick={handleAddToCart}
                    >
                        {isAdded ? 'Added ✓' : 'Add to Cart'}
                    </button>
                </div>
            </div>

        </section>

    );
};

export default ProductCard;

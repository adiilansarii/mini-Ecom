const ProductCard = ({ product, onAddToCart }) => {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>

      <p className={isOutOfStock ? "out" : "in"}>
        {isOutOfStock ? "Out of stock" : "In stock"}
      </p>

      <button
        disabled={isOutOfStock}
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

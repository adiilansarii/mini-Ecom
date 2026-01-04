import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart }) => {
  if (!products.length) {
    return <p>No products found</p>;
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;

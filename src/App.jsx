import { useMemo, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { useCart } from "./hooks/useCart";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const { products, loading, error } = useProducts();
  const cartState = useCart();

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchText) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (sortOrder === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, searchText, selectedCategory, sortOrder]);

  const resetFilters = () => {
    setSearchText("");
    setSelectedCategory("all");
    setSortOrder("");
  };

  if (loading) return <p className="center">Loading products...</p>;
  if (error) return <p className="center">Something went wrong</p>;

  return (
    <div className="container">
      <h1>Mini E-Commerce</h1>

      <Filters
        products={products}
        searchText={searchText}
        setSearchText={setSearchText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        resetFilters={resetFilters}
      />

      <div className="layout">
        <ProductList
          products={filteredProducts}
          onAddToCart={cartState.addToCart}
        />

        <Cart {...cartState} />
      </div>
    </div>
  );
};

export default App;

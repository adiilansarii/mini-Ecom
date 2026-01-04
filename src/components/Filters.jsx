const Filters = ({
  products,
  searchText,
  setSearchText,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  resetFilters,
}) => {
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort by price</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>

      <button onClick={resetFilters}>Clear</button>
    </div>
  );
};

export default Filters;

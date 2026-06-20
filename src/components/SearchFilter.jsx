const SearchFilter = ({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-80 px-5 py-3 rounded-lg border border-gray-300 outline-none"
      />

      <div className="flex gap-3 flex-wrap">
        {["All", "Shirt", "Pant"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
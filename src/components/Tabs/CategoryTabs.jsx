import React from "react";

const CategoryTabs = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <div className="overflow-x-auto scrollbar-hide border-b border-gray-700">
      <div className="flex space-x-4 min-w-max px-2 py-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === category.id
                ? "bg-yellow-500 text-black"
                : "bg-gray-300 text-gray hover:bg-gray-700 hover:text-white"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;

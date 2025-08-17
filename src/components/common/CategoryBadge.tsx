import React from "react";

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const getBadgeClass = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "main course":
        return "bg-blue-100 text-blue-700";
      case "salad":
        return "bg-green-100 text-green-700";
      case "dessert":
        return "bg-pink-100 text-pink-700";
      case "beverage":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeClass(
        category,
      )}`}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;

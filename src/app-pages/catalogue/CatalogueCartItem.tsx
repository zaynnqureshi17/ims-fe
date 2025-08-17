"use client";

import CatalogueCard from "@/components/card/catalogue/CatalogueCard";

const CatalogueCartItem = () => {
  // Catalogue data
  const catalogueItems = [
    {
      imageUrl: "/static/catalogue-cart.svg",
      title: "Olive Oil",
      description: "Extra virgin - 1L bottle",
      price: 3.25,
      unit: "per bottle",
      stock: 12,
      supplier: "Local Bakery",
      inStock: true,
    },
    {
      imageUrl: "/static/catalogue-cart.svg",
      title: "Artisan Bread",
      description: "Whole wheat loaf - 800g",
      price: 3.25,
      unit: "per loaf",
      stock: 0,
      supplier: "Local Bakery",
      inStock: false,
    },
    {
      imageUrl: "/static/catalogue-cart.svg",
      title: "Cheddar Cheese",
      description: "Aged cheddar - 200g block",
      price: 4.5,
      unit: "per block",
      stock: 8,
      supplier: "Dairy Farm Co.",
      inStock: true,
    },
    {
      imageUrl: "/static/catalogue-cart.svg",
      title: "Cheddar Cheese",
      description: "Aged cheddar - 200g block",
      price: 4.5,
      unit: "per block",
      stock: 8,
      supplier: "Dairy Farm Co.",
      inStock: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {catalogueItems.map((item, index) => (
        <CatalogueCard
          key={index}
          {...item}
          onAddToPO={() => console.log(`Added ${item.title}`)}
        />
      ))}
    </div>
  );
};

export default CatalogueCartItem;

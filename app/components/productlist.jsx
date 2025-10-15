import React from "react";
import ProductItem from "./productitem.jsx";

export default function ProductList({ products }) {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12 text-lg">
        No courses available right now 
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ProductList from "../components/productlist.jsx";
import { products } from "../_util/productapi.js";

function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await products.getAll();
        setProductList(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
          Brand New
        </h2>
        <span className="text-primary flex items-center cursor-pointer hover:text-teal-500 transition duration-300 font-medium">
          View All Collection
          <ArrowRight id="see-all" className="h-5 w-5 ml-2" />
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <ProductList products={productList} />
      </div>
    </div>
  );
}

export default Product;

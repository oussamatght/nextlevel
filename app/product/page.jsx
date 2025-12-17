"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Star, GraduationCap, Clock } from "lucide-react";
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
    <div
      id="see-all"
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gray-50 min-h-screen relative"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Featured Courses
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Curated by experts to help you grow your skills faster.
          </p>
        </div>

        <a
          href="/see-all"
          className="flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-900 transition duration-300"
        >
          View All
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <GraduationCap className="text-indigo-700 w-8 h-8 mb-2" />
          <h3 className="text-xl font-semibold text-gray-900">Top Instructors</h3>
          <p className="text-gray-500 text-sm text-center">
            Learn from industry professionals and certified mentors.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <Star className="text-yellow-400 w-8 h-8 mb-2" />
          <h3 className="text-xl font-semibold text-gray-900">Best Rated</h3>
          <p className="text-gray-500 text-sm text-center">
            Courses rated 4.8★ and above by our learners.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
          <Clock className="text-indigo-700 w-8 h-8 mb-2" />
          <h3 className="text-xl font-semibold text-gray-900">Learn Anytime</h3>
          <p className="text-gray-500 text-sm text-center">
            Flexible learning that fits your schedule.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
        <ProductList products={productList} />
      </div>
    </div>
  );
}

export default Product;

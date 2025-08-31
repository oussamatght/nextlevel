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
    <div className="px-5 md:px-20 py-10">
      <h2 className="font-bold text-2xl mb-6 flex justify-between items-center">
        Brand New
        <span className="text-primary flex items-center cursor-pointer hover:text-teal-400 transition duration-300">
          View All Collection <ArrowRight  id="see-all" className="h-4 w-4 ml-1" />
        </span>
      </h2>

      <ProductList products={productList} />
    </div>
  );
}

export default Product;

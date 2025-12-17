"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/app/_util/productapi.js";
import Breadcrumb from "@/app/breadcremp/page";
import ProductBanner from "./_componenent/productbanner/page";
import ProductInfo from "./_componenent/proudectinfo/page";
import ProductList from "@/app/components/productlist";
import Animation from "@/app/components/animation ";

export default function ProductPage() {
  const { productid } = useParams();
  const [similarProducts, setSimilarProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await products.getById(productid);
        const prod = data.data[0];
        setProduct(prod);

        if (prod?.category) {
          const categoryData = await products.getByCategory(prod.category);
          const filtered = categoryData.data.filter((p) => p.id !== prod.id);
          setSimilarProducts(filtered);
        }
      } catch (err) {
        console.error("❌ Error fetching product:", err);
      }
    }

    if (productid) fetchProduct();
  }, [productid]);

  if (!product) return <Animation />;

  return (
    <div className="mb-12 px-6 sm:px-10 lg:px-20 py-8">
      <Breadcrumb products={product} />

      <div className="mt-8 grid md:grid-cols-2 gap-10">
        <ProductBanner pro={product} />
        <ProductInfo pro={product} />
      </div>

      <h2 className="text-3xl font-extrabold mt-16 mb-6 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
        Similar Courses
      </h2>

      <ProductList products={similarProducts} />
    </div>
  );
}

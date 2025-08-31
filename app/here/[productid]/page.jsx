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
  const [productcat, setProductCat] = useState([]);
  const [product, setProduct] = useState(null);
  


  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await products.getById(productid);
        const prod = data.data[0];
        setProduct(prod);

        if (prod?.category) {
          const categoryData = await products.getByCategory(prod.category);
          
          const similar = categoryData.data.filter(p => p.id !== prod.id);
          setProductCat(similar);
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (productid) fetchProduct();
  }, [productid]);

if (!product) { return <Animation />; }
  return (

    <div className="mb-4 py-8 px-10 ">
      <Breadcrumb products={product.data} />

      <div className="lg:mt-10 lg:grid lg:grid-cols-2 md:grid-cols-1 mt-5 gap-10">
        <ProductBanner pro={product} />
        <ProductInfo pro={product} />
      </div>

    <h2 className="text-3xl font-extrabold mt-10 mb-4 bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
  Similar Products
</h2>

      <ProductList products={productcat} />
    </div>
  );
}

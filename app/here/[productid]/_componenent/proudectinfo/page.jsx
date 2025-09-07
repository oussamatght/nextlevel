"use client";

import { useUser } from "@clerk/nextjs";
import { BadgeCheck, ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import CartAPI from "@/app/_util/cartapi";
import { CartContext } from "@/app/cartcontext/cartcontext.jsx";

export default function ProductInfo({ pro }) {
  const desc = pro?.discription?.[0]?.children?.[0]?.text ?? "No description";
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = async () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }

    const data = {
      data: {
        username: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        products: [pro?.id],
      },
    };

    try {
      await CartAPI.addToCart(data);
      alert("Product added to cart. Refresh the page to see updates.");

      setCart((prevCart) => {
        return prevCart ? [...prevCart, pro] : [pro];
      });
    } catch (error) {
      console.error("Error adding product to cart:", error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4 sm:p-8 md:flex md:space-x-6 md:space-y-0">
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{pro.title}</h2>
        <p className="text-sm sm:text-base text-gray-500 mt-1">{pro.category}</p>
        <p className="text-base sm:text-lg text-gray-700 mt-2">{desc}</p>
        <h2 className="text-2xl sm:text-3xl text-green-500 mt-3 font-semibold">${pro.price}</h2>

        <div className="flex items-center mt-2 text-sm sm:text-base">
          {pro?.delivery ? (
            <BadgeCheck className="w-5 h-5 text-green-500 mr-2" />
          ) : (
            <BadgeCheck className="w-5 h-5 text-red-500 mr-2" />
          )}
          <span className={`text-gray-500 ${pro?.delivery ? "text-green-600" : "text-red-500"}`}>
            {pro?.delivery ? "Eligible for FREE instant delivery" : "Not eligible for delivery"}
          </span>
        </div>

        <button
          className="mt-4 w-full md:w-auto flex items-center justify-center bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition font-medium"
          onClick={handleAddToCart}
        >
          <ShoppingCartIcon className="w-5 h-5 mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

"use client";

import { useUser } from "@clerk/nextjs";
import { BadgeCheck, ShoppingCartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import CartAPI from "@/app/_util/cartapi";
import { CartContext } from "@/app/cartcontext/cartcontext.jsx";

export default function ProductInfo({ pro }) {
  const desc =
    pro?.discription?.[0]?.children?.[0]?.text ??
    "No description available for this course.";

  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = async () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }

    const payload = {
      data: {
        username: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        products: [pro?.id],
      },
    };

    try {
      await CartAPI.addToCart(payload);
      window.location.href = "/carts";

      setCart((prev) => (prev ? [...prev, pro] : [pro]));
    } catch (error) {
      console.error("❌ Error adding product to cart:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-1">{pro.title}</h2>
        <p className="text-gray-500 text-sm mb-3">{pro.category}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">{desc}</p>

        <h3 className="text-2xl text-green-600 font-semibold mb-4">
          ${pro.price}
        </h3>

        <div className="flex items-center mb-4">
          <BadgeCheck
            className={`w-5 h-5 mr-2 ${
              pro.delivery ? "text-green-500" : "text-red-500"
            }`}
          />
          <span
            className={`text-sm ${
              pro.delivery ? "text-green-600" : "text-red-500"
            }`}
          >
            {pro.delivery
              ? "Eligible for instant digital access"
              : "Not available for instant delivery"}
          </span>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 w-full sm:w-auto flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition font-medium"
      >
        <ShoppingCartIcon className="w-5 h-5 mr-2" /> Add to Cart
      </button>
    </div>
  );
}

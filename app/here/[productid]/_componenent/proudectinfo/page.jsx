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
      const response = await CartAPI.addToCart(data);
      alert("Product added to cart please refresh the page and see the updated cart");
      
      setCart((prevCart) => {
        const newCart = prevCart ? [...prevCart, pro] : [pro];
        return newCart;
      });
    } catch (error) {
      console.error("Error adding product to cart:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2 className="text-[25px]">{pro.title}</h2>
      <p className="text-[16px] text-gray-400">{pro.category}</p>
      <p className="text-[20px]">{desc}</p>
      <h2 className="text-[32px] text-green-500 mt-3">${pro.price}</h2>
      <h2 className="text-[16px] text-gray-400">
        {pro?.delivery ? (
          <>
            <BadgeCheck className="w-5 h-7 inline-block mr-1 text-green-500" />
            Eligible for FREE instant delivery
          </>
        ) : (
          <>
            <BadgeCheck className="w-5 h-7 inline-block mr-1 text-red-500" />
            Not eligible for delivery
          </>
        )}
      </h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition flex items-center"
        onClick={handleAddToCart}
      >
        <ShoppingCartIcon className="w-5 h-7 mr-1" /> Add to Cart
      </button>
    </div>
  );
}

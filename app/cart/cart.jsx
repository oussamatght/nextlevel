"use client";

import React, { useContext } from "react";
import { CartContext } from "../cartcontext/cartcontext.jsx";
import Link from "next/link";

function Cart() {
  const { cart } = useContext(CartContext);

  let total = 0;

cart.forEach(cartItem => {
  if (cartItem.products && cartItem.products.length > 0) {
    cartItem.products.forEach(product => {
      const price = product.price || 0; 
      total += price;
    });
  }
});

console.log("Total price:", total);
  return (
    <div className="absolute top-7 right-10 w-[280px] max-h-[400px] bg-white border border-gray-200 rounded-xl shadow-lg overflow-auto p-5 z-50 animate-fadeIn">
      <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition transform hover:scale-110">
        <span className="sr-only">Close cart</span>
        ✕
      </button>

      <ul className="space-y-4">
        {cart?.length === 0 && (
          <p className="text-center text-gray-500 text-sm">
            Your cart is empty
          </p>
        )}
        {cart?.map((cartItem, cartIndex) =>
          cartItem.products?.map((product, productIndex) =>
            product.banner?.map((bannerItem, bannerIndex) => (
              <li
                key={`${cartIndex}-${productIndex}-${bannerIndex}`}
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition"
              >
                <img
                  src={bannerItem.url}
                  alt={bannerItem.title || "product image"}
                  className="w-16 h-16 rounded-lg object-cover border"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 line-clamp-1">
                    {product.category}
                  </p>
                  <p className="text-sm font-medium text-green-500 mt-1">
                    ${product.price}
                  </p>
                </div>
              </li>
            ))
          )
        )}
      </ul>

      <div className="mt-5 border-t border-gray-200 pt-4 space-y-3">
        <div className="flex justify-between text-sm font-semibold text-indigo-900">
          <span>Total:</span>
          <span className="text-green-500">${total}</span>
        </div>

        <Link
          href="/carts"
          className="block w-full text-center rounded-md border border-indigo-900 py-2 text-indigo-900 font-medium transition hover:bg-indigo-50"
        >
          View Cart
        </Link>

        <Link
          href={`/CheckoutFor?total=${total}`}
          className="block w-full text-center rounded-md bg-indigo-900 py-2 text-white font-medium transition hover:bg-indigo-700"
        >
          Checkout
        </Link>

        <Link
          href="#see-all"
          className="block text-center text-indigo-900 text-sm underline underline-offset-4 transition hover:text-indigo-600"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;

"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../cartcontext/cartcontext.jsx";
import Link from "next/link";

function Cart() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(true);

  const total = cart.reduce((acc, cartItem) => {
    if (!cartItem.products) return acc;
    return (
      acc +
      cartItem.products.reduce(
        (sum, product) => sum + (product.price || 0),
        0
      )
    );
  }, 0);

  if (!isOpen) return null;

  return (
    <div className="relative w-full max-w-md mx-auto mt-6 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[80vh] transform transition-all duration-300 hover:shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 bg-gray-50/50">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          🛒 Your Cart
        </h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-red-500 transition transform hover:scale-110"
        >
          ✕
        </button>
      </div>

      {/* Product List */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {cart?.length === 0 ? (
          <p className="text-center text-gray-500 text-sm py-10 animate-fadeIn">
            Your cart is empty 🛍️
          </p>
        ) : (
          cart.map((cartItem, cIndex) =>
            cartItem.products?.map((product, pIndex) =>
              product.banner?.map((banner, bIndex) => (
                <div
                  key={`${cIndex}-${pIndex}-${bIndex}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                >
                  <img
                    src={banner.url}
                    alt={banner.title || "product image"}
                    className="w-14 h-14 rounded-lg object-cover border border-gray-200"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">
                      {product.category}
                    </p>
                    <p className="text-sm font-medium text-indigo-600 mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )
          )
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-100 bg-white space-y-3">
        <div className="flex justify-between text-sm font-semibold text-gray-900">
          <span>Total:</span>
          <span className="text-indigo-600">${total.toFixed(2)}</span>
        </div>

        <Link
          href="/carts"
          className="block w-full text-center rounded-xl border border-indigo-900 py-2 text-indigo-900 font-medium text-sm transition hover:bg-indigo-50"
        >
          View Cart
        </Link>

        <Link
          href={`/CheckoutFor?total=${total}`}
          className="block w-full text-center rounded-xl bg-indigo-900 py-2 text-white font-medium text-sm transition hover:bg-indigo-700"
        >
          Checkout
        </Link>

        <Link
          href="/"
          className="block text-center text-indigo-900 text-xs underline underline-offset-4 hover:text-indigo-600"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;    

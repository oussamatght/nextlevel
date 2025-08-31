"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../cartcontext/cartcontext.jsx";
import Link from "next/link";

function Cart() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(true);

  // Calculate total
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
    <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-4 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col max-h-[80vh]">
      
      {/* Cart Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 flex-shrink-0">
        <h2 className="text-lg font-bold text-gray-900 truncate">Your Cart</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-red-500 transition transform hover:scale-110"
        >
          <span className="sr-only">Close cart</span>✕
        </button>
      </div>

      {/* Product list */}
      <ul className="flex-1 overflow-y-auto divide-y divide-gray-100 px-4 py-3 space-y-2">
        {cart?.length === 0 ? (
          <p className="text-center text-gray-500 text-sm">Your cart is empty</p>
        ) : (
          cart?.map((cartItem, cIndex) =>
            cartItem.products?.map((product, pIndex) =>
              product.banner?.map((banner, bIndex) => (
                <li
                  key={`${cIndex}-${pIndex}-${bIndex}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition"
                >
                  <img
                    src={banner.url}
                    alt={banner.title || "product image"}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover border"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {product.category}
                    </p>
                    <p className="text-sm sm:text-base font-medium text-green-500 mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </li>
              ))
            )
          )
        )}
      </ul>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-200 flex-shrink-0 space-y-2">
        <div className="flex justify-between text-sm sm:text-base font-semibold text-gray-900">
          <span>Total:</span>
          <span className="text-green-500">${total.toFixed(2)}</span>
        </div>

        <Link
          href="/carts"
          className="block w-full text-center rounded-md border border-indigo-900 py-2 text-indigo-900 font-medium text-sm sm:text-base transition hover:bg-indigo-50"
        >
          View Cart
        </Link>

        <Link
          href={`/CheckoutFor?total=${total}`}
          className="block w-full text-center rounded-md bg-indigo-900 py-2 text-white font-medium text-sm sm:text-base transition hover:bg-indigo-700"
        >
          Checkout
        </Link>

        <Link
          href="#see-all"
          className="block text-center text-indigo-900 text-xs sm:text-sm underline underline-offset-2 transition hover:text-indigo-600"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;

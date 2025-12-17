"use client";

import React, { useContext } from "react";
import { CartContext } from "../cartcontext/cartcontext.jsx";
import CartAPI from "../_util/cartapi";
import Link from "next/link";

function Carts() {
  const { cart, setCart } = useContext(CartContext);

  const handleDelete = async (documentId) => {
    try {
      const data = await CartAPI.removeCart(documentId);
      setCart((prev) => prev.filter((c) => c.documentId !== documentId));
    } catch (err) {
      console.error("Error deleting cart:", err);
    }
  };

  const total = cart.reduce(
    (sum, cartItem) =>
      sum +
      (cartItem.products?.reduce(
        (pSum, product) => pSum + (product.price || 0),
        0
      ) || 0),
    0
  );

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            🛒 Your Shopping Cart
          </h1>
          <p className="mt-2 text-gray-600">Review your items before checkout</p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((cartItem) =>
            (cartItem.products || []).map((product, idx) =>
              (product.banner || []).map((bannerItem, bIdx) => (
                <li
                  key={`${cartItem.documentId}-${product.id}-${bIdx}`}
                  className="flex flex-col bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow"
                >
                  <img
                    src={bannerItem.url}
                    alt={bannerItem.title || "product image"}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-green-600 font-bold text-lg">${product.price}</span>
                      <button
                        onClick={() => handleDelete(cartItem.documentId)}
                        className="text-gray-400 hover:text-red-600 transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 
                            1.022.166m-1.022-.165L18.16 19.673a2.25 
                            2.25 0 01-2.244 2.077H8.084a2.25 
                            2.25 0 01-2.244-2.077L4.772 
                            5.79m14.456 0a48.108 48.108 
                            0 00-3.478-.397m-12 
                            .562c.34-.059.68-.114 
                            1.022-.165m0 0a48.11 48.11 
                            0 013.478-.397m7.5 
                            0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 
                            51.964 0 00-3.32 
                            0c-1.18.037-2.09 
                            1.022-2.09 
                            2.201v.916m7.5 
                            0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))
            )
          )}
        </ul>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md">
          <div className="text-xl font-semibold text-gray-800">
            Total: <span className="text-green-600">${total}</span>
          </div>
          <a
            href={`/CheckoutFor?total=${total}`}
            className="mt-4 md:mt-0 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Checkout
          </a>
        </div>

        <p className="mt-6 text-center text-red-600 text-sm">
          NOTE: All items will be sent via Email
        </p>
      </div>
    </section>
  );
}

export default Carts;

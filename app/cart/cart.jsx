"use client";

import React, { useContext } from "react";
import { CartContext } from "../cartcontext/cartcontext.jsx";
import CartAPI from "../_util/cartapi";
import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";

export default function Carts() {
  const { cart, setCart } = useContext(CartContext);

  const handleDelete = async (documentId) => {
    try {
      await CartAPI.removeCart(documentId);
      setCart((prev) => prev.filter((c) => c.documentId !== documentId));
    } catch (err) {
      console.error("Error deleting cart:", err);
    }
  };

  const total = cart.reduce(
    (sum, item) =>
      sum +
      (item.products?.reduce(
        (pSum, product) => pSum + (product.price || 0),
        0
      ) || 0),
    0
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-800 flex justify-center items-center gap-2">
            <ShoppingCart className="w-8 h-8 text-indigo-600" />
            Your Shopping Cart
          </h1>
          <p className="mt-2 text-gray-600">
            Review your selected courses before proceeding to checkout.
          </p>
        </header>

        {/* Cart List */}
        {cart.length > 0 ? (
          <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cart.map((cartItem) =>
                (cartItem.products || []).map((product) =>
                  (product.banner || []).map((banner, idx) => (
                    <li
                      key={`${cartItem.documentId}-${product.id}-${idx}`}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden"
                    >
                      <img
                        src={banner.url}
                        alt={banner.title || "Product Image"}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-5 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
                            {product.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3">
                            {product.category}
                          </p>
                          <p className="text-lg font-bold text-green-600">
                            ${product.price}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDelete(cartItem.documentId)}
                          className="mt-4 inline-flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition"
                        >
                          <Trash2 className="w-5 h-5" /> Remove
                        </button>
                      </div>
                    </li>
                  ))
                )
              )}
            </ul>

            {/* Total + Checkout */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center bg-white rounded-xl shadow-md p-6 border border-indigo-100">
              <div className="text-2xl font-semibold text-gray-800">
                Total: <span className="text-indigo-600">${total}</span>
              </div>

              <Link
                href={`/CheckoutFor?total=${total}`}
                className="mt-4 md:mt-0 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition"
              >
                Proceed to Checkout
              </Link>
            </div>

            <p className="mt-6 text-center text-gray-500 text-sm">
              📨 All purchased courses will be sent to your email instantly.
            </p>
          </>
        ) : (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400" />
            <p className="mt-4 text-lg text-gray-600">
              Your cart is currently empty.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Browse Courses
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

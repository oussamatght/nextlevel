"use client";

import React, { useContext, useState } from "react";
import { CartContext } from "../cartcontext/cartcontext.jsx";
import CartAPI from "../_util/cartapi";
import Link from "next/link";
import { Trash2, ShoppingCart, XCircle } from "lucide-react";

export default function Carts() {
  const { cart, setCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  // Delete one item
  const handleDelete = async (documentId) => {
    try {
      await CartAPI.removeCart(documentId);
      setCart((prev) => prev.filter((c) => c.documentId !== documentId));
    } catch (err) {
      console.error("Error deleting cart:", err);
    }
  };

  // Delete all items
  const handleClearAll = () => {
    setCart([]);
  };

  // Quantity handler
  const handleQuantityChange = (id, value) => {
    if (value < 1) return;
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  // Total calculation
  const total = cart.reduce((sum, item) => {
    return (
      sum +
      (item.products?.reduce((pSum, product) => {
        const quantity = quantities[product.id] || 1;
        return pSum + (product.price || 0) * quantity;
      }, 0) || 0)
    );
  }, 0);

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
            Manage your selected items before proceeding to checkout.
          </p>
        </header>

        {/* Cart List */}
        {cart.length > 0 ? (
          <>
            <div className="flex justify-end mb-4">
              <button
                onClick={handleClearAll}
                className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
              >
                <XCircle className="w-5 h-5" /> Clear All
              </button>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cart.map((cartItem) =>
                (cartItem.products || []).map((product) =>
                  (product.banner || []).map((banner, idx) => (
                    <li
                      key={`${cartItem.documentId}-${product.id}-${idx}`}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden border border-gray-100"
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

                          <div className="flex justify-between items-center mb-3">
                            <p className="text-lg font-bold text-green-600">
                              ${product.price}
                            </p>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    product.id,
                                    (quantities[product.id] || 1) - 1
                                  )
                                }
                                className="px-2 py-1 border rounded-lg hover:bg-gray-100"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={quantities[product.id] || 1}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    product.id,
                                    Number(e.target.value)
                                  )
                                }
                                className="w-12 text-center border rounded-md"
                              />
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    product.id,
                                    (quantities[product.id] || 1) + 1
                                  )
                                }
                                className="px-2 py-1 border rounded-lg hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDelete(cartItem.documentId)}
                          className="mt-3 inline-flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition"
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

              <div className="flex gap-4 mt-4 md:mt-0">
                <Link
                  href="/"
                  className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl transition"
                >
                  Continue Shopping
                </Link>

                <Link
                  href={`/CheckoutFor?total=${total}`}
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>

            <p className="mt-6 text-center text-gray-500 text-sm">
              📨 All purchased items will be delivered instantly to your email.
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
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

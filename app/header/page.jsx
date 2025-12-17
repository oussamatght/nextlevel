"use client";

import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ShoppingCartIcon } from "lucide-react";
import { CartContext } from "@/app/cartcontext/cartcontext.jsx";
import CartAPI from "../_util/cartapi";
import { useUser } from "@clerk/nextjs";
import Cart from "@/app/cart/cart.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) fetchCartItems();
  }, [isSignedIn]);

  const fetchCartItems = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    try {
      const response = await CartAPI.getCartItems(user.primaryEmailAddress.emailAddress);
      setCart(response.data || []);
    } catch (error) {
      console.error("Error fetching cart items:", error.response?.data || error.message);
    }
  };

  return (
    <header className="bg-white dark:bg-indigo-900 shadow-md  w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logoipsum-386.svg" alt="Logo" width={32} height={32} />
          <span className="text-xl font-bold text-indigo-900 dark:text-white">
            NextLevel Academy
          </span>
        </Link>

      
        <div className="flex items-center gap-4 relative">
            <nav className="hidden md:flex gap-6 font-semibold dark:text-white text-indigo-900 text-center">
          <Link href="/">Home</Link>
          <a href="#see-all">Services</a>
          <Link href="#footer">About Us</Link>
        </nav>

          <button
            onClick={() => setCartIsOpen(!cartIsOpen)}
            className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer" />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </button>
          <AnimatePresence>
            {cartIsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 top-12 z-50"
              >
                <Cart />
              </motion.div>
            )}
          </AnimatePresence>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuIsOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-max-height duration-500 bg-white dark:bg-gray-900 ${
          menuIsOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 py-4 px-4 text-right text-indigo-900 dark:text-white  font-semibold">
          <Link href="/">Home</Link>
          <a href="#see-all">Services</a>
          <Link href="#footer">About Us</Link>
        </nav>
      </div>
    </header>
  );
}

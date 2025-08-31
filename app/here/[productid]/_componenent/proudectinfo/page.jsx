"use client";

import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ShoppingCartIcon, MenuIcon, XIcon } from "lucide-react";
import { CartContext } from "@/app/cartcontext/cartcontext.jsx";
 import CartAPI from "@/app/_util/cartapi.js";

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
    <header className="bg-white dark:bg-indigo-900 shadow-md rounded-b-2xl w-full fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logoipsum-386.svg" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-indigo-900 dark:text-white">
            NextLevel Academy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-semibold text-indigo-900 dark:text-white">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <a href="#see-all" className="hover:text-yellow-400 transition">Services</a>
          <Link href="#footer" className="hover:text-yellow-400 transition">About Us</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 relative">
          <button
            onClick={() => setCartIsOpen(!cartIsOpen)}
            className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <ShoppingCartIcon className="w-6 h-6" />
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            {menuIsOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-indigo-900"
          >
            <nav className="flex flex-col gap-4 py-4 px-6 text-right text-indigo-900 dark:text-white font-semibold">
              <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
              <a href="#see-all" className="hover:text-yellow-400 transition">Services</a>
              <Link href="#footer" className="hover:text-yellow-400 transition">About Us</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

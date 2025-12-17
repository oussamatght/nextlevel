"use client";
import React, { createContext, useState, useEffect } from "react";
import CartAPI from "../_util/cartapi";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const email = "oussamatght6@gmail.com"; 

  useEffect(() => {
    const fetchCart = async () => {
      const response = await CartAPI.getCartItems(email);
      setCart(response?.data || []); 
    };
    fetchCart();
  }, [email]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

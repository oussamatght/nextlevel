"use client";

import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Header from "./header/page.jsx";
import Footer from "./footer/page.jsx";
import "./globals.css";
import { CartContext } from "./cartcontext/cartcontext.jsx";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <CartContext.Provider value={{ cart, setCart }}>

            <SignedIn>
            <Header />
              <main>{children}</main>
              <Footer />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>

          </CartContext.Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}

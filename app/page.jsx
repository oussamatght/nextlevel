"use client";

import Hero from "./hero/page.jsx";
import Product from "./product/page.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />

        <Product />

      <Testimonials />
    </div>
  );
}

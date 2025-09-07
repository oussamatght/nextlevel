import React from "react";
import { ChevronDownIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          All Your Digital Products are just one{" "}
          <span className="text-yellow-300">click</span> away
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto">
          Explore state-of-the-art digital products and take your skills to the next level.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#see-all"
            className="inline-block bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition"
          >
            Get Started
          </a>
          <a
            href="https://github.com/oussamatght/nextlevel/tree/main"
            className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition"
          >
            Learn More
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-10 h-10 text-white" />
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import { ChevronDownIcon, PlayCircle, BookOpen, Laptop, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-950 text-white min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Level Up Your Future with{" "}
          <span className="text-yellow-300">Digital Courses</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Learn new skills, master your passions, and unlock opportunities with expert-led online courses.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#see-all"
            className="inline-flex items-center justify-center gap-2 bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
          >
            <PlayCircle className="w-5 h-5" />
            Get Started
          </a>
          <a
            href="https://github.com/oussamatght/nextlevel/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-200 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-yellow-300" /> 500+ Courses
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="w-4 h-4 text-yellow-300" /> Expert Instructors
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-yellow-300" /> 10k+ Learners
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-10 h-10 text-yellow-300" />
        </div>
      </div>
    </section>
  );
}

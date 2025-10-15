"use client";

import React from "react";
import {
  ChevronDownIcon,
  PlayCircle,
  BookOpen,
  Laptop,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-950 text-white flex items-center overflow-hidden min-h-[90vh]">
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 grid md:grid-cols-2 items-center gap-10 z-10">
        {/* 🧠 Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Master <span className="text-yellow-300">IT & Digital Skills</span>{" "}
            for the Future
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-lg mx-auto md:mx-0">
            Learn programming, AI, cloud computing, and more with hands-on
            courses designed for modern learners.
          </p>

          {/* 🎯 CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#see-all"
              className="inline-flex items-center justify-center gap-2 bg-yellow-300 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              <PlayCircle className="w-5 h-5" />
              Start Learning
            </a>
            <a
              href="https://github.com/oussamatght/nextlevel/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition duration-300 transform hover:scale-105"
            >
              Explore Platform
            </a>
          </div>

          {/* ⚙️ Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300 text-sm mt-8">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-yellow-300" /> 500+ Courses
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-yellow-300" /> Expert Mentors
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-300" /> 10k+ Learners
            </div>
          </div>
        </div>

        {/* 💻 Right Visuals */}
        <div className="relative flex justify-center md:justify-end">
          {/* Background glow */}
          <div className="absolute -inset-10 bg-indigo-500/20 blur-3xl rounded-full"></div>

          {/* Floating image grid - all tech images, no people */}
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              alt="Circuit board close-up"
              className="rounded-2xl shadow-lg w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 object-cover hover:scale-105 transition duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80"
              alt="Laptop workspace with code"
              className="rounded-2xl shadow-lg w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 object-cover hover:scale-105 transition duration-500 mt-6"
            />
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Cloud computing technology"
              className="rounded-2xl shadow-lg w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 object-cover hover:scale-105 transition duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
              alt="Cybersecurity concept with lock"
              className="rounded-2xl shadow-lg w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 object-cover hover:scale-105 transition duration-500 mt-6"
            />
          </div>
        </div>
      </div>

      {/* ⬇️ Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="w-10 h-10 text-yellow-300" />
      </div>
    </section>
  );
}

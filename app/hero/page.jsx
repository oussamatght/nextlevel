"use client";

import React from "react";
import {
  ChevronDownIcon,
  PlayCircle,
  BookOpen,
  Laptop,
  Code,
  Cpu,
  Cloud,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-950 text-white min-h-[95vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Subtle patterned overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      <div className="absolute -top-10 left-0 w-40 sm:w-60 opacity-40 animate-float-slow">
        <img
          src="https://images.unsplash.com/photo-1581091215367-59ab6c6dbaeb?auto=format&fit=crop&w=800&q=80"
          alt="Laptop coding screen"
          className="rounded-3xl shadow-2xl"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-44 sm:w-64 opacity-40 animate-float">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          alt="Tech workspace"
          className="rounded-3xl shadow-2xl"
        />
      </div>

      <div className="relative z-10 text-center px-6 sm:px-10 lg:px-20 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Master <span className="text-yellow-300">IT & Digital Skills</span>{" "}
          for the Future
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
          Learn programming, AI, cloud computing, and more with hands-on
          courses designed for modern learners.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
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

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <button className="bg-indigo-800 border border-indigo-600 px-5 py-2 rounded-full hover:bg-yellow-300 hover:text-indigo-900 transition">
            <Code className="inline w-4 h-4 mr-1" /> Web Development
          </button>
          <button className="bg-indigo-800 border border-indigo-600 px-5 py-2 rounded-full hover:bg-yellow-300 hover:text-indigo-900 transition">
            <Cpu className="inline w-4 h-4 mr-1" /> AI & Data Science
          </button>
          <button className="bg-indigo-800 border border-indigo-600 px-5 py-2 rounded-full hover:bg-yellow-300 hover:text-indigo-900 transition">
            <Cloud className="inline w-4 h-4 mr-1" /> Cloud Computing
          </button>
          <button className="bg-indigo-800 border border-indigo-600 px-5 py-2 rounded-full hover:bg-yellow-300 hover:text-indigo-900 transition">
            <Laptop className="inline w-4 h-4 mr-1" /> Cybersecurity
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-yellow-300" /> 500+ Courses
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="w-4 h-4 text-yellow-300" /> Expert Mentors
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-yellow-300" /> Real Projects
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-yellow-300" /> Lifetime Access
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="w-10 h-10 text-yellow-300" />
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

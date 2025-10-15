"use client";

import React from "react";
import {
  ChevronDownIcon,
  PlayCircle,
  BookOpen,
  Laptop,
  Users,
  Globe,
  Code2,
  MonitorSmartphone,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-950 text-white flex items-center overflow-hidden min-h-[90vh]">
      <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 grid md:grid-cols-2 items-center gap-10 z-10">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Master the Future with{" "}
            <span className="text-yellow-300">Tech & Digital Skills</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-lg mx-auto md:mx-0">
            Learn coding, design, AI, marketing, and more from industry experts.
            Build real-world skills that shape your career.
          </p>

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

          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300 text-sm mt-8">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-yellow-300" /> 500+ Courses
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-yellow-300" /> Expert Instructors
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-300" /> 10k+ Students
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute -inset-10 bg-indigo-500/20 blur-3xl rounded-full"></div>

          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Learning Together"
              className="rounded-2xl shadow-lg w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 object-cover hover:scale-105 transition duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Programming Workspace"
              className="rounded-2xl shadow-lg w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 object-cover hover:scale-105 transition duration-500 mt-6"
            />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
              alt="Laptop Coding"
              className="rounded-2xl shadow-lg w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 object-cover hover:scale-105 transition duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Team Collaboration"
              className="rounded-2xl shadow-lg w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 object-cover hover:scale-105 transition duration-500 mt-6"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-indigo-800/60 backdrop-blur-md border border-indigo-700 rounded-full p-3">
            <Code2 className="text-yellow-300 w-6 h-6" />
          </div>
          <div className="absolute -top-6 -right-6 bg-indigo-800/60 backdrop-blur-md border border-indigo-700 rounded-full p-3">
            <Globe className="text-yellow-300 w-6 h-6" />
          </div>
          <div className="absolute bottom-8 right-10 bg-indigo-800/60 backdrop-blur-md border border-indigo-700 rounded-full p-3">
            <MonitorSmartphone className="text-yellow-300 w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="w-10 h-10 text-yellow-300" />
      </div>
    </section>
  );
}

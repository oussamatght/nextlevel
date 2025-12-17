"use client";

import React from "react";
import { List, Star, Clock, BookOpen, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductItem({ product }) {
  const mainImage =
    product.banner && product.banner.length > 0
      ? product.banner[0].url
      : "/placeholder-course.jpg";

  const rating = (product.rating || 4.8).toFixed(1);
  const lessons = product.lessons || Math.floor(Math.random() * 50 + 10);
  const duration = product.duration || `${Math.floor(Math.random() * 8 + 2)}h`;
  const instructor = product.instructor || "John Doe";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full h-[190px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-yellow-400 text-indigo-900 text-xs font-bold px-2 py-1 rounded-lg shadow">
          Bestseller
        </div>
      </div>

      <div className="p-5">
        {/* Price + Rating */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-bold text-green-600">${product.price}</p>
          <div className="flex items-center text-yellow-400 text-sm font-semibold">
            <Star className="w-4 h-4 fill-yellow-400 mr-1" /> {rating}
          </div>
        </div>

        <h3 className="text-[18px] font-semibold text-gray-900 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 mb-3">By {instructor}</p>

        {/* Course Meta */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            {lessons} Lessons
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-indigo-600" />
            {duration}
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center gap-1 text-xs text-gray-400 mb-5">
          <List className="w-4 h-4 text-indigo-600" />
          {product.category}
        </div>

        <Link
          href={`/here/${product.id}`}
          className="w-full flex justify-center items-center gap-2 bg-indigo-900 text-white py-2 rounded-lg font-medium hover:bg-indigo-800 transition-all duration-300 group-hover:bg-indigo-700"
        >
          Enroll Now
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-gray-50 border-t border-gray-100 text-gray-500 text-xs py-2 text-center">
        <Users className="inline w-3 h-3 mr-1 text-indigo-600" />
        {Math.floor(Math.random() * 5000 + 1000)} students
      </div>
    </div>
  );
}

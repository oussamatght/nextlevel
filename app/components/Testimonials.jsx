"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      text: "The courses on this platform completely transformed my career. The instructors are world-class and the content is practical.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer",
      text: "I learned React, Node.js, and advanced APIs here. Now I’m working as a remote developer thanks to these amazing resources!",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      name: "Aisha Benali",
      role: "Digital Marketer",
      text: "Love the learning experience! The lessons are bite-sized, interactive, and very easy to follow.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our Students Say
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Join thousands of learners who’ve upgraded their careers through our
          platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <Quote className="text-indigo-700 w-6 h-6 mb-3" />
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

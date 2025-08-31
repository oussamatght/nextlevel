"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ).then(
      () => { setSuccess(true); setFormData({ user_name: "", user_email: "", message: "" }); },
      () => setSuccess(false)
    );
  };

  return (
    <footer className="bg-indigo-900 text-white py-12 px-6">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-200 mb-6">
            Send us a message and we will get back to you as soon as possible!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-indigo-700 border border-indigo-600 text-white focus:ring-2 focus:ring-yellow-300"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-indigo-700 border border-indigo-600 text-white focus:ring-2 focus:ring-yellow-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded-lg bg-indigo-700 border border-indigo-600 text-white focus:ring-2 focus:ring-yellow-300"
              required
            />
            <button className="bg-yellow-300 text-indigo-900 hover:bg-yellow-400 font-semibold px-6 py-3 rounded-lg transition">
              Send Message
            </button>
          </form>
          {success === true && <p className="text-green-400 mt-2">Message sent successfully!</p>}
          {success === false && <p className="text-red-400 mt-2">Failed to send message.</p>}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">Email: <a href="mailto:oussamatght6@gmail.com" className="underline">oussamatght6@gmail.com</a></p>
          <p className="mb-2">Phone: +213 07991512</p>
        </div>
      </div>

      <div className="text-center mt-12 space-x-6">
        <a href="/" className="hover:underline">Home</a>
        <a href="#see-all" className="hover:underline">Services</a>
        <a href="#footer" className="hover:underline">About Us</a>
      </div>

      <p className="text-center text-gray-300 mt-6">&copy; 2025 NextLevel Academy. All rights reserved.</p>
    </footer>
  );
}

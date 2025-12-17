"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        () => setSuccess(false)
      );
  };

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-indigo-950 to-indigo-800 text-white pt-16 pb-10 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.1),_transparent_70%)]"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 z-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6 text-sm">
            Have questions or suggestions? Send us a message and we’ll respond
            soon!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-indigo-700/40 border border-indigo-600 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-300 outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-indigo-700/40 border border-indigo-600 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-300 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded-lg bg-indigo-700/40 border border-indigo-600 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-300 outline-none"
              required
            />
            <button className="bg-yellow-300 text-indigo-900 hover:bg-yellow-400 font-semibold px-6 py-3 rounded-lg transition">
              Send Message
            </button>
          </form>
          {success === true && (
            <p className="text-green-400 mt-3 text-sm">
              ✅ Message sent successfully!
            </p>
          )}
          {success === false && (
            <p className="text-green-400 mt-3 text-sm">
              ✅ Message sent successfully!
            </p>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-3 text-gray-300 text-sm">
            <Mail className="inline w-4 h-4 mr-2 text-yellow-300" />
            <a
              href="mailto:oussamatght6@gmail.com"
              className="underline hover:text-yellow-300 transition"
            >
              oussamatght6@gmail.com
            </a>
          </p>
          <p className="mb-3 text-gray-300 text-sm">📞 +213 0799711512</p>
          <p className="mb-3 text-gray-300 text-sm">
             Algiers, Algeria (Remote)
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-indigo-900 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-indigo-900 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-indigo-900 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-indigo-900 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#see-all" className="hover:text-yellow-300 transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#footer" className="hover:text-yellow-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-indigo-700/50 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">NextLevel Academy</span>.  
        All rights reserved.
      </div>
    </footer>
  );
}

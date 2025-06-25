"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/slid-1.jpg",
  "/donate.jpg", 
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-black py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-indigo-800 mb-6"
          >
            Help Us Make a Difference
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-700 text-lg mb-8"
          >
            Every contribution counts. Join us in supporting causes that matter.
            Your donation can bring a smile and spark change.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/donate"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
            >
              Donate Now
            </Link>
            <Link
              href="/about"
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="flex-1 relative w-full max-w-[500px] h-[350px] rounded-xl overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full"
            >
              <Image
                src={slides[current]}
                alt="Donation Hero"
                width={500}
                height={400}
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Manual Controls (Optional) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  current === idx ? "bg-indigo-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

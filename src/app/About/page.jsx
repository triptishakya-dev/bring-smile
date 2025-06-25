"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            We are on a mission to change lives—one donation at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="https://images.pexels.com/photos/7156157/pexels-photo-7156157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Add this to your `public` folder
            alt="Our Mission"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At DonateKind, we aim to create a platform that empowers
              individuals to contribute toward humanitarian and social causes.
              We work closely with NGOs, grassroots movements, and volunteers to
              bring real change through donations and awareness.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where no one is left behind due to lack of
              resources. Our platform helps ensure that essential needs like
              food, education, healthcare, and clean water reach those who need
              them most.
            </p>
          </div>
          <Image
            src="https://images.pexels.com/photos/7345395/pexels-photo-7345395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Add this to your `public` folder
            alt="Our Vision"
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Impact Stats */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-3xl font-bold text-indigo-600">100+</h4>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-indigo-600">5,000+</h4>
              <p className="text-gray-600 text-sm">People Helped</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-indigo-600">50+</h4>
              <p className="text-gray-600 text-sm">Partner NGOs</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-indigo-600">10+</h4>
              <p className="text-gray-600 text-sm">Countries Reached</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/donate"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition"
          >
            Join Us & Make a Difference
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

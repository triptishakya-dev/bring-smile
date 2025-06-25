"use client";

import { useState } from "react";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitted:", formData);
      setSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="bg-white py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Make a Donation
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label className="block mb-1 text-sm font-medium text-black">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-black">Donation Amount (₹)</label>
            <input
              type="number"
              name="amount"
              onChange={handleChange}
              value={formData.amount}
              required
              min="1"
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="100"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-black">Message</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              rows="4"
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Leave a message (optional)"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Donate Now
          </button>

          {success && (
            <p className="text-green-600 text-sm pt-2">
              Thank you for your donation!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default DonationForm;

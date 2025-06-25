"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: "1",
        title: "Why Donations Matter",
        excerpt: "Explore how small donations create big impact in underserved communities.",
        image: "https://www.merchantmaverick.com/wp-content/uploads/2020/10/bigstock-Donation-Share-Support-Fundrai-119923922-1024x670.jpg",
      },
      {
        id: "2",
        title: "Success Story: Clean Water Project",
        excerpt: "See how your donations helped build clean water wells in rural areas.",
        image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/301882044/original/66bd99820d75cc5ea61af926d2bcc8b174298fed/build-your-nonprofit-ngo-website-for-donation-charity-fundraising.png",
      },
      {
        id: "3",
        title: "Education for All",
        excerpt: "How educational programs funded by donations are transforming lives.",
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/fundpro-html-charity-website-template.jpg",
      },
      {
        id: "4",
        title: "Feeding the Hungry",
        excerpt: "Donor support helps deliver nutritious meals to those in need.",
        image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/312364746/original/fc5bbddf35aa059f454e5b5eb42e7188d1609a41/design-responsible-charity-donation-website-nonprofit-organization-website.png",
      },
      {
        id: "5",
        title: "Supporting Women Empowerment",
        excerpt: "Your donations help fund skills training and livelihood for women.",
        image: "https://avonriverventures.com/wp-content/uploads/2023/10/donate-sign-charity-campaign.jpg",
      },
      {
        id: "6",
        title: "Healthcare Access in Rural Areas",
        excerpt: "We’re bringing medical support to underserved communities, thanks to you.",
        image: "https://img.freepik.com/premium-vector/thanks-your-donations-sign-charity-event-with-cute-jar-with-hearts_655299-582.jpg?w=2000",
      },
    ];
    setBlogs(mockData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-10 ">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-10">
        Our Blog
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <Link
                href={`/blog/${blog.id}`}
                className="text-indigo-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

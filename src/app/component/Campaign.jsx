"use client"

import React from "react";
import { motion } from "framer-motion";

const campaigns = [
  {
    id: 1,
    title: "Feed the Hungry",
    description: "Help us deliver meals to families who need it most.",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/18/17/istock-1127566187.jpg",
  },
  {
    id: 2,
    title: "Education for All",
    description: "Support underprivileged children with access to education.",
    image: "https://media.istockphoto.com/id/2075602123/photo/group-of-rural-school-girls-in-uniform-sitting-in-school-corridor-working-on-laptop-concept.jpg?s=1024x1024&w=is&k=20&c=WsjI44KUTbjplF2_mZfl5_lQYXr_QRiG4KF5vxVDZAI=",
  },
  {
    id: 3,
    title: "Healthcare Access",
    description: "Your donation funds mobile clinics in remote areas.",
    image: "https://media.istockphoto.com/id/1497818358/photo/doctor-giving-out-prescription-to-a-rural-woman-during-a-rural-health-care-camp.jpg?s=1024x1024&w=is&k=20&c=7iZ6ywPBOqM2QLO1rb5BqbQd-1PtWmMJad_MM0gJcxo=",
  },
];

const CampaignSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-12">
          Our Campaigns
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {campaign.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{campaign.description}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                  Donate Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;

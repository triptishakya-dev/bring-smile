import React from "react";
import Navbar from "./component/Navbar";

import HeroSection from "./component/HeroSection";
import BlogSection from "./component/BlogSection";
import CampaignSection from "./component/Campaign";
import FAQSection from "./component/FAQSection";
import DonationForm from "./component/Donation";
import Footer from "./component/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DonationForm />
      <CampaignSection />
      <FAQSection />
      <BlogSection />
      <Footer/>
    
    </div>
  );
};

export default page;

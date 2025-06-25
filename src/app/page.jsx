import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import HeroSection from "./component/HeroSection";
import BlogSection from "./component/BlogSection";
import CampaignSection from "./component/Campaign";
import FAQSection from "./component/FAQSection";
import DonationForm from "./component/Donation";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DonationForm />
      <CampaignSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default page;

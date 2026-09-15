import Breadcrumb from "@/components/modules/Breadcrump/Breadcrump";
import HeroSection from "@/components/templates/AboutUs/HeroSection";
import OurApp from "@/components/templates/AboutUs/OurApp";
import OurHonors from "@/components/templates/AboutUs/OurHonors";
import OurPublishers from "@/components/templates/AboutUs/OurPublishers";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <Breadcrumb />
      <div className="pt-4 pb-6 md:pb-10 lg:pb-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center text-Gray-950">
          درباره ما
        </h2>
      </div>
      <div className="container py-8 bg-white relative rounded-lg">
        <HeroSection />
        <OurHonors />
        <OurApp />
        <OurPublishers />
      </div>
    </>
  );
}

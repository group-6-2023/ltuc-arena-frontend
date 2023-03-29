import React from "react";
import PhotoCarousel from "../../components/MainVideo/Photocarousel";
import MotvationContent from "../../components/motvationcontent/MotvationContent";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurCards from "../../components/OurCards/OurCards";
import BigRamy from "../../components/BigRamy/BigRamy";

export default function MainPage() {
  return (
    <div>

      <PhotoCarousel />

      <MotvationContent />

      <BigRamy />

      <AboutUs />

      <OurCards />

    </div>
  );
}

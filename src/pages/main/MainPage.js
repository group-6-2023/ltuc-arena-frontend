import React from "react";
import MainVideo from "../../components/MainVideo/Mainvideo";
import MotvationContent from "../../components/motvationcontent/MotvationContent";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurCards from "../../components/OurCards/OurCards";
import BigRamy from "../../components/BigRamy/BigRamy";

export default function MainPage() {
  return (
    <div>

      <MainVideo />

      <MotvationContent />

      <BigRamy />

      <AboutUs />

      <OurCards />

    </div>
  );
}

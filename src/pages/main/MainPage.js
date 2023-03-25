import React from "react";
import PhotoCarousel from "../../components/photoCarousel/PhotoCarousel";
import MotvationContent from "../../components/motvationcontent/MotvationContent";
import AboutUs from "../../components/aboutus/AboutUs";

export default function MainPage() {
  return (
    <div>
      <PhotoCarousel />
      <MotvationContent />

      <AboutUs />
    </div>
  );
}

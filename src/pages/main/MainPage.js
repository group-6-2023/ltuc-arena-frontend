import React from "react";
import PhotoCarousel from "../../components/photoCarousel/PhotoCarousel";
import MotvationContent from "../../components/motvationcontent/MotvationContent";
import AboutUs from "../../components/AboutUs.css/AboutUs";

export default function MainPage() {
  return (
    <div>
      <PhotoCarousel />
      <MotvationContent />

      <AboutUs />
    </div>
  );
}

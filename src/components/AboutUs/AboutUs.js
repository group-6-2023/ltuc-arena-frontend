import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutUs-parent " id="AboutUs">
      <h3>ABOUT US</h3>
      <p className="paragraph2">
        We're <span style={{ color: "red" }}>LTUC ARENA</span> . We exist to
        unite the conditioning community.
        <br />
        <br />
        It's not our goals that unite us, but the things we do to achieve them.
        Because although our training grounds and end goals might be different,
        sweat is our sport. And we're a team of individuals who know that to go
        further, we go together.. <br />
        <br />
        LTUC-Arena is a total-body group workout that combines science, coaching
        and technology to guarantee maximum results from the inside out. Our
        workout is not HIT. It is heart rate-based interval training, where you
        train through 5 heart rate zones designed to charge your metabolism for
        <span style={{ color: "red" }}> MORE </span>caloric afterburn,{" "}
        <span style={{ color: "red" }}>MORE</span> results, and{" "}
        <span style={{ color: "red" }}>MORE</span> confidence, all to deliver
        you<span style={{ color: "red" }}> MORE LIFE</span>. Orangetheory is
        more than a gym because the work you do here in our studio will make all
        the difference out there in your world.
      </p>
    </div>
  );
}

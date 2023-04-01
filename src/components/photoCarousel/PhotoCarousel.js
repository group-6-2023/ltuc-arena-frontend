import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/big img/image1.jpg";
import image2 from "../../assets/big img/1633882.jpg";
import image3 from "../../assets/big img/20502648.jpg";
import video from "../../assets/main video/Main Video.mp4";
import "./photocarousel.css";
import { Button } from "bootstrap";

export default function PhotoCarousel() {
  return (
    <div className="container-vid">
      <video src={video} loop={true} autoPlay={true} muted></video>
      <div className="overlay"></div>
      <div className="content">
        {/* <h1>
          LTUC-<span style={{ color: "red" }}>Arena</span>
        </h1>
        <h2>
          Most people fail, not because of lack of desire, but,
          <br /> because of lack of commitment.
        </h2> */}
        {/* <Button></Button> */}
      </div>
    </div>
  );
}

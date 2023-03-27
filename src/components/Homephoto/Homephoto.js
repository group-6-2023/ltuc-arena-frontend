import Carousel from "react-bootstrap/Carousel";
import "./Homephoto.css";
import image1 from "../../assets/home photo/home co/img1.jpg";
import image2 from "../../assets/home photo/home co/img2.jpg";
import image3 from "../../assets/home photo/home co/img3.jpg";
import image4 from "../../assets/home photo/home co/img4.jpg";


export default function Homephoto() {
  return (
    <div className="contanier" id="top">
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 image-carousl"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 image-carousl"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 image-carousl"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 image-carousl"
            src={image4}
            alt="Forth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
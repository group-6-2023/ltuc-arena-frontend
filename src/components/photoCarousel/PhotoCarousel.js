import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/big img/image1.jpg";
import image2 from "../../assets/big img/1633882.jpg";
import image3 from "../../assets/big img/20502648.jpg";
import "./photocarousel.css";

export default function PhotoCarousel() {
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
      </Carousel>
    </div>
  );
}

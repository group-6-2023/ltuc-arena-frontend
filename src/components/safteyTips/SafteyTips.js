import Carousel from "react-bootstrap/Carousel";
import "./safteyTips.css";
import image1 from "../../assets/saftey Tips/image1.jpg";
import image2 from "../../assets/saftey Tips/image2.jpg";
import image3 from "../../assets/saftey Tips/image3.jpg";
import image4 from "../../assets/saftey Tips/image4.jpg";
import image5 from "../../assets/saftey Tips/image5.jpg";
import image6 from "../../assets/saftey Tips/image6.jpg";
import image7 from "../../assets/saftey Tips/image7.jpg";
import image8 from "../../assets/saftey Tips/image8.jpg";
import image9 from "../../assets/saftey Tips/image9.jpg";
import image10 from "../../assets/saftey Tips/image10.jpg";

export default function SafteyTips() {
  return (
    <div className="contanier" id="top">
      <h2 id="STH">Here is some SafteyTips for you !</h2>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image5}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image6}
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image7}
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image8}
            alt="eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image9}
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 image-size"
            src={image10}
            alt="Tenth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

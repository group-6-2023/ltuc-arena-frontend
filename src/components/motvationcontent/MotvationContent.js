import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/small img/img1.jpg";
import img2 from "../../assets/small img/img2.jpeg";
import img3 from "../../assets/small img/img3.jpg";
import "./motvationcontant.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MotvationContent() {
  return (
    <div className="motvation-container">
      <Row>
        <Col sm={9}>
          <h3 className="title">Become a Member.</h3>
          <p className="paragraph1">
            It only takes a minute inside our studio to understand it’s not a
            competition — it’s a community. Together, we’re working toward a
            better version of ourselves to live a longer, more vibrant life.
          </p>
          <br></br>
          <br></br>
          <br></br>

          <h3 className="title">
            Love It or Your Money Back. <br />
            Try Our 30-Day Risk Free Guarantee
          </h3>
          <p className="paragraph1">
            We know you will love your LTUC-Arena experience. In fact, just take
            12 classes during your first 30 days and if you don’t feel like
            you’re living a more vibrant, happier, healthier life, take back all
            your money and walk away. The first class may be taken at no charge.
          </p>
        </Col>
        <Col sm={3}>
          <Carousel fade variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100 imgsize"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 imgsize"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 imgsize"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

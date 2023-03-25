import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/small img/img1.jpg";
import img2 from "../../assets/small img/img2.jpeg";
import img3 from "../../assets/small img/img3.jpg";
import "./motvationcontant.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MotvationContent() {
  return (
    <Container className="motvation-container">
      <Row>
        <Col sm={9}>
          <h3>some content</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            blandit nibh, quis sollicitudin metus. Vivamus sed aliquam nisl, in
            commodo neque. Praesent laoreet nisi id augue fringilla aliquet vel
            et justo. Nunc pharetra magna lobortis nibh imperdiet eleifend.
            Vivamus sed auctor purus, id egestas augue. Nullam tempus justo
            lacus, et viverra risus malesuada in. Suspendisse molestie erat
            magna, congue elementum mi ullamcorper ac. Sed semper volutpat quam,
            eget pellentesque lorem molestie quis. Fusce eget augue ac eros
            lacinia semper. Donec non euismod felis, sed sollicitudin lectus.
            Sed facilisis vulputate enim sit amet viverra.
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
    </Container>
  );
}

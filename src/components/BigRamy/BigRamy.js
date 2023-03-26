import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ramyimg from "../../assets/small img/Ramyimg.jpg";



export default function BigRamy() {
  return (
    <div className="big-ramy">
      <Row>
        <Col sm={9}>
          <h3 className="title">Big Ramy</h3>
          <p className="paragraph1">
            Mamdouh Mohammed Hassan Elssbiay (Arabic: ممدوح محمد حسن السبيعي; born 16 September 1984),
            also known as Big Ramy, is an Egyptian IFBB professional bodybuilder. He is a two time Mr. Olympia champion,
            winning in 2020 and 2021.
            Elssbiay earned his pro card by winning the overall title at the 2012 Amateur Olympia in Kuwait City.
            In 2010, he joined Oxygen Gym in Kuwait. By 2011, he weighed 200 lbs, and when he stepped on the 2012 Amateur Olympia Kuwait stage,
            he weighed in at 286 lbs and was declared the champion. In 2013, Elssbiay made his IFBB Pro-debut at the New York Pro, which he won.
            In 2020 and 2021, he won the Mr. Olympia contest.
          </p>
          <img className="d-block w-100 imgsize" src={Ramyimg.jpg}></img>
        </Col>
      </Row>
    </div>
  );
}
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Ramyimg from "../../assets/small img/BIgRamy.jpg";
import "./BigRamy.css";
import heart from '../../assets/Main PAge/heart.png'
import apple from '../../assets/Main PAge/apple.png'
import flex from '../../assets/Main PAge/flex.png'

export default function BigRamy() {
  return (
    <div className="HEALTH-NUTRITION">
      <Row>
        <Col >
          <div>
            <h1 className="title">HEALTH & NUTRITION</h1>
            <p className="paragraph11">
              Everyday food choices are guided by a number of considerations—emotions, habits, fast-paced lifestyles, traditions, social influences, religion,
              and pleasure. Let me help you feel confident in your diet choices while still enjoying the foods that you love with one-on-one nutrition
              counseling sessions. Whether your goal is to lose weight, lower cholesterol, or optimize your health, having me as your private nutrition coach
              provides the support you need to stay on track and keep yourself motivated.
            </p>
          </div>
          <br></br>
          <br></br>

          <div className='photo10'>

            <div>
              < img className='photo1' src={heart} />

              <h5>PREMIUM HEALTH</h5>
            </div>

            <div>
              < img className='photo1' src={apple} />

              <h5>QAULITY NUTRITION</h5>
            </div>

            <div>
              < img className='photo1' src={flex} />

              <h5>MEAL PLANS</h5>
            </div>

          </div>
          <br></br>
          <br></br>

          <div>
            <p className="paragraph11">
              As part of all of my training programs, you’ll work one-on-one with me as your nutrition coach to develop a plan that meets you where
              you’re starting, no matter what your goal or your experience level is.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

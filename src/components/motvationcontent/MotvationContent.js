import heart from "../../assets/Main PAge/heart.png";
import fitness from "../../assets/Main PAge/fitness.png";
import apple from "../../assets/Main PAge/apple.png";
import flex from "../../assets/Main PAge/flex.png";

import "./motvationcontant.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MotvationContent() {
  return (
    <div className="motvation-container">
      <Row>
        <h1 className="title1">MAXIMIZE YOUR LIFE</h1>

        <Col sm={6}>
          <div>
            <p className="paragraph12">
              <span className="red-word">Stop waiting to get in shape!</span> I
              will help you sculpt the body that fits your lifestyle and I'll
              help you maintain it through all aspects of life. Why give up the
              things you love to do? I will walk you through every step of
              transforming your body from nutrition to exercise all the way down
              to your molecular structure
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
        </Col>
        <Col sm={3}>
          <div>
            <img className="photo" src={heart} />
            <br></br>

            <h5>Body Analysis</h5>
            <p className="p-font ">
              I usually start my consultations off by performing an in-depth
              health assessment, using functional movement screenings and a body
              composition analysis, to gauge your most accurate fitness level.
            </p>
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <img className="photo" src={fitness} />

            <h5>Fitness Programs</h5>
            <p className="p-font ">
              Once fitness levels have been assessed, I design a custom workout
              routine for your goals, time constraints, & budget. I encourage,
              <span className="red-word"> motivate</span> & guide you to reach
              your health and fitness goals on a personalized level.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <div>
            <h3 className="title1">
              Love It or Your Money Back. <br />
              Try Our 30-Day Risk Free Guarantee
            </h3>
            <p className="paragraph12">
              Personalization is key to getting the best possible results, which
              is why my workout programs are modified to fit your individual
              fitness goals and fitness level. Whether you're new to working out
              or you're an experienced fitness buff my
              <span className="red-word"> fitness masterclass</span> is designed
              for you to achieve your goals and to enjoy your life!
            </p>
          </div>
        </Col>

        <Col sm={3}>
          <div>
            <img className="photo" src={apple} />

            <h5>Health and Nutrition</h5>
            <p className="p-font ">
              As part of my training program, I'll work one-on-one with you as
              your nutrition coach to develop a meal plan that creates new and
              sustainable eating habits that still fit your{" "}
              <span className="red-word">lifestyle </span>& will maximize your
              fitness goals.{" "}
            </p>
          </div>
        </Col>

        <Col sm={3}>
          <div>
            <img className="photo" src={flex} />

            <h5>Flexibility</h5>
            <p className="p-font ">
              My programs are flexible & specifically designed to help you reach
              your health & fitness goals. I'll work with you to customize an
              exercise & meal plan that reflects not only your short term goals
              but the long game as well.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BigRamy.css";
import heart from '../../assets/Health&Nutrition/premiumHealth.png';
import apple from '../../assets/Health&Nutrition/qaulityNutrition.png';
import flex from '../../assets/Health&Nutrition/mealPlans.png';


export default function BigRamy() {
  return (
    <div className="HEALTH-NUTRITION">

        <div>
          <h1 className="title">HEALTH & NUTRITION</h1>
          <p className="paragraph11">
            Everyday food choices are guided by a number of considerations—emotions, habits, fast-paced lifestyles, traditions, social influences, religion,
            and pleasure. Let me help you feel confident in your diet choices while still enjoying the foods that you love with one-on-one nutrition
            counseling sessions. Whether your goal is to lose weight, lower cholesterol, or optimize your health, having me as your private nutrition coach
            provides the support you need to stay on track and keep yourself motivated.
          </p>
        </div>

      <div className="div0">

        <div className="div1">
          <img className='pho1' src={heart} />
          <div className="div1a">PREMIUM HEALTH</div>
        </div>

        <div className="div2">
          <img className='pho2' src={apple} />
          <div className="div2a">QAULITY NUTRITION</div>
        </div>

        <div className="div3">
          <img className='pho3' src={flex} />
          <div className="div3a">MEAL PLANS</div>
        </div>
      </div>

      <p className="paragraph13">
        As part of all of my training programs, you’ll work one-on-one with me as your nutrition coach to develop a plan that meets you where
        you’re starting, no matter what your goal or your experience level is.
      </p>

    </div>
  );
}

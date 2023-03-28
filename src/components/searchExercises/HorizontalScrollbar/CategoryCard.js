import Card from "react-bootstrap/Card";
import allimg from "../../../assets/muscle.png";
import arms from "../../../assets/body parts/arms.png";
import back from "../../../assets/body parts/back.png";
import cardio from "../../../assets/body parts/cardio.png";
import chest from "../../../assets/body parts/chest.png";
import legs from "../../../assets/body parts/legs.png";
import neck from "../../../assets/body parts/neck.png";
import shoulders from "../../../assets/body parts/shoulders.png";
import waist from "../../../assets/body parts/waist.png";
import upper from "../../../assets/body parts/upper arm.png";
import lower from "../../../assets/body parts/lower arm.png";
import lowerleg from "../../../assets/body parts/lower leg.png";
import upperleg from "../../../assets/body parts/upper leg.png";
import calender from "../../../assets/calendar.png";

export default function CategoryCard({
  item,
  setBodyPart,
  bodyPart,
  day,
  setDay,
  isList,
}) {
  const imgGen = () => {
    let img = calender;
    if (item === "back") {
      img = back;
    } else if (item === "cardio") {
      img = cardio;
    } else if (item === "chest") {
      img = chest;
    } else if (item === "legs") {
      img = legs;
    } else if (item === "neck") {
      img = neck;
    } else if (item === "shoulders") {
      img = shoulders;
    } else if (item === "waist") {
      img = waist;
    } else if (item === "arms") {
      img = arms;
    } else if (item === "upper arms") {
      img = upper;
    } else if (item === "lower arms") {
      img = lower;
    } else if (item === "lower legs") {
      img = lowerleg;
    } else if (item === "upper legs") {
      img = upperleg;
    } else if (item === "all") {
      img = allimg;
    }
    return img;
  };

  return (
    <Card
      onClick={() => (isList ? setDay(item) : setBodyPart(item))}
      className="category"
      style={{
        width: "16rem",
      }}
    >
      <Card.Img
        variant="top"
        src={imgGen()}
        style={{ width: "100px", height: "100px" }}
      />
      <Card.Body>
        {isList ? (
          <Card.Title
            style={{
              fontSize: "30px",
              color: day === item ? "rgb(177, 8, 8)" : "",
            }}
            className="title-card"
          >
            <h3>{item}</h3>
          </Card.Title>
        ) : (
          <Card.Title
            style={{
              fontSize: "30px",
              color: bodyPart === item ? "rgb(177, 8, 8)" : "",
            }}
            className="title-card"
          >
            <h3>{item}</h3>
          </Card.Title>
        )}
      </Card.Body>
    </Card>
  );
}

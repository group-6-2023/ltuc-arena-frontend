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
import lower from "../../../assets/body parts/lower arm.png";
import upper from "../../../assets/body parts/upper arm.png";

export default function CategoryCard({ item, setBodyPart, bodyPart }) {
  const imgGen = () => {
    let img;
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
    } else {
      img = allimg;
    }
    return img;
  };

  return (
    <Card
      onClick={() => setBodyPart(item)}
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
        <Card.Title
          style={{
            fontSize: "30px",
            color: bodyPart === item ? "#2c7bfe" : "",
          }}
          className="title-card"
        >
          <h3>{item}</h3>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

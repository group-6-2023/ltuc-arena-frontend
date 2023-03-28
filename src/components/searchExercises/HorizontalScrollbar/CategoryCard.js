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
    } else {
      img = allimg;
    }
    return img;
  };

  return (
    <div className="category" onClick={() => setBodyPart(item)}>
      <Card
        style={{
          width: "16rem",
          borderBottom: bodyPart === item ? "2px solid #417faf" : "",
        }}
        className="singleCat"
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
              color: bodyPart === item ? "#417faf" : "",
            }}
          >
            {item}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

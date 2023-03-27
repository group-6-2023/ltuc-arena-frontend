import Card from "react-bootstrap/Card";
import img from "../../../assets/muscle.png";

export default function CategoryCard({ item, setBodyPart, bodyPart }) {
  return (
    <div className="category" onClick={() => setBodyPart(item)}>
      <Card
        style={{
          width: "16rem",
          borderBottom: bodyPart === item ? "2px solid #417faf" : "",
        }}
        className="singleCat"
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{item}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

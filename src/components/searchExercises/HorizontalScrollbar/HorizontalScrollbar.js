import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import CategoryCard from "./CategoryCard";
import RightArrowIcon from "../../../assets/right-arrow.png";
import LeftArrowIcon from "../../../assets/left-arrow.png";
import "./HorizontalScrollbar.css";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="div-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" className="left-arrow" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="div-arrow">
      <img src={RightArrowIcon} alt="right-arrow" className="right-arrow" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <CategoryCard
        item={item}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
        key={item}
      />
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;

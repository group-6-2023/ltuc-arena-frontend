import "./mainvideo.css";
import video from "../../assets/main video/Main Video.mp4"

const PhotoCarousel = () => {
  return (
    <div className="container">
      <div className="overlay"></div>
      <video src={video} autoPlay loop/>
      <div className="content">
        <h1>Welcome</h1>
        <p>My site</p>
      </div>
    </div>
  )
}
export default PhotoCarousel;
    




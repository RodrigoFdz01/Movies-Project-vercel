import { Carousel } from "react-bootstrap";
//import CardHeader from "react-bootstrap/esm/CardHeader";
import image1 from "../../images/martian.png";
import image2 from "../../images/guardians.jpeg";
import image3 from "../../images/carousel3.jpg";
import image4 from "../../images/carousel4.jpg";

import style from "./Carousel.module.css";

function Carrusel() {
  return (
    <Carousel className={style.carrusel}>
      <Carousel.Item>
        <img className={style.images} src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>BlockBuster Movies</h3>
          <p>Some of my favourites movies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.images} src={image2} alt="Second slide" />

        <Carousel.Caption>
          <h3>BlockBuster Movies</h3>
          <p>Some of my favourites movies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.images} src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3>BlockBuster Movies</h3>
          <p>Some of my favourites movies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.images} src={image4} alt="Third slide" />
        <Carousel.Caption>
          <h3>BlockBuster Movies</h3>
          <p>Some of my favourites movies</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carrusel;

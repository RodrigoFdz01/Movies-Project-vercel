import React, { useState, useEffect } from "react";

import { Carousel } from "react-bootstrap";
//import CardHeader from "react-bootstrap/esm/CardHeader";
import image1 from "../../images/martian.png";
import image2 from "../../images/guardians.jpeg";
import image3 from "../../images/carousel1.jpg";
import image4 from "../../images/carousel4.jpg";
import style from "./Carousel.module.css";

import dataApi from "../../MoviesfromApi";

function Carrusel() {
  const [backdrops, setbackdrops] = useState([]);
  console.log(backdrops);
  //console.log(backdrops[0].id);
  useEffect(() => {
    dataApi(setbackdrops);
  }, []);

  //  const urlImagen = {'https://image.tmdb.org/t/p/w300/${backdrop_path'}

  // https://image.tmdb.org/t/p/w300/${backdrop_path}
  return (
    <>
      {backdrops
        .filter((i, index) => index < 4)
        .map((e, i, index) => (
          <div className={style.pictures1}>
            <img
              src={"https://image.tmdb.org/t/p/original" + e.backdrop_path}
              alt="-/"
            />
          </div>
        ))}
      <Carousel className={style.carrusel}>
        <Carousel.Item>
          <img className={style.images} src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>BlockBuster Movies</h3>
            <p>Find your favorite movie</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={style.images} src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>BlockBuster Movies</h3>
            <p>Find your favorite movie</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={style.images} src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>BlockBuster Movies</h3>
            <p>Find your favorite movie</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={style.images} src={image4} alt="Fourth slide" />
          <Carousel.Caption>
            <h3>BlockBuster Movies</h3>
            <p>Find your favorite movie</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default Carrusel;

// import { Carousel } from "react-bootstrap";
// //import CardHeader from "react-bootstrap/esm/CardHeader";
// import image1 from "../../images/martian.png";
// import image2 from "../../images/guardians.jpeg";
// import image3 from "../../images/carousel3.jpg";
// import image4 from "../../images/carousel4.jpg";

// import style from "./Carousel.module.css";

// function Carrusel() {
//   return (
//     <Carousel className={style.carrusel}>
//       <Carousel.Item>
//         <img className={style.images} src={image1} alt="First slide" />
//         <Carousel.Caption>
//           <h3>BlockBuster Movies</h3>
//           <p>Some of my favourites movies</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className={style.images} src={image2} alt="Second slide" />

//         <Carousel.Caption>
//           <h3>BlockBuster Movies</h3>
//           <p>Some of my favourites movies</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className={style.images} src={image3} alt="Third slide" />
//         <Carousel.Caption>
//           <h3>BlockBuster Movies</h3>
//           <p>Some of my favourites movies</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className={style.images} src={image4} alt="Third slide" />
//         <Carousel.Caption>
//           <h3>BlockBuster Movies</h3>
//           <p>Some of my favourites movies</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }
// export default Carrusel;

import React from "react";
import style from "./Home.module.css";
import Carrusel from "../Components/Carousel/Carrusel.jsx";
//import Genres from "../Components/Genre/Genres";

function Home() {
  return (
    <div className={style.container}>
      <div className={style.elemento}>
        <Carrusel />
      </div>
    </div>
  );
}

export default Home;
/*
{data.map((e) => (
  <img key={e.id} data={data} src={e.img} alt="img" />
))} */

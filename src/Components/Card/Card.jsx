//import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
//import { GlobalContext } from "../../Context/GlobalContext";

function Card({ dataApi }) {
  // const handleFav = () => {
  //   setfav(!fav);
  // };
  //const urlImagen = `https://image.tmdb.org/t/p/w300/${backdrop_path}`;
  return (
    <div className={style.moviecard}>
      <Link to={`/PeliculaSingle/${dataApi.title}`}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + dataApi.poster_path}
          alt="img"
        />
      </Link>
      <h3>{dataApi.title}</h3>
    </div>
  );
}
export default Card;

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
          src={"https://image.tmdb.org/t/p/w300/" + dataApi.poster_path}
          alt="img"
        />
        <h3>{dataApi.title}</h3>
      </Link>
    </div>
  );
}
export default Card;

import React from "react";
import dataGenre from "../../dataGenre.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./genres.module.css";

const Genres = () => {
  const [genres, setgenres] = useState([]);

  useEffect(() => {
    //setpopulares(dataApi);
    dataGenre(setgenres);
  }, []);

  return (
    <>
      {genres.map((genre) => (
        <li className={style.item}>
          {/* <ul className={`${clases === "" ? "" : "genero-active"} nav-links`}> */}
          <Link
            className={style.hipervinculo}
            key={genre.id}
            id={genre.id}
            to={`/`}
          >
            {" "}
            {genre.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Genres;

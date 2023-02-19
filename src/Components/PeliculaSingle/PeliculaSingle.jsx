import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import style from "./PeliculaSingle.module.css";

const PeliculaSingle = ({ dataApi }) => {
  const { nombre } = useParams();
  const [fav, setfav] = useState([]);

  function handlefav() {
    setfav(!fav);
  }
  const saveLocal = () => {
    localStorage.setItem("favs", fav);
    //alert("Movie added to favs!!!");
  };
  //console.log(dataApi);
  return (
    <div className={style.containersingle}>
      {dataApi
        .filter((tarjeta) => tarjeta.title === nombre)
        .map((e, index) => (
          <div className={style.movieSingle} key={index}>
            <img
              src={"https://image.tmdb.org/t/p/w300/" + dataApi.poster_path}
              alt="img"
            />
            <div className={style.detalles}>
              <h1>
                {e.title} |{" "}
                <span className={style.fecha}>{e.release_date}</span>
              </h1>
              <div>
                <li className={style.info}>
                  <h4>Stars:</h4>
                </li>
                <li className={style.info}>
                  <h4>Votos: {e.vote_average}</h4>
                </li>
                <li className={style.info}>
                  <h4>Genre: </h4>
                </li>
              </div>
              <p className={style.parraf}>Review: {e.overview}</p>

              <Link to={`/Peliculagrid/`}>
                <button className={style.buttonback} type="button">
                  Back
                </button>
              </Link>
              <button onClick={(handlefav, saveLocal)} className={style.check}>
                {fav ? "+" : "❤️"}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default PeliculaSingle;

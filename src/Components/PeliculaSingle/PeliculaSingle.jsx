import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import style from "./PeliculaSingle.module.css";

const PeliculaSingle = ({ data }) => {
  const { nombre } = useParams();
  const [fav, setfav] = useState(true);

  function handlefav() {
    setfav(!fav);
  }
  const saveLocal = () => {
    localStorage.setItem("favorito", fav);
    alert("Movie added to favs!!!");
  };

  return (
    <div className={style.containersingle}>
      {data
        .filter((tarjeta) => tarjeta.titulo === nombre)
        .map((e, index) => (
          <div className={style.movieSingle} key={index}>
            <img src={e.img} alt="img" />
            <div className={style.detalles}>
              <h1>
                {e.titulo} | <span className={style.fecha}>{e.fecha}</span>
              </h1>
              <div>
                <li className={style.info}>
                  <h4>Stars: {e.actores}</h4>
                </li>
                <li className={style.info}>
                  <h4>Time: {e.duracion}</h4>
                </li>
                <li className={style.info}>
                  <h4>Genre: {e.genero}</h4>
                </li>
              </div>
              <p className={style.parraf}>Review: {e.descripcion}</p>

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

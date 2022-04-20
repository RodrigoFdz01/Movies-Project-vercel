import React from "react";
// import { Link } from "react-router-dom";

import style from "./Favoritos.module.css";
import { useParams } from "react-router-dom";
//import PeliculaSingle from "../PeliculaSingle/PeliculaSingle";

function Favoritos({ data }) {
  const { nombre } = useParams();

  return <div className={style.favoritos}>nombre</div>;
}

export default Favoritos;

/*  <div>
      {data
        .filter((fav) => fav.titulo === nombre)
        .map((e, index) => (
          <div className="favorita" key={index}>
            <img src={e.img} alt="img" />
            <div className="detalles">
              <h2>{e.titulo}</h2>
            </div>
          </div>
        ))}
    </div>*/

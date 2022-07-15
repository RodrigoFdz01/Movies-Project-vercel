import React from "react";

//import style from "./Favoritos.module.css";
import { useParams } from "react-router-dom";

function Favoritos({ data, fav }) {
  //const { data } = useParams();
  const { nombre } = useParams();

  return (
    <div>
      {data
        .filter((Pelicula) => Pelicula.titulo === nombre)
        .data.map((e, index, fav) => (
          <div className="favorita" key={index}>
            <div className="detalles">
              <h2>{fav.titulo}</h2>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Favoritos;

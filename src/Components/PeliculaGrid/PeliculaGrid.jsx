import style from "./PeliculaGrid.module.css";
import React, { useState, useEffect } from "react";
//import { FavsContext } from "../Search/Search";
//import data from "../../peliculas";

import Card from "../Card/Card";
import dataApi from "../../MoviesfromApi";
import NextPage from "../NextPage/NextPage";

function PeliculaGrid() {
  const [populares, setpopulares] = useState([]);
  //const [cards, setCards] = useState([]);

  useEffect(() => {
    //setpopulares(dataApi);
    dataApi(setpopulares);
  }, []);

  //   abajo hasta el return todo lo nuevo de paginacion
  //   const [paginaActual, setPaginaActual] = useState(1);
  //   const TOTAL_POR_PAGINA = 10;

  //   let peliculas = data;

  //   const cargarPeliculas = () => {
  // peliculas = peliculas.slice(
  //   (paginaActual - 1) * TOTAL_POR_PAGINA,
  //   paginaActual * TOTAL_POR_PAGINA
  // );
  //   };

  //   const getTotalPaginas = () => {
  //     let cantidadTotalDePeliculas = data.length;
  //     return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  //   };
  // console.log(typeof getTotalPaginas());
  //  cargarPeliculas();

  return (
    <>
      <div className={style.back}>
        <div className={style.backgrid}></div>
        <div className={style.moviegrid}>
          {populares.map((e) => (
            <Card key={e.id} dataApi={e} />
          ))}
        </div>
        <NextPage />
      </div>
    </>
  );
}
export default PeliculaGrid;

import style from "./PeliculaGrid.module.css";
import React, { useState, useEffect } from "react";
//import { FavsContext } from "../Search/Search";
import data from "../../peliculas";
import Paginacion from "../Pagination/Pagination";

import Card from "../Card/Card";

function PeliculaGrid() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
    // console.log(results);
  }, []);
  let abc = "";

  // abajo hasta el return todo lo nuevo de pagicancion
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 6;

  let peliculas = data;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  };

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = data.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  };
  // console.log(typeof getTotalPaginas());
  cargarPeliculas();

  return (
    <>
      <div className={style.moviegrid}>
        {abc === "" && peliculas.map((e) => <Card key={e.id} data={e} />)};
      </div>

      <Paginacion
        pagina={paginaActual}
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </>
  );
}
export default PeliculaGrid;

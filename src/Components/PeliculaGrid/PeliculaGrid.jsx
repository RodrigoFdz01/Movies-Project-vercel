import style from "./PeliculaGrid.module.css";
import React, { useState, useEffect } from "react";
//import { FavsContext } from "../Search/Search";
//import data from "../../peliculas";
import Card from "../Card/Card";
import dataApi from "../../MoviesfromApi";

function PeliculaGrid() {
  const [populares, setpopulares] = useState([]);
  //const [cards, setCards] = useState([]);

  //const { results } = useContext(FavsContext);
  useEffect(() => {
    //setpopulares(dataApi);
    dataApi(setpopulares);
  }, []);

  return (
    <>
      <div className={style.back}>
        <div className={style.backgrid}></div>
        <div className={style.moviegrid}>
          {populares.map((e) => (
            <Card key={e.id} dataApi={e} />
          ))}
        </div>
      </div>
    </>
  );
}
export default PeliculaGrid;

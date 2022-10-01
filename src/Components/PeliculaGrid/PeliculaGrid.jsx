import style from "./PeliculaGrid.module.css";
import React, { useState, useEffect } from "react";
//import { FavsContext } from "../Search/Search";
import data from "../../peliculas";

import Card from "../Card/Card";

function PeliculaGrid() {
  const [cards, setCards] = useState([]);

  //const { results } = useContext(FavsContext);
  useEffect(() => {
    setCards(data);

    // console.log(results);
  }, []);
  let abc = "";
  return (
    <>
      <div className={style.back}>
        <div className={style.backgrid}></div>
        <div className={style.moviegrid}>
          {abc === "" && cards.map((e) => <Card key={e.id} data={e} />)};
        </div>
      </div>
    </>
  );
}
export default PeliculaGrid;

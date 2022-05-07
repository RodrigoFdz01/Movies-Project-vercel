import style from "./PeliculaGrid.module.css";
import React, { useState, useEffect } from "react";
import data from "../../peliculas";

import Card from "../Card/Card";

function PeliculaGrid() {
  const [cards, setCards] = useState([]);
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }
  //console.log(data);

  useEffect(() => {
    setCards(data);
  }, []);

  let results = [];
  if (!value) {
    results = cards;
  } else {
    //console.log(cards);

    results = cards.filter((dato) =>
      dato.titulo.toLowerCase().includes(value.toLowerCase())
    );
  }
  function handleClick() {
    setValue("");
  }

  return (
    <>
      <div className={style.back}>
        <div className={style.backgrid}>
          <form>
            <input
              className={style.input}
              type="text"
              placeholder="Search..."
              onChange={handleChange}
              value={value}
            />
            <button onClick={handleClick} className={style.botonsearch}>
              Clear
            </button>
          </form>
        </div>
        <div className={style.moviegrid}>
          {results.map((e) => (
            <Card key={e.id} data={e} />
          ))}
          ;
        </div>
      </div>
    </>
  );
}
export default PeliculaGrid;

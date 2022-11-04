import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "./search.module.css";
import data from "../../peliculas";
//export const FavsContext = createContext();

const Search = () => {
  //
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);

  const handleClick = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const movieName = cards.filter((dato) => dato.titulo.toLowerCase());
  //  console.log(movieName);
  // console.log(cards[0].titulo);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <form className="formulario">
      <input
        className={style.input}
        type="search"
        name="search"
        value={search}
        placeholder="Buscar..."
        required
      />

      <Link to={`/PeliculaSingle/${movieName}`}>
        <button
          className={style.botonsearch}
          onClick={handleClick}
          type="submit"
        >
          See More
        </button>
      </Link>
    </form>
  );
};

export default Search;

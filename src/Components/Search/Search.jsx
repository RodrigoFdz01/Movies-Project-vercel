import React, { useState, useEffect } from "react";
//import { scroll } from "../../utils/scroll";
import style from "./search.module.css";
//import data from "../../peliculas";

//export const FavsContext = createContext();

const Search = () => {
  //
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState("");

  useEffect(() => {
    setCards();
  }, []);

  //
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let results = [];
  if (!search) {
    results = cards;
  } else {
    results = cards.filter((dato) =>
      dato.titulo.toLowerCase().includes(search.toLowerCase())
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(results);
    setSearch("");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="search"
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Buscar..."
        required
      />

      <button className={style.botonsearch} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;

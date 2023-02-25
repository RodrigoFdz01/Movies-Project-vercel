import React from "react";
import dataGenre from "../../dataGenre.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Genres = () => {
  const [genres, setgenres] = useState([]);

  useEffect(() => {
    //setpopulares(dataApi);
    dataGenre(setgenres);
  }, []);

  return (
    <li>
      {genres.map((genre) => (
        <Link key={genre.id} id={genre.id} to={`/`}>
          {" "}
          {genre.name}
        </Link>
      ))}
    </li>
  );
};

export default Genres;

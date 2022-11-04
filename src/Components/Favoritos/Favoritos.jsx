import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

//import { scroll } from "../../utils/scroll";
import Card from "../Card/Card";

function Favoritos() {
  const { favs, removeAllFavs } = useContext(GlobalContext);
  const storageFavs = localStorage.getItem("favs");

  const navigate = useNavigate();

  const handleDeleteFavs = () => {
    removeAllFavs();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    (storageFavs === "[]" || storageFavs === null) &&
      navigate("/", { replace: true });
  }, [favs, navigate, storageFavs]);

  // scroll();

  return (
    <>
      <div className="favs-deleted">
        <button onClick={handleDeleteFavs}>X</button>
      </div>
      <div className="container-popularOrFavs-movies">
        {favs?.map((movieFavs) => (
          <Card movie={movieFavs} key={`${movieFavs.id}`} />
        ))}
      </div>
    </>
  );
}

export default Favoritos;

/*
import React, { useState, useEffect } from "react";

//import style from "./Favoritos.module.css";

function Favoritos({ data }) {
  //const { data } = useParams();
  const [movieStorage, setMovieStorage] = useState("");
  const getdata = () => {
    return localStorage.getItem("favorito");
  };

  //console.log(movieStorage);
  useEffect(() => {
    setMovieStorage(getdata());
  }, []);

  return (
    <div>
      <h2>{movieStorage}</h2>
      <h2>Favoritos</h2>
    </div>
  );
}
export default Favoritos;
*/

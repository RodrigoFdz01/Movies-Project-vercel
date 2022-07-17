import React, { useState, useEffect } from "react";

//import style from "./Favoritos.module.css";

function Favoritos({ data }) {
  //const { data } = useParams();
  const [movieStorage, setMovieStorage] = useState("");
  const getdata = () => {
    return localStorage.getItem("favorito");
  };

  console.log(movieStorage);
  useEffect(() => {
    setMovieStorage(getdata());
  }, []);

  return (
    <div>
      <h2>{movieStorage}</h2>
    </div>
  );
}
export default Favoritos;

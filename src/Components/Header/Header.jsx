import React, { Fragment, useState, useEffect } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "./logo1.png";
import Search from "../Search/Search";
//import Data from "../../peliculas";
import dataApi from "../../MoviesfromApi";

//import Favoritos from "../Favoritos/Favoritos";
//import { GlobalContext } from "../../Context/GlobalContext";

function Header() {
  const [clases, setClases] = useState(false);
  const [genres, setGenre] = useState([]);

  const handleClass = () => {
    //clases === "" ? setClases("click") : setClases("");
    setClases(!clases);
  };

  // const { firstPathName } = useContext(GlobalContext);
  // const { firstPathName, favs } = useContext(GlobalContext);

  useEffect(() => {
    //setpopulares(dataApi);
    dataApi(setGenre);
  }, []);

  return (
    <Fragment>
      <header className={style.container}>
        <div id="logohome">
          <Link to="/">
            <img src={logo} alt="logo" width="119" height="58" />
          </Link>
        </div>
        <div className={style.ul}>
          <ul>
            <li className={style.dropdownfirst}>
              <Link className={style.dropdownfirst} to="/">
                Home
              </Link>
            </li>
            <li className={style.dropdownfirst}>
              <Link className={style.dropdownfirst} to="/PeliculaGrid">
                Movie Grid
              </Link>
            </li>
            <li className={style.dropdownfirst} onClick={handleClass}>
              Genres
              <ul
                style={{
                  display: clases ? "" : "none",
                }}
              >
                {genres.map((e) => (
                  <li key={e.id}>{e.genre_ids[0]}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <Search />
      </header>
    </Fragment>
  );
}

export default Header;

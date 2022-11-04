import React, { Fragment, useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "./logo1.png";
import Data from "../../peliculas";
import Search from "../Search/Search";

//import Favoritos from "../Favoritos/Favoritos";
//import { GlobalContext } from "../../Context/GlobalContext";

function Header() {
  const [clases, setClases] = useState(false);

  const handleClass = () => {
    //clases === "" ? setClases("click") : setClases("");
    setClases(!clases);
  };

  // const { firstPathName } = useContext(GlobalContext);
  // const { firstPathName, favs } = useContext(GlobalContext);

  return (
    <Fragment>
      <nav className={style.container}>
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
                {Data.map((e) => (
                  <li key={e.id}>{e.genero}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <Search />
      </nav>
    </Fragment>
  );
}

export default Header;

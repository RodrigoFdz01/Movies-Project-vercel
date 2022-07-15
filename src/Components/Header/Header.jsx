import React, { Fragment } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "./logo1.png";

function Header() {
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
            <li className={style.dropdownfirst}>Genres</li>
            <li className={style.dropdownfirst}>
              <Link className={style.dropdownfirst} to="/Favoritos">
                My list
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;

import React, { useState, Fragment } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "./logo1.png";

function Header() {
  const [isActive, setActive] = useState("false");
  const [input, setInput] = useState("");

  function handleInput() {
    setInput("");
  }
  function toggleClass() {
    setActive(!isActive);
  }

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
            <li className={style.dropdownfirst} onClick={toggleClass}>
              Genres
            </li>
            <li className={style.dropdownfirst}>My list</li>
          </ul>
        </div>
        <div>
          <form>
            <input
              className={style.buscador}
              type="text"
              placeholder="Search..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <Link to={`/Peliculagrid/`}>
              <a href="#logohome">
                <button onClick={handleInput} className={style.botonheader}>
                  Search
                </button>
              </a>
            </Link>
          </form>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;

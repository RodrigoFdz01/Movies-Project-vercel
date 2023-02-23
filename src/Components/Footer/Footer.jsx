import React, { Fragment } from "react";
import style from "./Footer.module.css";
import logo from "./logo2.png";
import { Link } from "react-router-dom";

function Footercomp() {
  return (
    <Fragment>
      <footer>
        <div className={style.container - logo}>
          <Link to="/">
            <img classname={style.logo} src={logo} alt="" />
          </Link>
        </div>
        <p>© 2022 All rights reserved</p>

        <div className={style.divs}>
          <ul>
            <li className={style.list}>Newsletter</li>
            <li className={style.list}>Account</li>
            <li className={style.list}>Legal</li>
            <li className={style.list}>Resources</li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footercomp;

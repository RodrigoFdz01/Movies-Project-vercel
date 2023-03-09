import React from "react";
import style from "./NextPage.module.css";
const NextPage = ({ lengthMovies }) => {
  return (
    <div className={style.button_container}>
      {lengthMovies < 20 ? (
        <button className={style.button}>Siguiente</button>
      ) : (
        <>
          <button className={style.button}> - Anterior</button>
          <button className={style.button}>Siguiente + </button>
        </>
      )}
    </div>
  );
};
export default NextPage;

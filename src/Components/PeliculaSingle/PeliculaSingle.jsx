import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import style from "./PeliculaSingle.module.css";
import dataApi from "../../MoviesfromApi";

const PeliculaSingle = () => {
  const [singleInfo, setSingleInfo] = useState([]);

  useEffect(() => {
    //setpopulares(dataApi);
    dataApi(setSingleInfo);
  }, []);
  const { nombre } = useParams();
  // const [fav, setfav] = useState([]);

  // function handlefav() {
  //   setfav(!fav);
  // }
  // const saveLocal = () => {
  //   localStorage.setItem("favs", fav);
  //   //alert("Movie added to favs!!!");
  // };

  return (
    <div className={style.containersingle}>
      {singleInfo
        .filter((tarjeta) => tarjeta.title === nombre)
        .map((e, index) => (
          <div className={style.movieSingle} key={index}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + e.poster_path}
              alt="img"
            />
            <div className={style.detalles}>
              <h1>
                {e.title} |{" "}
                <span className={style.fecha}>{e.release_date}</span>
              </h1>
              <div>
                <li className={style.info}>
                  <p className={style.parraf}>Review: {e.overview}</p>
                </li>
                <li className={style.info}>
                  <h4>Vote: {e.vote_average}</h4>
                </li>
                <li className={style.info}>
                  <h4>Genre: {e.genre_ids}</h4>
                </li>
                <div>
                  <h4>Cast:</h4>
                  <div className="cast">
                    {singleInfo.map((actor) => (
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w50" + actor.poster_path
                        }
                        alt="img"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <Link to={`/Peliculagrid/`}>
                <button className={style.buttonback} type="button">
                  Back
                </button>
              </Link>
              {/* <button onClick={(handlefav, saveLocal)} className={style.check}>
                {fav ? "+" : "❤️"}
              </button> */}
            </div>
          </div>
        ))}
    </div>
  );
};
export default PeliculaSingle;

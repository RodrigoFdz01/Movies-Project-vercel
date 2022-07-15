//import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card({ data }) {
  // const [fav, setfav] = useState(false);

  return (
    <div className={style.moviecard}>
      <img src={data.img} alt="img" />

      <h3>{data.titulo}</h3>

      <Link to={`/PeliculaSingle/${data.titulo}`}>
        <button className={style.ver} type="button">
          See More
        </button>
      </Link>
      {/* <button onClick={handlefav} className={style.check}>
        {fav ? "❤️" : "+"}
      </button> */}
    </div>
  );
}
export default Card;

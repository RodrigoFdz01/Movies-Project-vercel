//import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card({ data }) {
  // const [fav, setfav] = useState(false);

  return (
    <div className={style.moviecard}>
      <Link to={`/PeliculaSingle/${data.titulo}`}>
        <img src={data.img} alt="img" />
        {/*<button className={style.ver} type="button">
          See More
          </button>
          { <button onClick={handlefav} className={style.check}>
          {fav ? "❤️" : "+"}
        </button> */}
      </Link>
      <h3>{data.titulo}</h3>
    </div>
  );
}
export default Card;

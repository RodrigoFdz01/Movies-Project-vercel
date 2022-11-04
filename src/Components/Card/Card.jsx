//import { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
//import { GlobalContext } from "../../Context/GlobalContext";

function Card({ data }) {
  //const [fav, setfav] = useState(false);
  // const handleFav = () => {
  //   setfav(!fav);
  // };
  //console.log(data.id);

  return (
    <div className={style.moviecard}>
      <button className={style.check}>o</button>
      <Link to={`/PeliculaSingle/${data.titulo}`}>
        <img src={data.img} alt="img" />

        <h3>{data.titulo}</h3>
      </Link>
    </div>
  );
}
export default Card;

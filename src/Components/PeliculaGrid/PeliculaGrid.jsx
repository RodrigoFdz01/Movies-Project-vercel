import style from "./PeliculaGrid.module.css";
import Card from "../Card/Card";

function PeliculaGrid({ data }) {
  return (
    <div className={style.back}>
      <div className={style.moviegrid}>
        {data.map((e) => (
          <Card key={e.id} data={e} />
        ))}
      </div>
    </div>
  );
}
export default PeliculaGrid;

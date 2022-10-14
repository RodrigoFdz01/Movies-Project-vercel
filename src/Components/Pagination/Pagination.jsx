import style from "../Pagination/Pagination.module.css";

function Paginacion(props) {
  //
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      resultado.push(
        <a
          href="#/"
          onClick={() => props.onChange(pagina)}
          // className={props.pagina === pagina ? "active" : ""}
          className={style.pages}
        >
          {pagina}
        </a>
      );
    }
    return resultado;
  };

  return (
    <div className={style.pagination}>
      <span>
        Página {props.pagina} de {props.total} :
      </span>
      {getPaginas()}
    </div>
  );
}
export default Paginacion;

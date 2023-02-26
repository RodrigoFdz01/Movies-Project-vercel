import React from "react";

const NextPage = ({ lengthMovies }) => {
  return (
    <div>
      {lengthMovies < 20 ? (
        <button name="-">🢀 Anterior</button>
      ) : (
        <>
          <button name="-"> - Anterior</button>
          <button name="+">Siguiente + </button>
        </>
      )}
    </div>
  );
};
export default NextPage;

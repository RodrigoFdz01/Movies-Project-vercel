// async function dataApi() {
//   const url = `https://api.themoviedb.org/3/movie/popular?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=en-En`;

//   const respuesta = await fetch(url);
//   const resultado = await respuesta.json();
//   //resultado.results.map((e) => console.log(e.title));
//   console.log(resultado.results[10].title);
// }
// export default dataApi;

import axios from "axios";

const dataApi = async (state) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=en-En`;
  const peticion = await axios.get(url);
  state(peticion.data.results);
};

export default dataApi;

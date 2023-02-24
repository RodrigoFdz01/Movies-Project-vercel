import axios from "axios";

const dataGenre = async (state) => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=79f0e639de5e3a1e7b6bb5f9122307c0&language=en-US `;
  const peticion = await axios.get(url);
  state(peticion.data.genres);
  //console.log(peticion.data.genres);
};

export default dataGenre;

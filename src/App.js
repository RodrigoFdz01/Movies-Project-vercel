import React from "react";
//import data from "./peliculas.js";

import PeliculaGrid from "./Components/PeliculaGrid/PeliculaGrid.jsx";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeliculaSingle from "./Components/PeliculaSingle/PeliculaSingle.jsx";
import Favoritos from "./Components/Favoritos/Favoritos.jsx";
import dataApi from "./MoviesfromApi.js";
//import Search from "./Components/Search/Search.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          exact
          path="/PeliculaSingle/:nombre"
          element={<PeliculaSingle dataApi={dataApi} />}
        />
        <Route path="/" element={<Home />} />

        <Route exact path="PeliculaGrid" element={<PeliculaGrid />} />

        <Route
          exact
          path="/Favoritos"
          element={<Favoritos dataApi={dataApi} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

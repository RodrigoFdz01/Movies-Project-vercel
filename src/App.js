import React from "react";
import data from "./peliculas.js";

import PeliculaGrid from "./Components/PeliculaGrid/PeliculaGrid.jsx";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeliculaSingle from "./Components/PeliculaSingle/PeliculaSingle.jsx";
import Favoritos from "./Components/Favoritos/Favoritos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          exact
          path="/PeliculaSingle/:nombre"
          element={<PeliculaSingle data={data} />}
        />
        <Route path="/" element={<Home />} />

        <Route
          exact
          path="PeliculaGrid"
          element={<PeliculaGrid data={data} />}
        />

        <Route exact path="/Favoritos" element={<Favoritos data={data} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

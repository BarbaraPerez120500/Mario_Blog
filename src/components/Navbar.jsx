import React, { useContext } from "react";
import moneda from "../audio/coin.wav";

import NavbarStyle from "../styles/Navbar.module.css";
import User from "./User";

const audioCoin = function (audio) {
  const reproducir = new Audio(audio);
  reproducir.play();
};

const Navbar = function () {
  return (
    <nav className={NavbarStyle.menu}>
      <a href="#Personajes" onClick={() => audioCoin(moneda)}>Personajes</a>
      <a href="#Historia" onClick={() => audioCoin(moneda)}>Historia</a>
      <a href="#Noticias" onClick={() => audioCoin(moneda)}>Noticias</a>
      <a href="#Pelicula" onClick={() => audioCoin(moneda)}>Película</a>
      <User />
    </nav>
  );
};

export default Navbar;

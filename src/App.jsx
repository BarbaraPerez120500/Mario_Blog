import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import UserContext from "./context/User";
import Personas from "./styles/Personas.css";
import History from "./styles/History.css";
import Luigi from "./personajes/Luigi";
import Mario from "./personajes/Mario";
import Posts from "./components/Posts";
import Admin from "./components/Admin";
import Form from "./components/Form";
import Footer from "./components/Footer";

const marioImagenes = [
  "../public/Mpeach2.jpeg",
  "../public/Peach.jpeg",
  "../public/Mario.jpeg",
  "../public/Mars.jpeg",
];

const App = function () {
  const { user } = useContext(UserContext);
  console.log( user )
  return (
    <>
      <Navbar />
      { !user || user.roll !== "admin" ? <Slider  imagenes={marioImagenes}/> : ""}     
      { !user || user.roll !== "admin" ? <Luigi /> : ""}     
      { !user || user.roll !== "admin" ? <Mario /> : ""}     
      { !user || user.roll !== "admin" ? <Posts /> : ""}     
      { !user || user.roll !== "admin" ? <Form /> : <Admin />}     
      <Footer />
    </>
  );
};

export default App;
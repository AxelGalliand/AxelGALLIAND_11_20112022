import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Logement from "../pages/LogementPage/Logement";
import Error from "../pages/404Page/404";

export function Routeur() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Logement/:id' element={<Logement />} />
      <Route path='*' element={<Error />} />
      <Route path='/404' element={<Error />} />
    </Routes>
  )
}
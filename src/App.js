import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from './Component/Header/Header'
import {Footer} from './Component/Footer/Footer';
import Home from './Component/pages/HomePage/Home';
import About from './Component/pages/AboutPage/About';
import Logement from './Component/pages/LogementPage/Logement';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Logement' element={<Logement />} />
        <Route path='*' element={<div>ERROR</div>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

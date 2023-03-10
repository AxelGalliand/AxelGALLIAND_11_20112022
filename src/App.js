import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from './Component/Header/Header'
import {Footer} from './Component/Footer/Footer';
import Home from './Component/pages/HomePage/Home';
import About from './Component/pages/AboutPage/About';
import Logement from './Component/pages/LogementPage/Logement';
import Error  from './Component/pages/404Page/404';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Logement/:id' element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

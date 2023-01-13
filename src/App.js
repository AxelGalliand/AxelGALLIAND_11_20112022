import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from './Component/Header';
import {Footer} from './Component/Footer';
import Home from './Component/pages/Home';
import About from './Component/pages/About';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

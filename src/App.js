import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from './Component/Header';
import Home from './Component/pages/Home'



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;

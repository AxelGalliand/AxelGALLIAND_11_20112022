import React from 'react';
import './App.css';
import {Header} from './Component/Header/Header'
import {Footer} from './Component/Footer/Footer';
import {Routeur} from './Routes/Routes.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routeur/>
      <Footer/>
    </div>
  );
}
export default App;
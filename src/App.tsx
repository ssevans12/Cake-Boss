import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CakeBuilder } from './componets/CakeBuilder/CakeBuilder';
import { Cake } from './componets/Cake/Cake';

function App() {
  return (
    <div className="App">

      <Cake></Cake>
      <CakeBuilder></CakeBuilder>

    </div>
  );
}

export default App;

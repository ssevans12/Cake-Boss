import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CakeBuilder } from './componets/CakeBuilder/CakeBuilder';
import { Cake } from './componets/Cake/Cake';
import { Layer } from './models/Layer';

function App() {
  const [cake, setCake] = useState<Layer[]>([]);


  return (
    <div className="App">

      <Cake layers={cake}></Cake>
      <CakeBuilder layer={cake} onAdd={newLayer => setCake([newLayer, ...cake])} onDelete={() => {}}></CakeBuilder>
    </div>
  );
}

export default App;

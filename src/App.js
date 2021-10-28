import { useState } from 'react';
import './App.css';
import Grilla from './components/Grilla';
import EligeCantidad from './components/EligeCantidad';


function App() {
  
  const [rango, setRango] = useState([])
  
  return (
    <div className="App">
      <h1>MEMOTEST</h1>

      <EligeCantidad setRango={setRango} />
      
      <Grilla rango={rango}/>

      {rango.length * rango.length}

    </div>
  );
}

export default App;




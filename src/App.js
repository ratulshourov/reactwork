import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './components/Hello';
import About from './components/About';
import Button from './components/Button';
import Arrow from './components/Arrow';
import Statework from './components/Statework';
import Setstatework from './components/Setstatework';
import Conditional from './components/Conditional';
import Variableelements from './components/Variableelements';
function App() {
  return (
    <div className="App">
      {/* Ratul Shourov
      {5+9} */}
      {/* <Hello name="ratul" profession="Software Engineer"></Hello>
      <About address="Dhaka"></About>
      <Button></Button> */}
      {/* <Arrow></Arrow> */}
      {/* <Statework></Statework> */}
      {/* <Setstatework></Setstatework> */}
      {/* <Conditional></Conditional> */}
      <Variableelements></Variableelements>
    </div>
  );
  
}


export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './components/Hello';
import About from './components/About';
import Button from './components/Button';
function App() {
  return (
    <div className="App">
      Ratul Shourov
      {5+9}
      <Hello name="ratul" profession="Software Engineer"></Hello>
      <About address="Dhaka"></About>
      <Button></Button>
    </div>
  );
  
}


export default App;

import React from 'react';
import './styles/tailwind.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import IntCalc from './components/IntCalc';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Card/>
      <IntCalc/>
    </div>
  );
}

export default App;
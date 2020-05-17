import React from 'react';
import './App.css';
import Field from'./components/Field';
import Bouton from './components/Bouton';

function App() {
  return (
    <div className="App">
      <br />
        <Field />
        <Bouton />
        <br />
        <Field />
        <Bouton />
        <br />    
    </div>
  );
}

export default App;

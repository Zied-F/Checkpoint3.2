import React from 'react';
import './App.css';
import Field from'./components/Field';
import Bouton from './components/Bouton';

function App() {
  return (
    <div className="App">
      <br></br><br></br>
        <Field />
        <Bouton />
        <br></br><br></br>
        <Field />
        <Bouton />
        <br></br><br></br>
        
    </div>
  );
}

export default App;

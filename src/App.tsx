import React from 'react';
import './App.css';
import { db } from './utils/db';

function App() {
  if(db){
    console.log("yes")
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;

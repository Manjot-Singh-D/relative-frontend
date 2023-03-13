import React from 'react';
import './App.css';
import CardWrapper from './Components/CardWrapper';
import Header from './Components/Header';

const App:React.FC=()=> {
  return (
    <div className="app">
        <Header/>
        <CardWrapper/>
    </div>
  );
}

export default App;

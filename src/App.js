
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';




function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer mensaje={'Hola, es un mensaje desde App'} />
    <ItemCount stock={15} initial={1} />

    </>
  )
}

export default App;

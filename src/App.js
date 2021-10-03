import React from 'react';
import './App.css';

import Promesa from './Promesa';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";

function App() {
  let greeting = "Bienvenido a la tienda";
  return (
    <div>
      <NavBar/> 
      <ItemListContainer title={greeting} />

      {/* al componente "Promesa" deberian pasalrlo a <ItemList> e incluirlo dentro de ItemListContainer */}
      <Promesa/>
    </div>
  );
}

export default App;

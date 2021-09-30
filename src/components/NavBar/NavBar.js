import React from "react";
import "./navbar.css";
import CartWidget from ".NavBar/CartWidget";

function NavBar() {
  return (
    <header className="encabezado">
      <h1>Logo</h1>
      <nav>
        <a href="#">Enlace1</a>
        <a href="#">Enlace2</a>
        <a href="#">Enlace3</a>
      </nav>
      <CartWidget>
        <img src="#"/>
      </CartWidget>
    </header>
  );
}

export default NavBar;

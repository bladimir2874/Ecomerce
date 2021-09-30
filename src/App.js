import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./container/ItemListContainer";

function App() {
  console.log("Hola a");
  return (
    
    <div>
      <NavBar />
      <ItemListContainer saludo="hola desde la app!" />
    </div>
  );
}

export default App;

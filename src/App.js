import "./App.css";
import freecodecampLogo from "./assets/freecodecamp-logo.png";
import Boton from "./components/Boton/Boton";

function App() {
  return (
    <div className="App">
      <div className="freecodeCamp-logo-contenedor">
        <img
          src={freecodecampLogo}
          className="freecodeCamp-logo"
          alt="imagenfreecodecamp"
        />
      </div>
      <div className="contenedor-principal-calculadora">
        <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;

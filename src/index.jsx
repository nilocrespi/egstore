import React from "react"; //define que es un componente y como trabajan en conjunto
import ReactDOM from "react-dom/client" //realiza el render del componente
import App from "./App";

const el = document.getElementById("root"); //referencia al div con id root

const root = ReactDOM.createRoot(el); //indica a React que tome control del elemento

root.render(<App/>) //renderiza el componente en pantalla

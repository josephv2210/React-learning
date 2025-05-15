import { createContext, useState } from "react";
import "./App.css";
import { Button, ColorRed, AppForm } from "./components/";
import { GlobalProvider } from "./context/global.provider";

export const GentlemanContext = createContext({});

function App() {

  const submit = () => {
    // console.log("submit");
  };

  const handleClick = () => {
    // console.log("Button clicked");
  };

  const dimeHola = () => {
    alert("Hola");
  };

  return (
    <GlobalProvider>
      <ColorRed>
        <Button parentMethod={dimeHola}>My label</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>Boton normal</Button>

      <AppForm>
        <button type="submit" onClick={submit}>
          Submit
        </button>
      </AppForm>
    </GlobalProvider>
  );
}

export default App;

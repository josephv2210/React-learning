import "./App.css";
import { Button, ColorRed, AppForm } from "./components/";

function App() {
  const submit = () => {
    console.log("submit");
  }

  const handleClick = () => {
    console.log("Button clicked");
  };

  const dimeHola = () => {
    alert("Hola");
  };

  return (
    <>
      <ColorRed>
        <Button parentMethod={dimeHola}>My label</Button>
      </ColorRed>
      <Button parentMethod={handleClick}>Boton normal</Button>

      <AppForm>
        <button type="submit" onClick={submit}>Submit</button>
      </AppForm>
    </>
  );
}

export default App;

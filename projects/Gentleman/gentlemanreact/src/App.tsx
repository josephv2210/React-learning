import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  const countMore = () => {
    setCount(count + 1);
  };

  // Componente inteligente, que tiene estado y logica

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button label={`count is ${count}`} parentMethod={countMore} />
      </div>
    </>
  );
}

export default App;

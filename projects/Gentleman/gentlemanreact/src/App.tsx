import { useState, useEffect, use } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue);
    console.info(loading);
  };

  const fechData = async () => {
    setLoading(true);
    consoleLoader(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error as string);
    } finally {
      //se ejecuta sin importar como termina
      consoleLoader(false);
    }
  };

  useEffect(() => {
    fechData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;

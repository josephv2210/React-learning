import CompA from "./components/CompA";
import "./App.css";
import { DataContextProvider } from "./context/dataContext";
import { GlobalProvider } from "./context/global.context";
// import { useContext } from "react";

function App() {
  // const context = useContext(DataContext);

  // if (!context) return <div>Contexto no disponible</div>;

  // const { contextData } = context;

  // Termina en contexto no disponible para acceder a este desde dodne se usa

  return (
    <>
      <div className="bg-blue-950 min-w-screen min-h-screen flex justify-center items-center text-white">
        <GlobalProvider>
          <DataContextProvider>
            {/* {JSON.stringify(contextData)} */}
            <CompA />
          </DataContextProvider>
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;

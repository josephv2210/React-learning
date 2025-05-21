import CompA from "./components/CompA";
import "./App.css";
import { DataContextProvider } from "./context/dataContext";

function App() {
  return (
    <>
      <div className="bg-blue-950 min-w-screen min-h-screen flex justify-center items-center text-white">
        <DataContextProvider>
          <CompA />
        </DataContextProvider>
      </div>
    </>
  );
}

export default App;

import { useContext } from "react";
import { DataContext } from "../context/dataContext";

function CompE() {
  const context = useContext(DataContext);

  if (!context) return <div>Contexto no disponible</div>;

  const { contextData } = context;
  console.log("contextData::: ", contextData);

  return (
    <div>
      <div>&lt; compE /&gt;</div>
      {JSON.stringify(contextData)}
    </div>
  );
}

export default CompE;

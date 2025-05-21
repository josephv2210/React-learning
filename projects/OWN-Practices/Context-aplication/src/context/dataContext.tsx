import { createContext, useState } from "react";


interface DataContextProviderProps {
    children: React.ReactNode;
}

interface ContextData {
    name: string;
    age: number;
    location: string;
}

interface ContextValue {
    contextData: ContextData;
    setContextData: React.Dispatch<React.SetStateAction<ContextData>>;
}

export const DataContext = createContext<ContextValue | null>(null);

export function DataContextProvider({ children }: DataContextProviderProps) {
//   const contextData = 22;
  const [contextData, setContextData] = useState({
    name: "Juan",
    age: 22,
    location: "Madrid",
  });

  const value = {contextData, setContextData};

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

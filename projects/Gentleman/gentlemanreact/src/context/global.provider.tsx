import { GlobalContext } from "./global.context";
import { useState } from "react";

const EmptyGlobalState: number = 0;

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState);

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

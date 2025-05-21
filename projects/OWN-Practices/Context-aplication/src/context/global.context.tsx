import { createContext, useContext, useState } from "react";

// Context

interface GlobalContextType {
    value: ContextData | null;
    setValue: React.Dispatch<React.SetStateAction<ContextData | null>>;
}

interface ContextData {
    name: string;
    age: number;
    location: string;
}

export const GlobalContext = createContext<GlobalContextType>({
    value: null,
    setValue: () => {},
});

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    console.log('context::: ', context);

    if (!context.value) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }

    return context;
}

// Provider

interface GlobalProviderProps {
    children: React.ReactNode;
}

const EmptyGlobalState = {
    name: "a",
    age: 1,
    location: "b",
};

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [value, setValue] = useState<ContextData | null>(EmptyGlobalState)

    return (
        <GlobalContext.Provider value={{ value, setValue }}>
            {children}
        </GlobalContext.Provider>
    )
}


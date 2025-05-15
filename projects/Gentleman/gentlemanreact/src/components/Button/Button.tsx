import { ReactNode } from "react";
import "./Button.css";
import { useGlobalContext } from "../../context/global.context";

interface Props {
  children: ReactNode;
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const ColorRed = ({ children }: ChildrenProps) => {
  const { value } = useGlobalContext();
  return (
    <div className="color-red">
      {value}:{children}
    </div>
  );
};

export const Button = ({ children, parentMethod }: Props) => {
  //Componente tonto, que no tiene estado, no tiene logica
  const {setValue} = useGlobalContext();

  const handleClick = () => {
    setValue(10);
    parentMethod();
  };

  return (
    <button className="custom-buttom" onClick={handleClick}>
      {children}
    </button>
  );
};

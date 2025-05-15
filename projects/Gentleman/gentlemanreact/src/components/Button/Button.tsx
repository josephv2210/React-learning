import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode,
  parentMethod: () => void
}

interface ChildrenProps {
  children: ReactNode
}

export const ColorRed = ({children}: ChildrenProps) => {
  return (
    <div className="color-red">
      {children}
    </div>
  );
};

export const Button = ({ children, parentMethod }: Props) => {
  //Componente tonto, que no tiene estado, no tiene logica

  return (
    <button className="custom-buttom" onClick={parentMethod}>
      {children}
    </button>
  );
};

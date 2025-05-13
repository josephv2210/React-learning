import "./Button.css";

interface Props {
    label:string,
    parentMethod: () => void,
}

export const Button = ({label, parentMethod}: Props) => {

//Componente tonto, que no tiene estado, no tiene logica

  return (
    <button
      className="custom-buttom"
      onClick={parentMethod}
    >
        {label}
    </button>
  );
};

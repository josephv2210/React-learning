import React from "react";
import "./TodoCounter.css";

function TodoCounter(props) {
  const { total, completed } = props;
  return (
    <h1>
      Has creado {completed} de {total} TODOs
    </h1>
  );
}

export default TodoCounter;

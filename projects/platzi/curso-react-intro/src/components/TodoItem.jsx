import React from 'react'

function TodoItem(props) {
  const {text, completed} = props;
  return (
    <>
      <li>
        <span>V</span>
        <p>{text}</p>
        <span>X</span>
      </li>
    </>
  )
}

export default TodoItem
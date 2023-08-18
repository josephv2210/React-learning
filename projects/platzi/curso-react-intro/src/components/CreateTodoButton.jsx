import React from 'react'

function CreateTodoButton(props) {
    const {text} = props
  return (
    <button >{text}</button>
  )
}

export default CreateTodoButton
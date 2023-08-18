import React from 'react'

function TodoList(props) {

    const {children} = props;
  return (
        <ul>
            {children}
        </ul>
  )
}

export default TodoList
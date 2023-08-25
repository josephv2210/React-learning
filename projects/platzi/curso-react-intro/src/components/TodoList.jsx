import React from 'react'

function TodoList(props) {

    const {children} = props;
  return (
        <ul className='w-full flex flex-col items-center'>
            {children}
        </ul>
  )
}

export default TodoList
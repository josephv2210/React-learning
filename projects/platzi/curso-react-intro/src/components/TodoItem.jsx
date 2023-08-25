import React from 'react'
import CheckeableIcon from './Icons/CheckeableIcon';


function TodoItem(props) {
  const {text, completed, color} = props;

  
  return (
    <>
      <li className='p-6 items-center justify-between flex bg-white rounded-2xl h-20 shadow-lg mt-5 w-4/5'>
        <CheckeableIcon
          color = {color}
        />
        <p>{text}</p>
        <span>X</span>
      </li>
    </>
  )
}

export default TodoItem
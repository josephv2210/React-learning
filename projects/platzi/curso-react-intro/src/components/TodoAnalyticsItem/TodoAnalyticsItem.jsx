import React from 'react'

function TodoAnalyticsItem(props) {
  const {label, value} = props;
  return (
    <>
        <div className='p-6 items-center justify-between flex bg-white rounded-2xl w-full h-20 shadow-lg '>
          <label className='w-1/2 text-lg' >{label}</label>
          <div className='bg-gray h-full w-[0.2rem]'></div>
          <p className='w-1/2 flex justify-center text-2xl'>{value}</p>
        </div>
    </>
  )
}

export default TodoAnalyticsItem
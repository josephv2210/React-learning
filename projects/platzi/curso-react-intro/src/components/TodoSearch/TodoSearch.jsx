import React from 'react'
import {ReactComponent as SearchIcon} from '../../assets/svg/search.svg'
import logo from '../../assets/svg/search.svg'

function TodoSearch() {
    return (
        <>
            <div className='p-6 items-center justify-between flex bg-white rounded-2xl w-4/5 h-10 shadow-lg mt-5'>
                <input
                    type='text'
                    placeholder='Realiza tu búsqueda'
                    className='hover:border-none selection:outline-none focus:outline-none w-full'
                >
                </input>
                <SearchIcon className='cursor-pointer'></SearchIcon>
            </div>
        </>
    )
}

export default TodoSearch
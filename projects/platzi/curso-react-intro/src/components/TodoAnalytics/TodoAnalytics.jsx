import React from 'react'
import TodoAnalyticsItem from '../TodoAnalyticsItem/TodoAnalyticsItem'

function TodoAnalytics() {
    return (
        <>
            <div className='flex justify-center items-center flex-col w-full gap-6'>
                <TodoAnalyticsItem />
                <TodoAnalyticsItem />
                <TodoAnalyticsItem />
            </div>
        </>
    )
}

export default TodoAnalytics
import React from 'react'
import TodoAnalyticsItem from '../TodoAnalyticsItem/TodoAnalyticsItem'

function TodoAnalytics() {
    return (
        <>
            <div className='flex justify-center items-center flex-col w-full gap-6'>
                <TodoAnalyticsItem
                    label={'Total de TODOs'}
                    value={300}
                />
                <TodoAnalyticsItem
                    label={'TODOs realizados'}
                    value={150}
                />
                <TodoAnalyticsItem
                    label={'TODOs por hacer'}
                    value={150}
                />
            </div>
        </>
    )
}

export default TodoAnalytics
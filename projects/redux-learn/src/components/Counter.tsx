import React from 'react'
import { useSelector } from 'react-redux'

interface CountInterface {
    counter: number,
    doubleCounter: number,
    fibonacci: number,
}

interface StateInterface {
    counter: CountInterface
}

function counter() {
    const counter = useSelector((state: StateInterface) => state.counter)
    return (
        <div>
            <h1>Counters</h1>
            <ul>
                <li>Counter: {counter.counter}</li>
                <li>CounterDouble: {counter.doubleCounter}</li>
                <li>CounterDouble: {counter.fibonacci}</li>
            </ul>
        </div>
    )
}

export default counter
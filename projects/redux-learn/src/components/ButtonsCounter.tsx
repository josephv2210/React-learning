import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, doubleCounterCount, setFibonacci } from '../redux/counterSlice'

interface CountInterface {
    counter: number,
    doubleCounter: number,
    fibonacci: number,
}

interface StateInterface {
    counter: CountInterface
}
function ButtonsCounter() {
    const dispatch = useDispatch();
    const count = useSelector((state: StateInterface) => state.counter.counter)
    const double = useSelector((state: StateInterface) => state.counter.doubleCounter)
    const fibonacci = useSelector((state: StateInterface) => state.counter.fibonacci)

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleDouble = () => {
        const counterDouble = count * 2
        dispatch(doubleCounterCount(counterDouble))
    }
    const handleFibonacci = () => {
        let lastfibonacci = fibonacci + 1;
        let fibonacciCount = lastfibonacci + fibonacci

        dispatch(setFibonacci(fibonacciCount))
    }

    return (
        <div>
            <p>Count: {count}</p>
            <p>Double: {double}</p>
            <p>Fibonacci: {fibonacci}</p>
            <button onClick={handleIncrement}>Incrementa</button>
            <button onClick={handleDecrement}>decrementa</button>
            <button onClick={handleDouble}>x2</button>
            <button onClick={handleFibonacci}>fibonnacci</button>
        </div>
    )
}

export default ButtonsCounter
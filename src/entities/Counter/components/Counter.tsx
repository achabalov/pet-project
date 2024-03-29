import React from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div data-testid="value-title">
            <h1>value = {counterValue}</h1>
            <Button data-testid="increment-button" onClick={increment}>
                increment
            </Button>
            <Button data-testid="decrement-button" onClick={decrement}>
                decrement
            </Button>
        </div>
    )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrements, increments } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increments())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrements())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
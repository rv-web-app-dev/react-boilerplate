import React from 'react'
import { PropTypes } from 'prop-types'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onGetResource }) => {
  console.log('hello')
  return (<div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrementAsync}>+A</button>
    <button onClick={onGetResource}>Resource</button>
    <div>Clicked: {value} times</div>
  </div>)
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter

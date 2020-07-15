import React, { useState, useCallback, useRef } from 'react'

const displayCountRenders = () => {
    const renders = useRef(0)
    console.log('renders', renders.current++)
}

const Greet = React.memo((props) => {
  displayCountRenders()
  return (<div onMouseOver={props.onMouseOver}>Mouse over me please!!</div>)
})

const UseCallback = () => {
  const [count, setCount] = useState(-10)

  const increment = (n) => {
    setCount(c => c + n)
  }

  const onMouseOver = useCallback(() => {
      console.log('...')
  }, [10])
  
  return (
    <div>
      <button onClick={() => increment(1)}>+</button>
      {count}
      <Greet onMouseOver={onMouseOver}/>
    </div>
  )
}

export default UseCallback

// import React from 'react'

const Counter = ({count, setCount}) => {

  return (
    <div>
        <p id="count">{count}</p>
        <button onClick={() => setCount(count + 1)} id="countBtn">Increment</button>
    </div>
  )
}

export default Counter;
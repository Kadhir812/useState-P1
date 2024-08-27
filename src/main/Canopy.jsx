import React, { useState }from 'react'

const Canopy = () => {
    const [count, SetCount] = useState(1);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick = {() => SetCount(count + 1)}>Increase</button>
      <button onClick = {() => SetCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default Canopy


import React, {useState, useEffect} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('this is a component did mount')
  }, [])
  useEffect(() => {
    console.log('this is a component did update')
  }, [count])


  const addCount = () => {
    setCount(count + 1)
  }
  const subtractCount = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>Add 1</button>
      <button onClick={subtractCount}>Minus 1</button>

    </div>
  )
}

export default Counter
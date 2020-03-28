import React,{ useState } from 'react'

const App = () => {

 const [count, setCount] = useState(0)

  const increment = () => setCount (count +1)
  const decrement = () => setCount (count -1)

  const increment2 = () => setCount (previciousCount => previciousCount + 1)
  const decrement2 = () => setCount (previciousCount => previciousCount - 1)

  const reset = () => setCount (0)
  const twice = () => setCount (previciousCount => previciousCount *2)
  const calculate3 = () => setCount (previciousCount => {
    if (previciousCount%3 === 0) {
      previciousCount = previciousCount/3;
    }
    return previciousCount;
  })
  

  return (
    <React.Fragment> 
      <div>
	count: {count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={twice}>*2</button>
        <button onClick={calculate3}>3の倍数のときだけ3で割る</button>
      </div>
    </React.Fragment>
  )
}

export default App

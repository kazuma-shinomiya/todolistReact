const { useState } = require("react")

const CountApp = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(prevCount => prevCount + 1)
  }

  const minus = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <h1>カウンターUp</h1>
      <p>{count}</p>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>=</button>
      </div>
    </div>
  )
}
export default CountApp;
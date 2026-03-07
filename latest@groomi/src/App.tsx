import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>리액트 예제</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          기본 <code>예제</code> 입니다.
        </p>
      </div>
      <p className="read-the-docs">
        예제는 이렇게 만듭니다.<br></br>
        npm create vite@latest groomi, npm run dev, npm install
      </p>
    </>
  )
}

export default App

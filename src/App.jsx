import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './component/Device'
import Watch from './component/Watch/Watch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Device name="phone" price="3444"></Device>
      <Device name="Vivo" price="3944"></Device>
      <Watch></Watch>
     
      
    <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Connection from './Components/Connection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Connection/>
    </>
  )
}

export default App

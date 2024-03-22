import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Here we can add routing also, but as we need to navigate between links we didn't add */}
      <Home />
    </>
  )
}

export default App

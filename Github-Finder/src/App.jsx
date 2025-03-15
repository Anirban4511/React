import { useState } from 'react'
import '../src/input.css'
import Github from '../src/components/Github-Finder/Github'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Github/>
    </>
  )
}

export default App

import { useState } from 'react'
import StopWatch from './StopWatch.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    
    <StopWatch/>
    <StopWatch/>

    <StopWatch/>

    <StopWatch/>


    </>



  )
}

export default App

import { useState } from 'react'
import Background from './components/Background'
import { Foreground } from './components/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='relative h-screen w-full bg-zinc-800 '>
      <Background/>
      <Foreground/>
    </div>
    </>
  )
}

export default App

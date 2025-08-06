import { useState } from 'react'

import Imagegenerator from './Component/imagegenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Imagegenerator/>
  )
}

export default App

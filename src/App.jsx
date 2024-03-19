
import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'


//----import files
import LoginForm from "./Component/Login/LoginData"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<LoginForm/>}/>
    </Routes>
    </>
  )
}

export default App

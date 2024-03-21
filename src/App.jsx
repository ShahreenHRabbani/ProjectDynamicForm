
import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'


//----import files
import LoginForm from "./Component/Login/LoginData"
import ApartmentInfo from "./Component/Apartment/AparrtmentInfo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/apartmentdetails" element={<ApartmentInfo />} />
      </Routes>
    </>
  );
}

export default App

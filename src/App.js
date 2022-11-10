import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Data from './components/Data'
import SecondPage from './components/SecondPage'
const App = () => {

  const handler =(element)=>{
    console.log(element)
  }
  return (
    <>
      {/* <Data/> */}
      <Routes>
        <Route path='/' element={<Data/>} />
        <Route path='/second' element={<SecondPage x={handler}/>}/>
      </Routes>
    </>
  )
}

export default App
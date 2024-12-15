import React from 'react'
import AddData from './components/AddData'
import {Route, Routes} from "react-router-dom"
import EditData from './components/EditData'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AddData/>} />
        <Route path='/edit/:id' element={<EditData/>} />
      </Routes>
    </div>
  )
}

export default App
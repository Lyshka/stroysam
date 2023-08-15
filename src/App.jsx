import React from 'react'
import {Route, Routes} from "react-router-dom"

import { Auth, Main } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/' element={<Main />}/>
    </Routes>
  )
}

export default App
import { useState } from 'react'
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'

import './App.css'
import { Signup } from './pages/signup'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { Send } from './pages/send'

function App() {
  return <div>
  {/* <Signup/> */}
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/send' element={<Send/>} />
        </Routes>
      </BrowserRouter>
  </div>
  
}

export default App

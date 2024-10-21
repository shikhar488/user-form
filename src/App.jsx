import {Route, Routes } from 'react-router-dom'
import './App.css'
import UserInput from './UserInput'
import UserDetails from './UserDetails'

function App() {
  return(

      <Routes>
        <Route path='/' element={<UserInput/>}></Route>
        <Route path='/userDetails' element={<UserDetails/>}></Route>
      </Routes>
    
  )
}

export default App

import {Route, Routes } from 'react-router-dom'
import './App.css'
import UserInput from './UserInput'
import UserDetails from './UserDetails'
import AlbumsList from './components/AlbumList'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<UserInput/>}></Route>
        <Route path='/userDetails' element={<UserDetails/>}></Route>
      </Routes>

      <div>
      <h2>Data from the fake api store</h2>
      <AlbumsList/>
    </div>
    
      </>
    
  )
}

export default App

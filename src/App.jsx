import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <h1>radi</h1>
      <Outlet />
      {/* footer */}
    </>
  )
}

export default App

// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <Navigation />
        {/* <h2> Testing </h2> */}
        <Outlet />
      </div>
  )
}

export default App

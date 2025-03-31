import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let Counter = 5

  const addValue =  () => {
    console.log("Value added", Math.random());
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: 5</h2>
      <button 
      onClick={addValue}>Add value</button>
      <br />
      <button>decrease value</button>
    </>
  )
}

export default App


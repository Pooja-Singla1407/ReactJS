import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgc, setBgc] = useState("white");

  return (
    <>
      <div style={{backgroundColor : bgc , height : "100vh"}}>
        <button id='red' onClick={() => setBgc("red")}>Red</button>
        <button id='blue' onClick={() => setBgc("blue")}>Blue</button>
        <button id='black' onClick={() => setBgc("black")}>Black</button>
        <button id='white' onClick={() => setBgc("white")}>White</button>
        <button id='gray' onClick={() => setBgc("gray")}>Gray</button>
        <button id='yellow' onClick={() => setBgc("yellow")}>Yellow</button>
        <button id='green' onClick={() => setBgc("green")}>Green</button>
      </div>
    </>
  )
}

export default App

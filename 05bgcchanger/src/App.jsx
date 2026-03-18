import { useState } from 'react'
import './App.css'


// If we create a function separately that changes bgc based on soem argument, then we wont be able to pass function reference in onClick event , because it would not take any arguments there.
// ex onClick = {setBgc("red")} would call the function then and there, and hence we use an arrow funtion and change the previous state when button clicked.
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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username : "myName",
    age : 21
  }

  let myArr = [1,2,3]

  //To pass props inside the element, use any object encapsulated inside curly braces, and you can access props inside the card function using props.propName
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      < Card username = "myChannel" someObj = {myArr} btnText = "Price"/>
      < Card username = "myChannel" someObj = {myArr} btnText = "Cost"/>
    </>
  )
}

//Here we added the card twice , and in both cards it is hsowing different text of "Price" and "Cost". We passed the text to be displayed as props and those props can be used to display different texts.

export default App

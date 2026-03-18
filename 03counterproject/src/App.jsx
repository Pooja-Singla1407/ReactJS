import { useState } from 'react'
import './App.css'


/* Without using hooks , it is difficult to update values in UI
function App() {

  let counter = 15;

  const addValue = () =>{
    console.log("Value incremented");
    counter++;
  }

  const removeValue = () =>{
    console.log("Value decremented");
    counter--;
  }
  //We do not write addValue() in onclick event , because we need to pass the function reference, not call the function.
  //If we write addValue(), then the function is called while rendering, and makes no impact when the button is clicked.

  return (
    <>
      <div>
        <h1>Welcome to counter!</h1>
        <h2>Counter Value : {counter}</h2>

        <button
        onClick={addValue}>Add value</button>
        <br />
        <button
        onClick={removeValue}>remove value</button>
      </div>
    </>
  )
}


*/

//uisng hooks
function App(){
  let [counter , setCounter] = useState(10);

  const addValue = () =>{
    counter++;
    setCounter(counter);
  }

  const removeValue = () =>{
    if(counter) counter--;
    setCounter(counter);
  }

  return (
    <>
    <div>
      <h1>Welcome to Counter</h1>
      <h1>Counter value : {counter}</h1>

      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
      </div></>
  )

}
export default App

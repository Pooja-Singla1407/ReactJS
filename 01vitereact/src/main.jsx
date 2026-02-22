import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com' , target : '_blank'},
  'click me to visit google'
)

/*
we declared reactElement like this in our custom react.
but it wont work here because the .render function we use expects a function in some pre-defined syntax.
hence we created reactElement by the .createElement which uses some syntax.
Declaring as 'App' function will also work, because the primary function of renderig is to convert html only.
We create reactElement just for understanding of how html is converted to ReactElement.

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children: 'Click me to visit google'
}
*/

/*
createRoot(document.getElementById('root')).render(
    <App />
)
*/

createRoot(document.getElementById('root')).render(
    reactElement
)

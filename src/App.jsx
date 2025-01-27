import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// import ChangeValue from './tutorial/basics/buttonchange'
// import IncreaseSetValue from './tutorial/basics/increaseSateVslue'
// import ToDo from './tutorial/basics/Todo'
import State from './tutorial/basics/props' 

function App() {
  const [count, setCount] = useState(0)

  const values = [
    {name:'kerala',population:3000,year:1957},
    {name:'karnataka',population:4000,year:1857},
    {name:'tamilnadu',population:5000,year:1757},
  ]

  return (
      <>
       <State values={values}/>
      </>
  );
};

export default App;
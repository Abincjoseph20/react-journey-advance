import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// import ChangeValue from './tutorial/basics/buttonchange'
// import IncreaseSetValue from './tutorial/basics/increaseSateVslue'
// import ToDo from './tutorial/basics/Todo'
import State from './tutorial/basics/props' 

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
       <State name={'kerala'}/>
       <State name={'karnataka'}/>
       <State name={'tamilnadu'}/>
      </>
  );
};

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// import ChangeValue from './tutorial/basics/buttonchange'
// import IncreaseSetValue from './tutorial/basics/increaseSateVslue'
// import ToDo from './tutorial/basics/Todo'
// import State from './tutorial/basics/props' 
// import BMI from './tutorial/basics/bmi'
import Effect from './tutorial/basics/fetch'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
       <Effect/>
      </>
  );
};

export default App;
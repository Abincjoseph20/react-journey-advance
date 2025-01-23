import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// import ChangeValue from './tutorial/basics/buttonchange'
import IncreaseSetValue from './tutorial/basics/increaseSateVslue'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
       <IncreaseSetValue/>
      </>
  );
};

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import UseStateArry from './tutorial/basics/dataItration'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
       <UseStateArry/>
      </>
  );
};

export default App;
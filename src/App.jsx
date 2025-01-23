import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ChangeValue from './tutorial/basics/buttonchange'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
       <ChangeValue/>
      </>
  );
};

export default App;
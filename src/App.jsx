import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Basics from './tutorial/basics/basics'
// import EroorExample from './tutorial/basics/eroorexample'
import UsingUseSatate from './tutorial/basics/useState'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Basics/>
      {/* <EroorExample/> */}
      <UsingUseSatate/>
      </>
  );
};

export default App;
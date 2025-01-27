import React from "react"
import './style.css'

const State = (props) => {
  return (
    <div className="bgs">
        <h1>{props.name}</h1>
        <h1>{props.population}</h1>
    </div>
  )
}
export default State;
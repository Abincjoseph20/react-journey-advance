import React from "react"
import './style.css'

const State = ({values}) => {
  return (
    <div>
    {values.map((values)=>(
        <div className="bgs">
            <h1>name:{values.name}</h1>
            <h1>population:{values.population}</h1>
            <h1>year:{values.year}</h1>
        </div>
    ))}
    </div>
  );
};
export default State;
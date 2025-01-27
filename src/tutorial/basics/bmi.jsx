import { useState } from "react";

function BMI(){

    let [height,setHeight]= useState()
    let [weight,setWeight]= useState('')
    let [calculate,setcalCulate]= useState(0)

    const target1 = (evt1)=>{
        setHeight(evt1.target.value)
    }

    const target2 = (evt2)=>{
        setWeight(evt2.target.value)
    }

    const Handlechange = ()=>{
        const NewValue = weight/(height*height);
        setcalCulate(NewValue.toFixed(2))
    }

    return(
        <div>


      <div >
        <input  type="text" value={height} onChange={target1} placeholder="Height (m)" />
        <br />
        <br />
        <input  type="text" value={weight} onChange={target2} placeholder="Weight (kg)" />
        <br />
        <br />
        <button  onClick={Handlechange}>Click me</button>
        <div className="div2">
          <h1>{calculate}</h1>
        </div>
      </div>
        </div>



    );
};

export default BMI;
import { useState } from "react";

function IncreaseSetValue(){
    const [value,setValue] = useState(0);

    const Hnadleclick = ()=>{

        setTimeout(()=>{
            console.log('clicked button')
            setValue((currentvalue)=>{
                return currentvalue + 1;
            });
            
        },3000);
    };
    return(
        <>
        <h1>{value}</h1>
        <button type="button" onClick={Hnadleclick}>+</button>
        </>
    );

};
export default IncreaseSetValue;
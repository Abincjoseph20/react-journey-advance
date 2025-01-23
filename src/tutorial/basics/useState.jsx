import { useState } from "react";

function UsingUseSatate(){

    let [count,setValue] = useState(0);
    
    let HandleClick = ()=>{
        setValue(count + 1);
    }

return(
    <>
    <h1>you clicked {count} times</h1>
    <button type="button" onClick={HandleClick}>click me</button>
    </>
    );
};

export default UsingUseSatate;
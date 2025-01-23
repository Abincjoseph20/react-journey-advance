import { useState } from "react";

function ChangeValue(){
    const [name,setName] = useState('abin');
    const [age,setAg] = useState(25);
    const [hobby,setHobby] = useState('nill');
    
    const Handleclick = ()=>{
        setName('sabin');
        setAg(20);
        setHobby('nothig')
    };

    return(
        <>
        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
        <h1>hobby:{hobby}</h1>
        <button onClick={Handleclick} type="button">click me</button>
        </>
    );
};

export default ChangeValue;
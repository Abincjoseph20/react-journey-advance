import { useState } from "react";

function ChangeValue(){
    const [person,setPerson] = useState({
        name:'abin',
        age:25,
        hobby:'nill'
    })
 
    const Handleclick = ()=>{
setPerson({name:'sabin',age:20,hobby:'streming'});
    };

    return(
        <>
        <h1>name:{person.name}</h1>
        <h1>age:{person.age}</h1>
        <h1>hobby:{person.hobby}</h1>
        <button onClick={Handleclick} type="button">click me</button>
        </>
    );
};

export default ChangeValue;
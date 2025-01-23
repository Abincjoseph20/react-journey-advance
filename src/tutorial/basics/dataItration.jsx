import { data } from "../../data";
import React from "react";
const UseStateArry = ()=>{
    let [people,setArry] = React.useState(data);
return(
    <>
    {people.map((person)=>{
        console.log(person)
        const {id,name} = person;
        return <div key={id}>
            <h4>{name}</h4>
        </div>;
    })}
    </>
)
}
export default UseStateArry;
import { data } from "../../data";
import React from "react";
const UseStateArry = ()=>{
    let [people,setArry] = React.useState(data);

    const removeItem = (id)=>{
        const newPeopl = people.filter((person)=>person.id !== id);
        setArry(newPeopl);
    }

    const ClearAllItem = ()=>{
    setArry([]);
    }
return(

    <>
    {people.map((person)=>{
        console.log(person)
        const {id,name} = person;
        return <div key={id}>
            <h4>{name}</h4>
            <button type="submit" onClick={()=>removeItem(id)}>remove</button>
        </div>;
    })}
    <button type="submit" onClick={ClearAllItem} style={{marginTop:'2rem'}}>Cleare</button>
    </>
)
}
export default UseStateArry;
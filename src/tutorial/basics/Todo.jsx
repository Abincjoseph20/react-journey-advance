import { useState } from "react";

function ToDo(){

    const [value,setValue] = useState('')
    const [arr,Setarr] = useState([])

    const handleClick = (evt)=>{
        setValue(evt.target.value);
    }

    const handleAdd = ()=>{
        if(value){
            const Newvalue = {id:arr.length+1,list:value}
            Setarr([...arr,Newvalue]);
            setValue('')
        }
    }

    const RemoveItem = (id)=>{
        const NewList = arr.filter((item)=> item.id !== id)
        Setarr(NewList)
    }

    return(
        <>
        <div className="">
            <input value={value} type="text"  onChange={handleClick}/>
            <button onClick={handleAdd}>add</button>
            <div className="">
                {arr.map((item)=>(
                    <div key={item.id}>
                        <h1>{item.list}</h1>
                        <button onClick={()=>RemoveItem(item.id)}>remove</button>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};
export default ToDo;

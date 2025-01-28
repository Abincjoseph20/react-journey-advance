import { useState,useEffect } from "react";
import './style.css'

function Effect(){

    const [value,setValue]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(value => setValue(value.splice(0,10)))
    },[])


    return (
        <div>
            {value.map((post)=>(
                <div key={post.id} className="bgs">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
                
            ))}
        </div>
        
    )
}
export default Effect;
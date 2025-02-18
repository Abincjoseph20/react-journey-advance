import { useState } from "react"

export const Continput = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    const handleClick=(e)=>{
        setName(e.target.value)
    }

    // const handleEmailClick=(e)=>{
    //     setEmail(e.target.value1)
    // }

    const HandleSubmit =(e)=>{
        e.preventDefalt
    }
  return (
    <form> 
        <h1>controll input</h1>
        <div className="">
            <label htmlFor="name"  name='name' >name: </label>
            <input type="text" id="name" value={name} onChange={handleClick}/>
        <br/>
            <label htmlFor="email" >email: </label>
            <input type="email" value1={email} onChange={(e)=>setEmail(e.target.value1)}/>
        <br/>
            <button type="submit" onClick={HandleSubmit}>submit</button>
        </div>
    </form>
  )
}

export default Continput;
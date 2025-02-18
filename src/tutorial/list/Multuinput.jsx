import { useState } from "react"

export const Continput = () => {

    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
    });

    const HandleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value }); 
      };

    const HandleSubmit =(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        e.preventDefault();
        console.log(user);
    }
  return (
    <form> 
        <h1>controll input</h1>
        <div className="">
            <label htmlFor="name"  name='name' >name: </label>
            <input type="text" id="name" name='name' value={user.name} onChange={HandleChange}/>
        <br/>
            <label htmlFor="email" >email: </label>
            <input type="email" value={user.email} name="email" onChange={HandleChange}/>
        <br/>
        <br/>
            <label htmlFor="email" >password: </label>
            <input type="password" name="password" value={user.password} onChange={HandleChange}/>
        <br/>
            <button type="submit" onClick={HandleSubmit}>submit</button>
        </div>
    </form>
  )
}

export default Continput;
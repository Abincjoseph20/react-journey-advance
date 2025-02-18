import NavLink  from "./NavLink"
import { useState } from "react"
export const Navbar = () => {
    const [user,SetUser]=useState({name:'bob'})
    const loggout=()=>{
        SetUser(null)
    };
  return (
    <div>
        <h5>CONTEXT-API</h5>
        <NavLink user={user} loggout={loggout}/>
    </div>
  )
}

export default Navbar

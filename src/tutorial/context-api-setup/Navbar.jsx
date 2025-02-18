import NavLink  from "./NavLink"
import { useState,createContext } from "react"


export const NavbarContext = createContext()
console.log(NavbarContext)

const Navbar = () => {
    const [user,SetUser]=useState({name:'bob'})
    const loggout=()=>{
        SetUser(null)
    };
  return (
    <div>
      <NavbarContext.Provider value={{user,loggout}}>
        <h5>CONTEXT-API</h5>
        <NavLink />
      </NavbarContext.Provider>
    </div>
  )
}

export default Navbar

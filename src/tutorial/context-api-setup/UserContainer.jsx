import { useContext } from "react";
import { NavbarContext } from "./Navbar";



const UserContainer = () => {
  const {user,loggout} = useContext(NavbarContext);
  return (
    
    <div>
      {user?(
        <>
        <p>hello tere {user?.name}</p>
        <button onClick={loggout}>Logout</button>
        </>
      ):(
<p>
  please login
</p>
      )}
    </div>

  )
}
export default UserContainer;
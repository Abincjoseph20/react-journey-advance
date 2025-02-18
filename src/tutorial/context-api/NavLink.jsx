import UserContainer from "./UserContainer";
export const NavLink = ({user,loggout}) => {
  return (
    <div>
        <ul>
            <li>
                <a href="">home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
        </ul>
        <UserContainer user={user} loggout={loggout}/>
    </div>
  )
}
export default NavLink;
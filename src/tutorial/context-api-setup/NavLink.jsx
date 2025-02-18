import UserContainer from "./UserContainer";
export const NavLink = () => {
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
        <UserContainer />
    </div>
  )
}
export default NavLink;
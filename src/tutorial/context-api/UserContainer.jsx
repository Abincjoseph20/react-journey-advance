export const UserContainer = ({user,loggout}) => {
  return (
    <div>
        <p>hello tere {user?.name}</p>
        <button onClick={loggout}>Logout</button>
    </div>
  )
}
export default UserContainer;
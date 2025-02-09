import { people } from "../../data";
import { Person } from "./person";

export const List = () => {
  return (
    <div>{people.map((person)=>{
    return <Person key={person.name} {...person}/>
    })}</div>
  )
}

export default List;
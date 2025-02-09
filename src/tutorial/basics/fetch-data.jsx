import { useEffect } from "react";
import { useState } from "react";

const url = 'https://api.github.com/users/QuincyLarson'; 

const MultiFetchData = ()=>{

    const [isLoading,setLoading]=useState(true)
    const [isError,setError]=useState(false)

    const [user, setUser] = useState(null)

    useEffect(()=>{
        const fetchUSer = async ()=>{
            try{
                const resp = await fetch(url)
                const user = await resp.json();
                console.log(user);
                setUser(user)
                setLoading(false)
            }catch (error){
                console.log(error)
            }
        };
        fetchUSer();
    },[]);

    if(isLoading){
        return<h1>Loading...</h1>
    }
    if(isError){
        return<h2>there was an error...</h2>
    }
    return <div className="">
        <img style={{width:'150px',borderRadius:'25px' }} src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
        <h2>{user.company}</h2>
    </div>

}

export default MultiFetchData;
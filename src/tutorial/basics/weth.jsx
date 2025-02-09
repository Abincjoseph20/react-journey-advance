import { useState,useEffect } from "react";


function UserFetch(){
    const [city,SetCity]=useState();
    const [Click,setClcik]=useState();
    const [country,setCountry]=useState();
    const [time, setTime] = useState('');
    const [weather, setWeather] = useState('');

    useEffect(()=>{
            if(city && setClcik ){
                const fetchData = async ()=>{
                try{
                    const api = `http://api.weatherapi.com/v1/current.json?key=4788408d446a4fd19d5114021240411&q=${city}&aqi=yes`;
                    const resp = await fetch(api);
                    const data = await resp.json();

                    if(resp.ok){
                        setCountry(data.location.country);
                        setTime(data.location.localtime)
                        setWeather(data.current.condtion.text)
                    }else{
                        console.log('error')
                    }
    
                }catch(error){
                    console.log(error)
                }
            };
            fetchData()
            setClcik(false);
            }
           
    },[country,city])

    const HandleInput = (e)=>{
        SetCity(e.target.value);
    }

    const HandleClick = ()=>{
        setClcik(true)
    }

    return(
        <div className="">
            <input type="text" value={city} onChange={HandleInput} />
            <button onClick={HandleClick}>find</button>
            {country && (
                <div className="">
                    <h1>{city}</h1>
                    <h1>{country}</h1>
                    <h1>{time}</h1>
                    <h1>{weather}</h1>
                </div>
            )}
        </div>
    )
}
export default UserFetch;
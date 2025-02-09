import { useState, useEffect } from 'react';

const WeatherFinder = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState('');
  const [fetchTrigger, setFetchTrigger] = useState(false);

  useEffect(() => {
    if (city && fetchTrigger) {
      const fetchWeather = async () => {
        try {
          const api = `http://api.weatherapi.com/v1/current.json?key=4788408d446a4fd19d5114021240411&q=${city}&aqi=yes`;
          const resp = await fetch(api);
          const data = await resp.json();
          
          if (resp.ok) {
            setCountry(data.location.country);
            setTime(data.location.localtime);
            setTemp(data.current.temp_c);
            setWeather(data.current.condition.text);
          } else {
            console.log('Error in fetching data');
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      
      fetchWeather();
      setFetchTrigger(false);
    }
  }, [fetchTrigger, city]);

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleFetch = () => {
    setFetchTrigger(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a city"
        onChange={handleInput}
      />
      <button onClick={handleFetch}>Find</button>
      <div>
        {temp && (
          <div>
            <h3>Weather: {weather}</h3>
            <h4>Temperature: {temp}°C</h4>
            <h5>Time: {time}</h5>
            <h3>Country: {country}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherFinder;

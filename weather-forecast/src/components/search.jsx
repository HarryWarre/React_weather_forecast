import { useState } from "react";

function Search() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const getWeatherData = async () => {
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const url = `${baseUrl}?q=${city}&appid=38c9a5ae89111560fcbf24bd89960a7e`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  let content;

  if (weatherData) {
    const { main, weather } = weatherData;
    const { temp, pressure, humidity } = main;
    const { description } = weather[0];

    content = (
      <div>
        <p>Temperature: {temp}</p>
        <p>Pressure: {pressure}</p>
        <p>Humidity: {humidity}</p>
        <p>Description: {description}</p>
      </div>
    );
  }

  return (
    <>
      {/* <div className='form-outline'>
        <input
          type='search'
          id='form1'
          className='form-control'
          placeholder='Type query'
          aria-label='Search'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div> */}

      {/* Nghiên cứu */}
      <div>
        <input type='text' value={city} onChange={handleCityChange} />
        <button onClick={getWeatherData}>Get Weather</button>

        {content}
      </div>
    </>
  );
}
export default Search;

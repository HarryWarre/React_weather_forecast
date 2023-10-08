import { useEffect, useRef, useState } from "react";
import moment from "moment";
import SetDataCurrentWeather from "../function/setDataCurrentWeather";
import fetchWeatherData from "../function/getDataCurrentWeather";
function CurrentWeather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWeatherData();
      setWeather(data);
    };

    fetchData();
  }, []);

  //  Set default data
  const dataWeather = SetDataCurrentWeather(weather);
  return (
    <div>
      <div className='d-flex justify-content-around mt-3'>
        <p className='small'>{dataWeather.name}</p>
        <p className='small'>{moment().format("DD/MM/yy")}</p>
        <p className='small'>{dataWeather.weatherMap}</p>
      </div>
      <div className='d-flex justify-content-around align-items-center py-5 my-4'>
        <p className='fw-bold mb-0 fs-2'>{dataWeather.celcius}°C</p>
        <div className='text-start'>
          <p className='small'>{moment().format("HH:mm")}</p>
          <p className='h3 mb-3'>{moment().format("dddd")}</p>
          <p className='small mb-0 text-capitalize'>{dataWeather.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;

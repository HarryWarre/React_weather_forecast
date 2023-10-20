import { useState, useEffect } from "react";
import fetchDayData from "../function/fetchDataDayWeather";
import SetDataDayWeather from "../function/setDataDayWeather";

const DayWeather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDayData();
      setWeather(data);
    };

    fetchData();
  }, []);

  //  Set default data
  const day = SetDataDayWeather(weather);

  return (
    <div>
      <p className='small mt-3 mb-2 pb-2'>For a day</p>
      <p className='pb-1'>
        <span className='pe-2'>{day[0].time}</span>
        <strong>{day[0].temp}°</strong>
      </p>
      <p className='pb-1'>
        <span className='pe-2'>{day[1].time}</span>
        <strong>{day[1].temp}°</strong>
      </p>
      <p className='pb-1'>
        <span className='pe-2'>{day[2].time}</span>
        <strong>{day[2].temp}°</strong>
      </p>
      <p className='pb-1'>
        <span className='pe-2'>{day[3].time}</span>
        <strong>{day[3].temp}°</strong>
      </p>
      <p className='pb-1'>
        <span className='pe-2'>{day[4].time}</span>
        <strong>{day[4].temp}°</strong>
      </p>
      <p className='pb-1'>
        <span className='pe-2'>{day[5].time}</span>
        <strong>{day[5].temp}°</strong>
      </p>
      <p className='pb-1'>
        <span className='pe-2'>{day[6].time}</span>
        <strong>{day[6].temp}°</strong>
      </p>
    </div>
  );
};

export default DayWeather;

import { useState, useEffect } from "react";
import fetchDayData from "../function/fetchDataDayWeather";
import SetDataDayWeather from "../function/setDataDayWeather";
import getDateofWeek from "../function/getDate";
export default function WeekWeather() {
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
  console.log("WEEK:", day);
  let week = getDateofWeek(day[0].txtdate);

  return (
    <div className='d-flex justify-content-around align-items-center mb-3'>
      <div className='flex-column border rounded border-1 p-1'>
        <p className='small mb-1 p-1'>{week[0]}</p>
        <p className='small mb-0'>
          <strong>{day[0].temp}°C</strong>
        </p>
      </div>
      <div className='flex-column p-1'>
        <p className='small mb-1'>{week[1]}</p>
        <p className='small mb-0'>
          <strong>{day[1].temp}°C</strong>
        </p>
      </div>
      <div className='flex-column p-1'>
        <p className='small mb-1'>{week[2]}</p>
        <p className='small mb-0'>
          <strong>{day[2].temp}°C</strong>
        </p>
      </div>
      <div className='flex-column p-1'>
        <p className='small mb-1'>{week[3]}</p>
        <p className='small mb-0'>
          <strong>{day[3].temp}°C</strong>
        </p>
      </div>
      <div className='flex-column p-1'>
        <p className='small mb-1'>{week[4]}</p>
        <p className='small mb-0'>
          <strong>{day[4].temp}°C</strong>
        </p>
      </div>
      <div className='flex-column p-1'>
        <p className='small mb-1'>{week[5]}</p>
        <p className='small mb-0'>
          <strong>{day[5].temp}°C</strong>
        </p>
      </div>
      <div className='flex-column p-1'>
        <p className='small mb-1'>{week[6]}</p>
        <p className='small mb-0'>
          <strong>{day[6].temp}°C</strong>
        </p>
      </div>
    </div>
  );
}

import getHour from "./getHour";

export default function SetDataDayWeather(weather) {
  //    Set Default Data
  if (!weather) {
    return [
      {
        time: "06:00",
        temp: 28,
      },
      {
        time: "9:00",
        temp: 28,
      },
      {
        time: "12:00",
        temp: 28,
      },
      {
        time: "15:00",
        temp: 28,
      },
      {
        time: "18:00",
        temp: 28,
      },
      {
        time: "21:00",
        temp: 28,
      },
      {
        time: "24:00",
        temp: 28,
      },
    ];
  }
  //   When get data success => SetData
  const list = weather.list;
  const data = [
    {
      time: getHour(list[0].dt_txt),
      temp: (Math.round((list[0].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
    {
      time: getHour(list[8].dt_txt),
      temp: (Math.round((list[8].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
    {
      time: getHour(list[16].dt_txt),
      temp: (Math.round((list[16].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
    {
      time: getHour(list[24].dt_txt),
      temp: (Math.round((list[24].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
    {
      time: getHour(list[32].dt_txt),
      temp: (Math.round((list[32].main.temp - 273.15) * 10) / 10).toFixed(1),
    },

    {
      time: getHour(list[39].dt_txt),
      temp: (Math.round((list[39].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
  ];

  return data;
}

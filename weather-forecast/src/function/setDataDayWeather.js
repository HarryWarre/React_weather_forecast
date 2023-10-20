import getHour from "./getHour";

export default function SetDataDayWeather(weather) {
  //    Set Default Data
  let date = "Monday";
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
  date = weather.list[0].dt_txt;
  //   When get data success => SetData
  const list = weather.list.slice(0, 7);
  const data = [
    {
      time: getHour(list[0].dt_txt),
      temp: (Math.round((list[0].main.temp - 273.15) * 10) / 10).toFixed(1),
      txtdate: date,
    },
    {
      time: getHour(list[1].dt_txt),
      temp: (Math.round((list[1].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
    {
      time: getHour(list[2].dt_txt),
      temp: (Math.round((list[2].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
    {
      time: getHour(list[3].dt_txt),
      temp: (Math.round((list[3].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
    {
      time: getHour(list[4].dt_txt),
      temp: (Math.round((list[4].main.temp - 273.15) * 10) / 10).toFixed(1),
    },

    {
      time: getHour(list[5].dt_txt),
      temp: (Math.round((list[5].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
    {
      time: getHour(list[6].dt_txt),
      temp: (Math.round((list[6].main.temp - 273.15) * 10) / 10).toFixed(1),
    },
  ];

  return data;
}

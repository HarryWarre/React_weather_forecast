export default function SetDataCurrentWeather(weather) {
  //    Set Default Data
  if (!weather) {
    return {
      name: "Vietnam",
      weatherMap: "Sunny",
      desc: "Sunny",
      celcius: 28,
    };
  }
  //   When get data success => SetData
  const name = weather.name;
  const weatherMap = weather.weather[0].main;
  const desc = weather.weather[0].description;
  const celcius = Math.round((weather.main.temp - 273.15) * 10) / 10;

  return { name, weatherMap, desc, celcius };
}

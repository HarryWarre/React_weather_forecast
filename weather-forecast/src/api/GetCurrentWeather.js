import { json } from "react-router-dom";
import KEY_API from "./api_key";

export default async function GetCurrentWeather(city) {
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=38c9a5ae89111560fcbf24bd89960a7e`;

  const response = await fetch(API_URL);
  const data = await response.json();

  console.log(data);

  return data;
}

import GetWeatherCoordinate from "../api/GetWeatherCoordinate";
import { getLocation } from "./getLocation";

const getWeather = async (lat, lng) => {
  return GetWeatherCoordinate(lat, lng);
};

export default async function fetchWeatherData(lat, lng) {
  try {
    const { lat, lng } = await getLocation();
    const data = await getWeather(lat, lng);
    console.log(lat, lng);
    return data;
  } catch (e) {}
}

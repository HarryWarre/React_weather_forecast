import GetWeatherCoordinate from "../api/GetWeatherCoordinate";
import { getLocation } from "../function/getLocation";

const getWeather = async (lat, lng) => {
  return GetWeatherCoordinate(lat, lng);
};

export default async function fetchWeatherData() {
  try {
    const { lat, lng } = await getLocation();
    const data = await getWeather(lat, lng);
    return data;
  } catch (e) {}
}

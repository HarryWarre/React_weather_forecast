import GetDayCoordinate from "../api/GetDayCoordinate";
import { getLocation } from "./getLocation";

const getWeather = async (lat, lng) => {
  return GetDayCoordinate(lat, lng);
};

export default async function fetchDayData(lat, lng) {
  try {
    const { lat, lng } = await getLocation();
    const data = await getWeather(lat, lng);
    return data;
  } catch (e) {}
}

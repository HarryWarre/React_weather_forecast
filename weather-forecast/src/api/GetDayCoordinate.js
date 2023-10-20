import KEY_API from "./api_key";

export default async function GetDayCoordinate(lat, lon) {
  const key = KEY_API();
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;

  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

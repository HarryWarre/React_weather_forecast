import moment from "moment";

export default function getDateofWeek(dtStr) {
  let datenow = getDate(dtStr);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentIndex = days.indexOf(datenow);
  console.log("Index", currentIndex);
  const weekDays = {};
  weekDays[0] = days[currentIndex];
  currentIndex += 1;
  for (let i = 1; i < 7; i++) {
    if (currentIndex > 6) currentIndex -= 7;
    weekDays[i] = days[currentIndex];
    currentIndex++;
  }

  return weekDays;
}

function getDate(dtStr) {
  const dt = moment(dtStr);
  const datenow = dt.format("dddd");
  // Sử dụng format('dddd') để lấy tên thứ
  return dt.format("dddd");
}

function countHours2(year, holidays) {
  let hours = 0;
  holidays.forEach((holiday) => {
    const date = new Date(`${holiday}/${year}`).getDay();
    hours += ![0, 6].includes(date) ? 2 : 0;
  });
  return hours;
}

const countHours = (year, holidays) =>
  holidays
    .map((day) => new Date(`${day}/${year}`).getDay())
    .filter((date) => ![0, 6].includes(date)).length * 2;

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

console.log(countHours(year, holidays)); // -> 4
console.log(countHours(2023, ["01/06", "04/01", "12/25"])); // -> 4
console.log(
  countHours(1985, [
    "01/01",
    "01/06",
    "02/02",
    "02/17",
    "02/28",
    "06/03",
    "12/06",
    "12/25",
  ])
); // -> 10
console.log(countHours(2000, ["01/01"])); // -> 0

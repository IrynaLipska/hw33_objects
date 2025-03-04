"use strict";

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

let car = {
  brand: "Ford",
  model: "Kuga",
  year: "2017",
  speed: "90",
  fuel: "60",
  consumption: "6",
  drivers: ["First", "Second"],
};

console.log(car);

car.drivers = [...car.drivers, "Third"];

console.log(car.drivers);

let driverName = "Second";

if (car.drivers.includes(driverName)) {
  console.log(`${driverName} is in list`);
} else {
  console.log(`${driverName} is not in list`);
}

let distance = +prompt("Enter your distance");

function requaredTime(distance) {
  let time = 0;
  time = distance / car.speed;
  if (time >= 4) {
    time = time + (time % 4);
  }
  let hours = Math.round(time);
  let minutes = Math.round((time - hours) * 60);

  return { hours, minutes };
}
let totalTime = requaredTime(distance);

alert(`Travel time is ${totalTime.hours} hours ${totalTime.minutes} minutes`);

function requaredFuel(distance) {
  let fuelQuantity = 0;
  fuelQuantity = (distance / 100) * 6;
  return fuelQuantity;
}

alert(`You need ${requaredFuel(distance)} liters of fuel`);

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let clock = {
  hours: 9,
  minutes: 31,
  second: 45,
};

function formatTime(currentTime) {
  currentTime = Number(currentTime);
  return currentTime < 10 ? "0" + currentTime : currentTime;
}

let h = clock.hours;
let m = clock.minutes;
let s = clock.second;

console.log(
  `Current time is ${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`
);

// console.log(student);
// console.log(student.name);
// student.name = 'Vlada';
// console.log(student.name);
// console.log(student);
// console.log(student['age']);
// console.log(student['skills']);

// student.getFullName();

// getFullName()

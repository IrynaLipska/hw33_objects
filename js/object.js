"use strict";

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

const car = {
  brand: "Ford",
  model: "Kuga",
  year: 2017,
  speed: 90,
  fuel: 60,
  consumption: 6,
  drivers: ["First", "Second"],

  printCar() {
    Object.entries(this).forEach(([key, value]) => {
      if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
      }
    });
  },

  addDriver() {
    this.drivers = [...this.drivers, "Third"];
  },

  requaredTime(distance) {
    // let distance = +prompt("Enter your distance");

    let time = distance / car.speed;

    if (time >= 4) {
      time = time + (time % 4);
    }
    let hours = 0;
    let minutes = 0;
    if (time < 1) {
      hours = 0;
      minutes = Math.round(time * 60);
    } else {
      hours = Math.round(time);
      minutes = Math.round((time - hours) * 60);
    }
    // alert(`Travel time is ${hours} hours ${minutes} minutes`);
    return { hours, minutes };
  },
  requaredFuel(distance) {
    let fuelQuantity = 0;
    fuelQuantity = (distance / 100) * 6;
    return fuelQuantity;
  },
  currentInfo() {
    let distance = +prompt("Enter your distance");
    const { hours, minutes } = this.requaredTime(distance);
    const fuelQuantity = this.requaredFuel(distance);
    alert(`Travel time is ${hours} hours ${minutes} minutes
  You need ${fuelQuantity} liters of fuel`);
  },
};

console.log(Object.entries(car));
car.printCar();

console.log(car.drivers);

car.addDriver();

console.log(car.drivers);
car.drivers = [...car.drivers, "Third"];

console.log(car.drivers);

let driverName = "Second";

if (car.drivers.includes(driverName)) {
  console.log(`${driverName} is in list`);
} else {
  console.log(`${driverName} is not in list`);
}

car.currentInfo();

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let clock = {
  hours: 9,
  minutes: 31,
  seconds: 45,
  formatTime(currentTime) {
    currentTime = Number(currentTime);
    return currentTime < 10 ? "0" + currentTime : currentTime;
  },
  printTime() {
    const h = this.hours;
    const m = this.minutes;
    const s = this.seconds;

    alert(
      `Current time is ${this.formatTime(h)}:${this.formatTime(
        m
      )}:${this.formatTime(s)}`
    );
  },
  addHour() {
    let hours = +prompt("how many hours to add");
    this.hours = (this.hours + hours) % 24;
    this.printTime();
  },
  addMinutes() {
    let minutes = +prompt("how many minutes to add");
    if (this.minutes + minutes > 59) {
      this.hours =
        (this.hours + Math.trunc((this.minutes + minutes) / 60)) % 24;
    }
    this.minutes = (this.minutes + minutes) % 60;
    this.printTime();
  },
  addSeconds() {
    let seconds = +prompt("how many seconds to add");
    console.log(this.seconds + seconds);
    let minutes = 0;
    if (this.seconds + seconds > 59) {
      console.log(seconds);
      minutes = this.minutes + Math.trunc((this.seconds + seconds) / 60);
    }
    console.log(minutes);
    if (minutes > 59) {
      this.hours =
        (this.hours + Math.trunc((this.minutes + minutes) / 60)) % 24;
    }
    this.minutes = minutes % 60;
    this.seconds = (this.seconds + seconds) % 60;
    this.printTime();
  },
};

clock.printTime();

clock.addSeconds();

// function updateClock() {
//   const currentTimeIs = new Date();
//   const blockCurrentTime = document.getElementById("clock");
//   let currentHours = currentTimeIs.getHours().toString().padStart(2, "0");
//   let currentMinutes = currentTimeIs.getMinutes().toString().padStart(2, "0");
//   let currentSeconds = currentTimeIs.getSeconds().toString().padStart(2, "0");
//   // console.log(`${currentHours}:${currentMinutes}:${currentSeconds}`);
//   blockCurrentTime.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`;
// }

// setInterval(updateClock(), 1000); //дія повторюється кожні 1000мсек=1сек

// // setTimeout(updateClock(), 5000);  затримка виконання в мсек

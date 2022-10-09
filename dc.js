setInterval(setClock, 1000);

let hourHand = document.querySelector("[hour-hand]");
let minHand = document.querySelector("[min-hand]");
let secHand = document.querySelector("[sec-hand]");

function setClock() {
  const currentDate = new Date();
  let secRatio = currentDate.getSeconds() / 60;
  let minRatio = (secRatio + currentDate.getMinutes()) / 60;
  let hourRatio = (minRatio + currentDate.getHours()) / 12;
  setRotation(secHand, secRatio);
  setRotation(minHand, minRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

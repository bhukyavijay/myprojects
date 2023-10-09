setInterval(setClock, 1000)

const Hourshand = document.querySelector('[data-hour-hand]')
const Minuteshand = document.querySelector('[data-minute-hand]')
const Secondshand = document.querySelector('[data-second-hand]')

function setClock() { 
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60 ;
  const minutesRatio = ( + currentDate.getMinutes()) / 60 
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(Secondshand, secondsRatio)
  setRotation(Minuteshand, minutesRatio)
  setRotation(Hourshand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


console.log()
console.log();
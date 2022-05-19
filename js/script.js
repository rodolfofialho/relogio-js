setInterval(setDate, 1000);

const hour = document.querySelector('[data-hour-hand]');
const minute = document.querySelector('[data-minute-hand]');
const second = document.querySelector('[data-second-hand]');

function setDate() {
    const dataAtual = new Date();
    const seconds = dataAtual.getSeconds() / 60;
    const minutes = (seconds + (dataAtual.getMinutes())) / 60;
    const hours = (minutes + dataAtual.getHours()) / 12;

    setRotatioin(second, seconds);
    setRotatioin(minute, minutes);
    setRotatioin(hour, hours);
}

function setRotatioin(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setDate();
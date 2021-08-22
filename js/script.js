// Importando uma classe
import Countdown from './modules/countdown.js';

const tempoParaNatal = new Countdown('24 December 2021 23:59:59 GMT-0300');
const timer =  document.querySelector('.timer');
setInterval(() => {
    timer.innerText = `${tempoParaNatal.hours} Horas: ${tempoParaNatal.minutes} Minutos: ${tempoParaNatal.seconds} Segundos`;
}, 1000);
let sec = 0;
let min = 0;
let hour = 0;
var intervalo;

function doisDigitos(digitos) {
  if (digitos < 10) {
    return "0" + digitos;
  } else {
    return digitos;
  }
}

function start() {
  timer();
  intervalo = setInterval(timer, 1000);
}

function pause() {
  clearInterval(intervalo);
}

function stop() {
  clearInterval(intervalo);
  sec = 0;
  min = 0;
  document.getElementById("timer").innerText = "00:00:00";
}

function timer() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      min = 0;
      hour++;
    }
  }
  document.getElementById("timer").innerText =
    doisDigitos(hour) + ":" + doisDigitos(min) + ":" + doisDigitos(sec);
}

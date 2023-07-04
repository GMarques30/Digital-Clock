let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

let time = setInterval(() => {
    let dateToday = new Date();
    let hour = dateToday.getHours().toString().padStart(2, '0');
    let min = dateToday.getMinutes().toString().padStart(2, '0');
    let sec = dateToday.getSeconds().toString().padStart(2, '0');

    horas.textContent = hour;
    minutos.textContent = min;
    segundos.textContent = sec;
});
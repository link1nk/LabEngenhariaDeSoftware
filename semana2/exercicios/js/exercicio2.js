function relogio() {
    const data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    horas = horas < 10 ? `0${horas}` : horas;
    minutos = minutos < 10 ? `0${minutos}` : minutos;
    segundos = segundos < 10 ? `0${segundos}` : segundos;

    const horarioFormatado = `${horas}:${minutos}:${segundos}`;
    document.querySelector("#relogio").innerText = horarioFormatado;

    setTimeout(relogio, 1000);
}

relogio();
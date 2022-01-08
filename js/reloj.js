'use strict';

const fechas = () =>
{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let segu = formatoHora(fecha.getSeconds());

    const dia = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
    const mes = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    let numeroDia = fecha.getDate();
    let NombreDia = dia[fecha.getDay()];
    let nombreMes = mes[fecha.getMonth()];
    let fechaTexto = `${numeroDia} ${NombreDia} ${nombreMes}`;

    document.getElementById("hora").innerHTML = `${hora}:${min}:${segu}`;
    document.getElementById("fecha").innerHTML = fechaTexto;
}


const formatoHora = (hora) =>
{
    if(hora<10)
    {
        hora = "0" + hora;
    }

    return hora;
}

setInterval(fechas,1000);//llama a la funcion cada un segundo a menos que llamemos a un clear interval
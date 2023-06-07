let nombre = prompt("Ingrese el nombre de usuario");
let apellido = prompt("Ingrese el apellido");

if (nombre !== "" && apellido !== "") {
  alert("Bienvenido " + nombre + " " + apellido);

  // Utilizar un bucle for para repetir el mensaje de bienvenida 2 veces
  for (let i = 0; i < 2; i++) {
    alert("te presentamos nuestro reloj , mucho gusto " + (i + 1));
  }
} else {
  alert("Hubo un error al ingresar el nombre y apellido");
}




function actualizarHora() {
    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let ampm = "";
  
    // Obtener los elementos
    const phoras = document.getElementById('horas');
    const pminutos = document.getElementById('minutos');
    const psegundos = document.getElementById('segundos');
    const pampm = document.getElementById('ampm');
    const pdiasemana = document.getElementById('diasemana');
    const pdia = document.getElementById('dia');
    const pmes = document.getElementById('mes');
    const pyear = document.getElementById('year');
  
    // define si es am o pm
    if (horas >= 12) {
      ampm = "PM";
      if (horas > 12) {
        horas -= 12;
      }
    } else {
      ampm = "AM";
      if (horas === 0) {
        horas = 12;
      }
    }
  
    // Agregar un cero inicial si los minutos y segundos son menores a 10
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
  
    
    phoras.textContent = horas;
    pminutos.textContent = minutos;
    psegundos.textContent = segundos;
    pampm.textContent = ampm;
  
  
    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    // Obtener la fecha actual
    const diaSemanaActual = fecha.getDay();
    const diaActual = fecha.getDate();
    const mesActual = fecha.getMonth();
    const yearActual = fecha.getFullYear();
  
    // Actualizar los elementos del DOM con los valores de la fecha
    pdiasemana.textContent = diasSemana[diaSemanaActual];
    pdia.textContent = diaActual;
    pmes.textContent = meses[mesActual];
    pyear.textContent = yearActual;
  }
  
  // Llamar a la función para iniciar el reloj
  actualizarHora();
  
  // Actualizar la hora cada segundo
  setInterval(actualizarHora, 1000);
  
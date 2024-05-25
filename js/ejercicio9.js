const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const select = document.getElementById("numeroMes");
let opcionesHTML = "";

for (let i = 0; i < 12; i++) {
    opcionesHTML += "<option value='" + (i + 1) + "'>" + (i + 1) + "</option>";
}

select.innerHTML = opcionesHTML;

document.getElementById('mostrarBtn').addEventListener('click', function() {
    const numeroMes = document.getElementById("numeroMes").value;
    const resultado = document.getElementById("resultado");
    const errorMes = document.getElementById("errorMes");

    errorMes.textContent = "";
    resultado.textContent = "";

    if (!numeroMes) {
        errorMes.textContent = "Por favor, selecciona un número de mes.";
        return;
    }

    const mesIndex = parseInt(numeroMes) - 1;
    document.getElementById("resultado").innerHTML = "El mes seleccionado es: "+meses[mesIndex]  ;    
    resultado.className = "text-resultado";
});
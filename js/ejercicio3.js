document.getElementById('calcularBtn').addEventListener('click', tiposTriangulos);

function tiposTriangulos() {
    document.getElementById('resultado').textContent = "";

    if (!validarFormulario()) {
        return;
    }

    const ladoA = document.getElementById('ladoA').value;
    const ladoB = document.getElementById('ladoB').value;
    const ladoC = document.getElementById('ladoC').value;

    const ladoANum = parseFloat(ladoA);
    const ladoBNum = parseFloat(ladoB);
    const ladoCNum = parseFloat(ladoC);

    let tipoTriangulo;
    if (ladoANum === ladoBNum && ladoBNum === ladoCNum) {
        tipoTriangulo = 'Equilátero';
    } else if (ladoANum === ladoBNum || ladoANum === ladoCNum || ladoBNum === ladoCNum) {
        tipoTriangulo = 'Isósceles';
    } else {
        tipoTriangulo = 'Escaleno';
    }

    document.getElementById('resultado').innerHTML = "El triángulo es: " + tipoTriangulo;
}

function validarFormulario() {
    let correcto = true;

    const ladoA = document.getElementById('ladoA').value;
    const ladoB = document.getElementById('ladoB').value;
    const ladoC = document.getElementById('ladoC').value;

    const numero = /^[0-9]+(\.[0-9]+)?$/;

    if (!numero.test(ladoA) || parseFloat(ladoA) <= 0) {
        document.getElementById('errorLadoA').textContent = "El lado A no puede estar vacío, ser menor o igual a cero, o no ser un número.";
        correcto = false;
    } else {
        document.getElementById('errorLadoA').textContent = "";
    }

    if (!numero.test(ladoB) || parseFloat(ladoB) <= 0) {
        document.getElementById('errorLadoB').textContent = "El lado B no puede estar vacío, ser menor o igual a cero, o no ser un número.";
        correcto = false;
    } else {
        document.getElementById('errorLadoB').textContent = "";
    }

    if (!numero.test(ladoC) || parseFloat(ladoC) <= 0) {
        document.getElementById('errorLadoC').textContent = "El lado C no puede estar vacío, ser menor o igual a cero, o no ser un número.";
        correcto = false;
    } else {
        document.getElementById('errorLadoC').textContent = "";
    }

    return correcto;
}

function resetear() {
    document.getElementById("ladoA").value = "";
    document.getElementById("ladoB").value = "";
    document.getElementById("ladoC").value = "";
    document.getElementById("errorLadoA").textContent = "";
    document.getElementById("errorLadoB").textContent = "";
    document.getElementById("errorLadoC").textContent = "";
    document.getElementById("resultado").textContent = "";
}

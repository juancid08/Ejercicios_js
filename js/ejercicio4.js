document.getElementById('calcularBtn').addEventListener('click', calculoLetra);

function calculoLetra() {

    document.getElementById('resultado').textContent = "";

    if (!validarFormulario()) {
        return;
    }else{const LETRA = "TRWAGMYFPDXBNJZSQVHLCKE";
        let dni = parseInt(document.getElementById("dni").value);

        let resto = dni % 23;
        document.getElementById("resultado").innerHTML = "La letra es: " + LETRA[resto];
    }
    
}

function validarFormulario() {
    let correcto = true;

    const dni = document.getElementById('dni').value;

    if (!/^[0-9]+$/.test(dni) || dni.length < 7 || dni.length > 8) {
        document.getElementById('errorDni').textContent = "Por favor, introduce un número de DNI válido (entre 7 y 8 dígitos).";
        correcto = false;
    } else {
        document.getElementById('errorDni').textContent = "";
    }

    return correcto;
}

function resetear() {
    document.getElementById("dni").value = "";
    document.getElementById("errorDni").textContent = "";
    document.getElementById("resultado").textContent = "";
}

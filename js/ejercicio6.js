document.getElementById('calcularBtn').addEventListener('click', detectarPalindromo);

function detectarPalindromo() {
    const cadena = document.getElementById("cadena").value;
    const resultado = document.getElementById("resultado");
    if (!cadena) {
        resultado.textContent = "Por favor, ingresa una cadena.";
        resultado.className = "text-error";
    } else if (esPalindromo(cadena)) {
        resultado.textContent = "¡La cadena es un palíndromo!";
        resultado.className = "text-correcto";
    } else {
        resultado.textContent = "La cadena no es un palíndromo.";
        resultado.className = "text-error";
    }
}

function esPalindromo(cadena) {
    const longitud = cadena.length;
    for (let i = 0; i < longitud / 2; i++) {
        if (cadena[i] !== cadena[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}

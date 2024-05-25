document.getElementById('calcularBtn').addEventListener('click', detectarMayusculasMinisculas);

function detectarMayusculasMinisculas() {
    const cadena = document.getElementById('cadena').value;

    const contieneMayusculas = /[A-Z]/.test(cadena);
    const contieneMinusculas = /[a-z]/.test(cadena);

    if (contieneMayusculas && contieneMinusculas) {
        document.getElementById('resultado').innerText = 'La cadena contiene tanto mayúsculas como minúsculas.';
    } else if (contieneMayusculas) {
        document.getElementById('resultado').innerText = 'La cadena contiene solo mayúsculas.';
    } else if (contieneMinusculas) {
        document.getElementById('resultado').innerText = 'La cadena contiene solo minúsculas.';
    } else {
        document.getElementById('resultado').innerText = 'La cadena no contiene letras o está vacía.';
    }
}

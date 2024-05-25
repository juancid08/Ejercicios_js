document.getElementById('calcularBtn').addEventListener('click', diviEuclides);

function diviEuclides() {
    let dividendo = document.getElementById("dividendo").value;
    let divisor = document.getElementById("divisor").value;
    let resultado = document.getElementById("resultado");
    let errorDividendo = document.getElementById("errorDividendo");
    let errorDivisor = document.getElementById("errorDivisor");

    errorDividendo.textContent = "";
    errorDivisor.textContent = "";
    resultado.textContent = "";

    const numeros = /^[1-9]\d*$/; 

    if (!dividendo || !divisor) {
        if (!dividendo) errorDividendo.textContent = "Por favor, introduce un dividendo.";
        if (!divisor) errorDivisor.textContent = "Por favor, introduce un divisor.";
        return;
    }

    if (!numeros.test(dividendo) || !numeros.test(divisor) || divisor==0) {
        if (!numeros.test(dividendo)) errorDividendo.textContent = "Por favor, introduce un número entero positivo.";
        if (!numeros.test(divisor)) errorDivisor.textContent = "Por favor, introduce un número entero positivo.";
        if(divisor==0) errorDivisor0.textContent="El divisor es 0 no se puede."
        return;
    }

    dividendo = parseInt(dividendo);
    divisor = parseInt(divisor);

    let cociente = 0;
    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }

    document.getElementById("resultado").innerHTML = "El cociente es "+cociente +", y el resto es "+dividendo ;    
    resultado.className = "text-resultado";
}

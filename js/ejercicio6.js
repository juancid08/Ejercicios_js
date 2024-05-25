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
                const cadenaInversa = invertirCadena(cadena);
                document.getElementById("resultado").innerHTML = "La cadena no es palíndromo.El palíndromo generado es: "+cadena+cadenaInversa ;    
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

        function invertirCadena(cadena) {
            let cadenaInversa = '';
            for (let i = cadena.length - 1; i >= 0; i--) {
                cadenaInversa += cadena[i];
            }
            return cadenaInversa;
        }

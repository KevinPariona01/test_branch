// Función para sumar dos números
//CAMBIO DESDE EL GIT
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
//CAMBIO 1
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero";
    }
}

// Función principal para manejar las operaciones
function calcular() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");

    let resultado;

    switch (operacion) {
        case "+":
            resultado = sumar(num1, num2);
            break;
        case "-":
            resultado = restar(num1, num2);
            break;
        case "*":
            resultado = multiplicar(num1, num2);
            break;
        case "/":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operación no válida";
            break;
    }

    alert("El resultado es: " + resultado);
}

// Llamada a la función principal
calcular();

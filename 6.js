// Importa las funciones necesarias desde Vue.js
const { createApp, ref } = Vue;

// Crea una instancia de la aplicación Vue
createApp({
    // La función setup() se ejecuta cuando se monta la aplicación
    setup() {
        // Define las variables reactivas para los números y el resultado
        const num1 = ref(0); // Primer número
        const num2 = ref(0); // Segundo número
        const result = ref(0); // Resultado de la operación

        // Función para sumar los dos números
        const add = () => {
            result.value = num1.value + num2.value;
        };

        // Función para restar el segundo número del primero
        const subtract = () => {
            result.value = num1.value - num2.value;
        };

        // Función para multiplicar los dos números
        const multiply = () => {
            result.value = num1.value * num2.value;
        };

        // Función para dividir el primer número por el segundo
        const divide = () => {
            // Verifica si el divisor no es cero para evitar la división por cero
            if (num2.value !== 0) {
                result.value = num1.value / num2.value;
            } else {
                result.value = 'Error: División por cero'; // Mensaje de error si el divisor es cero
            }
        };

        // Retorna las variables y funciones para que estén disponibles en la plantilla
        return {
            num1,
            num2,
            result,
            add,
            subtract,
            multiply,
            divide
        };
    }
}).mount('#app'); // Monta la aplicación en el elemento con id="app"

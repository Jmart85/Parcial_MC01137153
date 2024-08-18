// Crea un componente personalizado con un input y un botón
const InputButton = {
    template: `
        <div>
            <!-- Campo de entrada -->
            <input v-model="inputValue" placeholder="Escribe algo" />
            <!-- Botón que muestra el valor en una alerta -->
            <button @click="showValue">Mostrar Valor</button>
        </div>
    `,
    setup() {
        // Defini una referencia reactiva para el valor del input
        const inputValue = Vue.ref('');

        // Método para mostrar el valor en una alerta
        const showValue = () => {
            alert(`El valor del input es: ${inputValue.value}`);
        };

        // Retornar las propiedades y métodos que estarán disponibles en la plantilla
        return {
            inputValue,
            showValue
        };
    }
};

// Crea la instancia de la aplicación Vue
const app = Vue.createApp({});

// Registra el componente personalizado
app.component('input-button', InputButton);

// Montar la aplicación en el div con el id "app"
app.mount('#app');

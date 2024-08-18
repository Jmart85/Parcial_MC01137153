// Definie el componente de mensaje de bienvenida
const WelcomeMessage = {
    // Plantilla HTML del componente
    template: `
        <div>
            <!-- Campo de entrada donde el usuario escribe su nombre -->
            <input v-model="name" placeholder="Escribe tu nombre" />
            <!-- Mensaje de bienvenida que se actualiza dinámicamente -->
            <p>Bienvenido, {{ name }}!</p>
        </div>
    `,
    // Setup: define las propiedades reactivas del componente
    setup() {
        // Crear una referencia reactiva para el nombre
        const name = Vue.ref('');

        // Devulve las propiedades que estarán disponibles en la plantilla
        return {
            name
        };
    }
};

// Crea la instancia de la aplicación Vue
const app = Vue.createApp({});

// Registra el componente de bienvenida en la aplicación
app.component('welcome-message', WelcomeMessage);

// Montar la aplicación en el div con el id "app"
app.mount('#app');

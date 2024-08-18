const { createApp, defineComponent, ref } = Vue;

// Define el componente MessageComponent
const MessageComponent = defineComponent({
    props: {
        isLoggedIn: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div>
            <p v-if="isLoggedIn">¡Bienvenido de nuevo!</p>
            <p v-else>Por favor, inicia sesión.</p>
        </div>
    `
});

// Crea la instancia de Vue y monta la aplicación
const app = createApp({
    components: {
        'message-component': MessageComponent
    },
    setup() {
        // Estado para manejar si el usuario está o no conectado
        const isLoggedIn = ref(false);

        // Función para alternar el estado de conexión
        const toggleLogin = () => {
            isLoggedIn.value = !isLoggedIn.value;
        };

        return {
            isLoggedIn,
            toggleLogin
        };
    }
});

// Monta la aplicación en el elemento con id="app"
app.mount('#app');

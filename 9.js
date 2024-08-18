const { createApp, defineComponent, ref, computed } = Vue;

// Define el componente FullNameComponent
const FullNameComponent = defineComponent({
    props: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    computed: {
        // Propiedad computada que devuelve el nombre completo
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
    template: `
        <div>
            <p>Nombre Completo: {{ fullName }}</p>
        </div>
    `
});

// Crea la instancia de Vue y monta la aplicación
const app = createApp({
    components: {
        'full-name-component': FullNameComponent
    },
    setup() {
        // Estado para manejar el nombre y el apellido
        const firstName = ref('');
        const lastName = ref('');

        return {
            firstName,
            lastName
        };
    }
});

// Monta la aplicación en el elemento con id="app"
app.mount('#app');

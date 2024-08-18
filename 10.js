const { createApp, defineComponent, ref, watch } = Vue;

// Define el componente WatcherComponent
const WatcherComponent = defineComponent({
    props: {
        watchedValue: {
            type: String,
            required: true
        }
    },
    setup(props) {
        // Variable para almacenar el mensaje
        const message = ref('');

        // Watcher para detectar cambios en watchedValue
        watch(
            () => props.watchedValue,
            (newValue, oldValue) => {
                message.value = `El valor ha cambiado de "${oldValue}" a "${newValue}"`;
            }
        );

        return {
            message
        };
    },
    template: `
        <div>
            <p>{{ message }}</p>
        </div>
    `
});

// Crea la instancia de Vue y monta la aplicación
const app = createApp({
    components: {
        'watcher-component': WatcherComponent
    },
    setup() {
        // Estado para manejar el valor observado
        const watchedValue = ref('');

        return {
            watchedValue
        };
    }
});

// Monta la aplicación en el elemento con id="app"
app.mount('#app');

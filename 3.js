// Crear una nueva instancia de la aplicación Vue usando Composition API
const app = Vue.createApp({
    setup() {
        // Definir una referencia reactiva para el estado de visibilidad del mensaje
        const isVisible = Vue.ref(false);

        // Método para alternar la visibilidad del mensaje
        const toggleMessage = () => {
            isVisible.value = !isVisible.value;
        };

        // Retornar las propiedades y métodos que estarán disponibles en la plantilla
        return {
            isVisible,
            toggleMessage
        };
    }
});

// Montar la aplicación en el div con el id "app"
app.mount('#app');

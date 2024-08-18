// Crea una nueva instancia de Vue
const app = Vue.createApp({
    // Datos reactivos
    data() {
        return {
            count: 0 // Inicia el contador en 0
        };
    },
    // Métodos
    methods: {
        increment() {
            this.count++; // Incrementa el contador
        }
    }
});

// Montar la aplicación en el div con el id "app"
app.mount('#app');

const { ref, computed, onMounted } = Vue;

const app = Vue.createApp({
    setup() {
        // Estado para el tema
        const darkTheme = ref(false);

        // Cambiar tema
        const toggleTheme = () => {
            darkTheme.value = !darkTheme.value;
            document.body.className = darkTheme.value ? 'dark-theme' : 'light-theme';
        };

        // Inicializar el tema basado en la preferencia del usuario o valor por defecto
        onMounted(() => {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            darkTheme.value = prefersDarkScheme;
            document.body.className = darkTheme.value ? 'dark-theme' : 'light-theme';
        });

        return {
            darkTheme,
            toggleTheme
        };
    }
});

app.mount('#app');

// Crea un componente personalizado para la lista de tareas
const TaskList = {
    template: `
        <div>
            <!-- Campo de entrada para nueva tarea -->
            <input v-model="newTask" placeholder="Agregar nueva tarea" @keyup.enter="addTask" />
            <!-- Botón para agregar la tarea -->
            <button @click="addTask">Agregar Tarea</button>

            <!-- Lista de tareas -->
            <ul>
                <li v-for="(task, index) in tasks" :key="index">
                    {{ task }}
                    <!-- Botón para eliminar la tarea -->
                    <button @click="removeTask(index)">Eliminar</button>
                </li>
            </ul>
        </div>
    `,
    setup() {
        // Referencia reactiva para almacenar las tareas
        const tasks = Vue.ref([]);
        // Referencia reactiva para el valor del input de nueva tarea
        const newTask = Vue.ref('');

        // Función para agregar una nueva tarea
        const addTask = () => {
            if (newTask.value.trim() !== '') {
                tasks.value.push(newTask.value);
                newTask.value = ''; // Limpiar el input después de agregar la tarea
            }
        };

        // Función para eliminar una tarea
        const removeTask = (index) => {
            tasks.value.splice(index, 1);
        };

        // Retornar las propiedades y métodos que estarán disponibles en la plantilla
        return {
            tasks,
            newTask,
            addTask,
            removeTask
        };
    }
};

// Crear la instancia de la aplicación Vue
const app = Vue.createApp({});

// Registrar el componente personalizado
app.component('task-list', TaskList);

// Montar la aplicación en el div con el id "app"
app.mount('#app');

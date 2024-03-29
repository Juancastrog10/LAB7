document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { name: 'Llamar al medico', completed: false },
        { name: 'hacer la compra', completed: true },
        { name: 'Terminar informe', completed: false },
        { name: 'organizar armario ', completed: false },
        { name: 'leer capitulo', completed: true },
        { name: 'establecer metas', completed: true },
        { name: 'Viajar', completed: false },
        { name: 'Videollamada novia', completed: false },
        { name: 'Meditacion ', completed: false },
        { name: 'Ver youtube', completed: true },
    ];

    const taskList = document.getElementById('task-list');
    const taskStats = document.getElementById('task-stats');

    function displayTasks() {
        taskList.innerHTML = ''; 
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            const taskName = document.createElement('span');
            taskName.textContent = task.name;
            if (task.completed) {
                taskName.classList.add('completed'); 
            }
            taskItem.appendChild(taskName);
            const taskStatus = document.createElement('span');
            taskStatus.textContent = task.completed ? 'Completada' : 'Por hacer';
            taskStatus.classList.add('task-status', task.completed ? 'completed' : 'pending');
            taskItem.appendChild(taskStatus);
           
            const completeBtn = document.createElement('button');
            completeBtn.classList.add('complete-btn'); 
            completeBtn.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                completeBtn.classList.toggle('completed');  
                displayTasks(); 
            });
            taskItem.appendChild(completeBtn);
            taskList.appendChild(taskItem);
        });

       
        const completedTasks = tasks.filter(task => task.completed).length;
        const pendingTasks = tasks.filter(task => !task.completed).length;
        taskStats.innerHTML = `Tareas Listas: ${completedTasks}<br>Tareas pendientes: ${pendingTasks}`;
    }

    displayTasks(); 
});

let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.text;
      
      if (task.completed) {
        li.classList.add('completed');
      }
      
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Concluir';
      completeButton.className = 'complete-button'; // Adicione a classe ao botão
      completeButton.onclick = () => {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
      };
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remover';
      deleteButton.onclick = () => {
        tasks.splice(index, 1);
        renderTasks();
      };
      
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      
      taskList.appendChild(li);
    });
  }
  

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

renderTasks();

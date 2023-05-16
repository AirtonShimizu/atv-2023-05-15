// buscar as referencias dos elementos html
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

//funação para adcionar uma tarefa
function addTask(){ 
    //Retornar o valor da tarefa digitada pelo usuario
    const taskDescription = taskInput.value;

    //Criar um novo item de liesta e adcionar a lista
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
    <span>${taskDescription}</span> <i class="fa-solid fa-trash trash-icon"></i>
    `;

    todoList.appendChild(listItem);

    //limpar o campo de entrada do texto
    taskInput.value = '';

    //adionar um evento de clique para remover o item da lista
    const trashIcon = listItem.querySelector('.trash-icon');
    trashIcon.addEventListener('click' , function () {
        listItem.remove();
    });
}

//adcionar um evenet listenner quando o usuario clicar no botao adcionar
addButton.addEventListener('click', addTask);

//adcioonar um event listenner quando o usuario precinar a tecla enter
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter'){
        event.preventDefault();
        addTask();
    }
    
});
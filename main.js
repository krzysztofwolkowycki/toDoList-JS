const taskArr = [];
const form = document.querySelector('form');
const inputAdd = document.querySelector('form input');
const inputFilter = document.getElementById('searchTask');
const numberTask = document.querySelector('h1 span');
const ul = document.querySelector('ul');

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    taskArr.splice(index, 1);
    console.log(taskArr);
    renderTask();
    numberTask.textContent = taskArr.length;

}

const addTask = (e) => {
    e.preventDefault();
    const textTask = inputAdd.value;
    console.log(textTask);
    if (textTask === '') return;
    const task = document.createElement('li');
    task.classList = 'task';
    task.textContent = textTask;
    task.innerHTML = textTask + '<button> Usuń</button>';
    taskArr.push(task);
    ul.appendChild(task);
    inputAdd.value = '';
    numberTask.textContent = taskArr.length;
    task.querySelector('button').addEventListener('click', removeTask);
    renderTask();
}
const renderTask = () => {
    ul.textContent = '';
    taskArr.forEach((element, key) => {
        element.dataset.key = key;
        ul.appendChild(element);
    })
}

const filterTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasksSearch = [...document.querySelectorAll('li')];
    console.log(tasksSearch);
    tasksSearch = tasksSearch.filter(li => li.textContent.toLowerCase().includes(searchText));
    console.log(tasksSearch);
    ul.textContent = "";
    tasksSearch.forEach(li => ul.appendChild(li));
}

form.addEventListener('submit', addTask);
inputFilter.addEventListener('input', filterTask)
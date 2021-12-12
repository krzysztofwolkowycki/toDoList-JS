const taskArr = [];
const form = document.querySelector('form');
const inputAdd = document.querySelector('form input');
const inputFilter = document.getElementById('searchTask');
const numberTask = document.querySelector('h1 span');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const removeTask = (e)=>{
    e.target.parentNode.remove();
    
}

const addTask = (e)=>{
    e.preventDefault();
    const textTask = inputAdd.value;
    console.log(textTask);
    const task = document.createElement('li');
    task.classList = 'task';
    task.textContent = textTask;
    task.innerHTML = textTask + '<button> Usuń</button>';
    taskArr.push(task);
    ul.appendChild(task);
    inputAdd.value = '';
    numberTask.textContent = taskArr.length;
    task.document.querySelector('button').addEventListener('click', removeTask);

    ul.textContent = '';
    taskArr.forEach((element, key)=>{
        element.dataset.key = key;
        ul.appendChild(element);
    })
}



form.addEventListener('submit', addTask);

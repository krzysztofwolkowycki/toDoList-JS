const taskArr = [];
const form = document.querySelector('form');
const inputAdd = document.querySelector('form input');
const inputFilter = document.getElementById('searchTask');
const numberTask = document.querySelector('h1 span');
const ul = document.querySelector('ul');



const addTask = (e)=>{
    e.preventDefault()
}



form.addEventListener('submit', addTask)
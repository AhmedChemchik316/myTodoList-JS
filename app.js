//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteAndCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
    event.preventDefault();
    //todoList.append(todoInput.value)
    //console.log("What's NEXT?");

    //Create todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = `${todoInput.value}`;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check btn
    const completedBtn =document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);
    //Trash btn
    const trashBtn =document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    //Append to list
    todoList.appendChild(todoDiv);

    todoInput.value='';
}

function deleteAndCheck(e){
    const item = e.target;
    const selectedTodo = item.parentElement;
    //Delete
    if (item.classList[0]==='trash-btn') { 
        //annimation
        selectedTodo.classList.add('fall');
        selectedTodo.addEventListener("transitionend",function(){
            selectedTodo.remove();
        });
        //selectedTodo.remove();
    }
    if (item.classList[0]==='completed-btn') {
        selectedTodo.classList.toggle("completed")
    }

}

function filterTodo (e){
    const todos = todoList.childNodes;
    //console.log(todos)
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else {todo.style.display = "none";}
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else {todo.style.display = "none";}
                break;
        }
    });
}
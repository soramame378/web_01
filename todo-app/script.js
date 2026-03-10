const input = document.getElementById("todo-input");
const button = document.getElementById("add-button");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos(){
    list.innerHTML = "";
    todos.forEach((todo,index)=>{
        const li = document.createElement("li");
        li.textContent = todo.text;
            if(todo.completed){
                li.classList.add("completed");
            }

        li.addEventListener("click",()=>{
            todo.completed = !todo.completed;
            saveTodos();
            renderTodos();
        });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    deleteBtn.addEventListener("click",(e)=>{
        e.stopPropagation();
        todos.splice(index,1);
        saveTodos();
        renderTodos();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    });

}

button.addEventListener("click",()=>{
    const text = input.value;
    if(text === "") return;
    todos.push({
        text:text,
        completed:false
    });
    input.value="";
    saveTodos();
    renderTodos();
});

renderTodos();
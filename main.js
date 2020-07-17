const todoList = document.querySelector(".todo-list");
const deleteList = document.querySelector('.delete')
const inputList = document.querySelector(".add-list");
const addButton = document.querySelector(".add-button");
const todoItem = document.querySelector(".todo-item");

function createNewElem(task) {
  const inputList = document.createElement("li");
  inputList.className = "todo-item";

  const checkBox = document.createElement("input");
  checkBox.className = "checkbox";
  checkBox.type = "checkBox";

  const title = document.createElement("label");
  title.className = "title";
  title.innerHTML = task;

  const textField = document.createElement("input");
  textField.className = "textfield";
  textField.type = "text";

  const buttonEdit = document.createElement("button");
  buttonEdit.className = "add";
  buttonEdit.innerHTML='Змінити';

  const buttonDelete = document.createElement("button");
  buttonDelete.className = "delete";
  buttonDelete.innerHTML='Видалити';

  inputList.appendChild(checkBox);
  inputList.appendChild(title);
  inputList.appendChild(textField);
  inputList.appendChild(buttonEdit);
  inputList.appendChild(buttonDelete);

 
  return inputList
}

addButton.addEventListener('click', (event)=> {
    event.preventDefault()
    const inputValue = inputList.value

    if(inputValue === '') {
        alert('Введіть задачу')
    } else {
        const items = createNewElem(inputValue)
        todoList.appendChild(items)
        inputList.value = ''
        
    }
  
})


const todoList = document.querySelector(".todo-list");
const deleteList = document.querySelector(".delete");
const inputList = document.querySelector(".add-list");
const addButton = document.querySelector(".add-button");
const todoItem = document.querySelector(".todo-item");

const arrOld = [];
const showData = (arr) => {
  let newArr = [...arr];
  const inputList = document.createElement("li");
  newArr.map((item) => {
    inputList.classList.add("todo-item");
    inputList.innerHTML = `
        <input class='checkbox' type='checkBox'>
        <label class='title'>${item.task}</label>
        <input class='textfield' type='text'>
        `;

    // const removeBtn = document.createElement("button");
    // removeBtn.classList.add("add");
    // removeBtn.textContent = "Змінити";
  
    const editBtn = document.createElement("button");
    editBtn.classList.add("add");
    editBtn.textContent = "Змінити";

    const toggleInput= () => {
      const label = document.querySelector('.title')
      const input = document.querySelector('.textfield')
      const edit = inputList.classList.toggle('editing')

      if (edit) {
        input.value = label.innerHTML
        editBtn.textContent = 'Зберегти'
      } else {
        label.innerHTML = input.value
      }
    }

    editBtn.addEventListener('click', toggleInput)
    

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("delete");
    removeBtn.textContent = "Видалити";
    removeBtn.addEventListener("click", () => {
      inputList.remove();
    });
    inputList.append(editBtn)
    inputList.append(removeBtn);
    todoList.append(inputList);
    
  });


};



addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = inputList.value;

  if (inputValue === "") {
    alert("Введіть задачу");
  } else {
    const formData = {
      id: Math.floor(Math.random() * 1000),
      task: inputValue,
    };
    arrOld.push(formData);
    showData(arrOld);
    inputList.value = "";
  }
})
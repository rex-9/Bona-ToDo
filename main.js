import './style.css'

const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
let order = 1;

// Create
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  if (todoInput.value) {
    const todoItem = document.createElement('li');
    todoItem.id = `li-${order}`
    todoItem.innerHTML = `
      <span id='item-${order}'>${todoInput.value}</span>
      <button type="button" id="edit-btn-${order}">Edit</button>
      <button type="button" id="delete-btn-${order}">Delete</button>
    `
    todoList.appendChild(todoItem);
    todoInput.value = '';

    update(order);
    remove(order);
    order++;
  }
});

// Update
const update = (orderParams) => {
  const editBtn = document.querySelector(`#edit-btn-${orderParams}`);
  editBtn.addEventListener('click', () => {
    const oldChild = document.getElementById(`item-${orderParams}`);

    const newInput = document.createElement('input');
    newInput.value = oldChild.innerHTML;
    newInput.addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        // change the element from input to span
      }
    })
    oldChild.replaceChild(newInput, oldChild.childNodes[0]);
  });
};

// Pseudo code
// Click edit-btn-1
// Get item-1
// change item-1.child[0] from span to input

// Delete
const remove = (orderParams) => {
  const deleteBtn = document.querySelector(`#delete-btn-${orderParams}`);
  deleteBtn.addEventListener('click', () => {
    const li = document.querySelector(`#li-${orderParams}`);
    todoList.removeChild(li);
  });
};

// Pseudo code
// Click delete-btn-1
// Get li-1
// remove li-1 from todolist

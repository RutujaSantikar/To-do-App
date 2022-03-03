"use strict";
const btntab = document.getElementById("btntab");
const todoList = document.getElementById("todo-items");

btntab.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();
  // console.log(1);

  const newTodo = document.getElementById("item").value;

  const li = document.createElement("li");
  li.className = "added-todo";

  // console.log(li);
  li.appendChild(document.createTextNode(newTodo));

  // delete eleemtn
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "fas fa-trash ";
  // deleteBtn.appendChild(document.createTextNode());

  li.appendChild(deleteBtn);

  todoList.appendChild(li);
}
// remove item

const trashButton = document.querySelectorAll(".delete-item");

for (let i = 0; i < trashButton.length; i++) {
  trashButton[i].addEventListener("click", () => {
    removeItem(i);
  });
}
function removeItem(i) {
  console.log("callled", i);
  const lists = document.querySelectorAll(".added-todo");

  lists[i].remove();
}

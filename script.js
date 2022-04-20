const userInput = document.querySelector("#user-input");
const form = document.querySelector(".inputs");
const addBtn = document.querySelector("#add-button");
const toDoList = document.querySelector("#parent-list");

addBtn.addEventListener("click", addListItem);

function getUserInput() {
  const input = userInput.value;
  form.reset();
  return input;
}

function addListItem() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.classList.add("list-item");
  span.textContent = getUserInput();
  span.classList.add("item-name");
  button.textContent = "X";
  button.classList.add("delete-button");
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  createButtonList();
  createSpanList();
}

function createButtonList() {
  const buttons = document.querySelectorAll(".delete-button");
  buttons.forEach((button) => {
    button.addEventListener("click", removeListItem);
  });
  return buttons;
}

function removeListItem(event) {
  toDoList.removeChild(event.target.parentElement);
}

function createSpanList() {
  const spans = document.querySelectorAll(".item-name");
  spans.forEach((span) => {
    span.addEventListener("click", cancelOutItem);
  });
  return spans;
}

function cancelOutItem(event) {
  event.target.classList.add("strike-out");
}
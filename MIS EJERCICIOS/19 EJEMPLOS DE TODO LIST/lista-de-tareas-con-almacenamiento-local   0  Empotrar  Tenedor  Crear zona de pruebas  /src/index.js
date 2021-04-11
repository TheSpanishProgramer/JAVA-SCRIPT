const button = document.querySelector('input[type="button"');
const list = document.querySelector("ul");
const input = document.querySelector("input[type='text']");
const newTodos = document.querySelectorAll('li')
const form = document.querySelector('form');

let newTodo;
let listItemText;

let List = [];



function addTodoHandler() {
	listItemText = document.createElement("span");
	listItemText.innerText = input.value;
   // checkbox
   const checkBox = document.createElement('input');
   checkBox.type = "checkbox";

   checkBox.addEventListener('click', function(){
   this.checked ? 
	   listItemText.style.textDecoration = "line-through"
	   : listItemText.style.textDecoration = "none";      
	   
   })
   // delete button
   const deleteButton = document.createElement('button');
   deleteButton.innerText = "X";
   deleteButton.classList.add("delete");
   deleteButton.addEventListener('click', function(e){
	   let li = this.parentElement;
	   li.remove()
   })

   // todo item
   newTodo = document.createElement("li");
   newTodo.append(deleteButton, listItemText, checkBox);
   newTodo.setAttribute('data-id', "text");


   list.appendChild(newTodo);
   input.value = "";
   List.push({
	task: listItemText.innerText,
	done: false
  })
  localStorage.setItem('todos', JSON.stringify(List));
  JSON.parse(localStorage.getItem("todos"));

 
  // console.log(List);

}

if(JSON.parse(localStorage.getItem("todos")) == []) {
  console.log('fff')
}




button.addEventListener('click', addTodoHandler);

input.addEventListener("keydown", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
	  event.preventDefault();
	  addTodoHandler();
	}
  });







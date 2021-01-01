let todos = [
	{
		id: Math.floor(Math.random() * Math.floor(10000)),
		name: 'Make dinner',
		completed: false,
	},
	{
		id: Math.floor(Math.random() * Math.floor(10000)),
		name: 'Clean the house',
		completed: false,
	},
	{
		id: Math.floor(Math.random() * Math.floor(10000)),
		name: 'Buy groceries',
		completed: false,
	},
	{
		id: Math.floor(Math.random() * Math.floor(10000)),
		name: 'Clean the kitchen',
		completed: false,
	},
	{
		id: Math.floor(Math.random() * Math.floor(10000)),
		name: 'Feed the cat',
		completed: false,
	},
];

// selectors
const todoList = document.querySelector('.todoList');
const todoItemName = document.querySelector('.todoList');
const deleteAllbutton = document.querySelector('.deleteAllBtn');
const todoElement = document.querySelector('.todoList');

// Event listeners
todoList.addEventListener('click', deletedTodo);
todoItemName.addEventListener('click', markCompleted);
deleteAllbutton.addEventListener('click', deleteAllTodos);


function addTodo() {
	let inputValue = document.getElementById('myText').value;

	const todoObject = {
		id: Math.floor(Math.random() * Math.floor(10000)),
		name: inputValue,
		completed: false,
	};

	todos.push(todoObject);
	renderTodos();
}

function renderTodos() {
	todoElement.innerHTML = todos
		.map(
			todo => `            
				<li class="todoItem">${todo.name}
					<button class="deleteBtn">Delete</button>
				</li>           
            `,
		)
		.join('');
}

function markCompleted(e) {
	const todoItem = e.target;

	if (todoItem.classList[0] === 'todoItem') {
		todoItem.classList.toggle('isCompleted');
	}
}

function deletedTodo(e) {
	const delBtn = e.target;

	if (delBtn.classList[0] === 'deleteBtn') {
		const todo = delBtn.parentElement;
		todo.remove();
	}
}

function deleteAllTodos() {
	return todoElement.innerHTML = '';
}


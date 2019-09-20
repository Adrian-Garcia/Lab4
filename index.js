function main() {

	let submit = document.getElementById("submitButton");
	let clear = document.getElementById("clearButton");
	let mark = document.getElementById("markAllButton");
	let del = document.getElementById("deleteButton");

	let todo = document.getElementById("listOfTodos");

	submit.addEventListener("click", (event) => {
		
		event.preventDefault();
		
		let content = document.getElementById("newTodo").value;
		
		if (content === "")
			return;

		let div = document.createElement("div");
		let span = document.createElement("span");
		let text = document.createTextNode(content);
		let checkbox = document.createElement("input");

		div.setAttribute("class", "todo");
		span.setAttribute("class", "checkboxText");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("class", "checkbox");

		div.appendChild(span);
		span.appendChild(checkbox);
		span.appendChild(text);
		todo.appendChild(div);
	});

	clear.addEventListener("click", (event) => {

		event.preventDefault();

		let checkbox = document.getElementsByClassName("checkbox");
		let checkboxKeys = Object.keys(checkbox);

		checkboxKeys.forEach((i) => {
			checkbox[i].checked = false;
		})
	});

	mark.addEventListener("click", (event) => {

		event.preventDefault();

		let checkbox = document.getElementsByClassName("checkbox");
		let checkboxKeys = Object.keys(checkbox);

		checkboxKeys.forEach((i) => {
			checkbox[i].checked = true;
		})
	});

	del.addEventListener( "click", (event) => {

		event.preventDefault();

		let list = document.getElementById("listOfTodos");

		list.innerHTML = null; 

	});
}
main();
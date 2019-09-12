function main() {

	var todo = document.getElementById("listOfTodos");

	var sumbit = document.getElementById("submitButton");
	var clear = document.getElementById("clearButton");
	var mark = document.getElementById("markAllButton");
	var del = document.getElementById("deleteButton");

	sumbit.addEventListener("click", (event) => {
	    
	    event.preventDefault();

	    let cont = document.getElementById("newTodo").value;

	    let divNode;
		let spanNode;
		let inputNode;
		let textNode;

		if (cont == "")
			return; 

		div = document.createElement("DIV");
		span = document.createElement("SPAN");
		text = document.createTextNode(cont);
		input = document.createElement("INPUT");

		div.setAttribute("class", "todo");
		span.setAttribute("class", "checkboxText");
		input.setAttribute("type", "checkbox");
		input.setAttribute("class", "checkBox");

		div.appendChild(input);
		div.appendChild(span);
		span.appendChild(text);
		todo.appendChild(div);
	});

	clear.addEventListener("click", (event) => {

	    let checkBoxes = document.getElementsByClassName("checkBox");
	    let checkBoxesKeys = Object.keys(checkBoxes);

	    checkBoxesKeys.forEach((i) => {
	        checkBoxes[i].checked = false;
	    })
	});

	mark.addEventListener("click", (event) => {

		let checkBoxes = document.getElementsByClassName("checkBox");
		let checkBoxesKeys = Object.keys(checkBoxes);

		checkBoxesKeys.forEach((i) => {
			checkBoxes[i].checked = true;
		})
	});

	del.addEventListener("click", (event) => {

		var list = document.getElementById("listOfTodos"); 
		list.innerHTML = null;
	});
}

main();

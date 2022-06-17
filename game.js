let body = document.querySelector("body");

let div = document.createElement("div");
div.className = "main-div";
body.appendChild(div);


let button = document.createElement("button");
button.textContent = "New grid";
body.prepend(button);


let squares;

createGrid(16);


div.addEventListener("mouseover", event =>{
	squares.forEach(square => {
		square.addEventListener("mouseover", event => {
			square.style.cssText = "background-color: blue;"
		})
	})
})


button.addEventListener("click", event => {
	let input = parseInt(prompt("Enter number of squares per side", ""));
	deleteGrid();
	createGrid(input);
})


function createGrid(number) {
	for (let i = 0; i < number*number ;i++) {
		let square = document.createElement("div");
		square.className = "square";
		div.appendChild(square);
	}
	div.style.cssText = `grid-template-columns: repeat(${number}, 1fr); 	grid-template-rows: repeat(${number}, 1fr);`
	squares = document.querySelectorAll(".square");
}

function deleteGrid(){
	while(div.firstChild){
		div.removeChild(div.lastChild);
	}
}



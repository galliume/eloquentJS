"use strict";

for (let text = "#"; text.length <= 7; text += "#") {
	console.log(text);
}

for (let i = 1; i <= 100; i++) {
	let output = "";
	if(i % 3 === 0) {
		output += "Fizz";
	} else if (i % 5 === 0) {
		output += "Buzz";
	}	
	
	console.log(output || i);
}

let width = 8;

let row = "";

for (let j = 0; j < width; j++) {
	for (let i = 0; i < width; i++) {
		if ((j + i) % 2 === 0) {
			row += " ";
		} else {
			row += "#";
		}					
	}
	
	row += "\n";
}

console.log(row);
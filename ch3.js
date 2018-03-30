"use strict";

function minA(a, b) {
	return a < b ? a : b;
}

console.log(minA(2, 4));
console.log(minA(4, 3));

function isEven(n) {
	if (0 == n) {
		return true;
	} else if (1 == n) {
		return false;
	} else if (0 > n) {
		return isEven(-n);
	} else { 		
		return isEven(n - 2);
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1)); 

function countBs(text) {
	return countChar(text, "B");
}

function countChar(text, char) {
	let count = 0;
	
	for (let i = 0; i <= text.length; i++) {
		if (char == text.charAt(i)) count++;
	}
	
	return count;
}
console.log(countBs("Bean"));
console.log(countChar("Ananas", "n"));
console.log(countChar("Apple", "A"));
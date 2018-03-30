"use strict";

function range(start, end, step = 1) {
	let numbers = [];
	
	if (step > 0) {
		for (let i = start; i <= end; i += step) {
			numbers.push(i);
		}
	} else {
		for (let i = start; i >= end; i += step) {
			numbers.push(i);
		}
	}
	
	return numbers;
}

function sum(numbers) {
	let sum = 0;
	
	while(numbers.length) {
		sum += numbers.pop();
	}
	
	return sum;
}
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

function reverseArray(array) {
	let reversed = [];
	
	for (let i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]);
	}
	
	return reversed;
}

function reverseArrayInPlace(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
}

console.log(reverseArray(range(1, 10)));

let array1 = range(10, 20);
reverseArrayInPlace(array1);

console.log(array1);

function arrayToList(array) {
	let list = { };
	
	for (let i = array.length - 1; i >= 0; i--) {		
		list = {
			value:array[i],
			rest:list
		};	
	}
	
	return list;
}

function listToArray(list) {
	let array = [];
	
	for (let node = list; node; node = node.rest) {
		array.push(node.value);					
	}
	
	return array;
}

function prepend(value, list) {
	return {
		value: value,
		rest: list
	};
}

function nth(list, n = 0) {
	if (!list) {
		return undefined;
	} else if (0 == n) {
		return list.value;
	} else {
		return nth(list.rest, n- 1);
	}
}

function deepEqual(a, b) {
	  if (a === b) return true;
	  
	  if (a == null || typeof a != "object" ||
	      b == null || typeof b != "object")
	    return false;
	  
	  var propsInA = 0, propsInB = 0;

	  for (var prop in a)
	    propsInA += 1;

	  for (var prop in b) {
	    propsInB += 1;
	    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
	      return false;
	  }

	  return propsInA == propsInB;	
}

console.log(arrayToList(range(1, 3)));
console.log(listToArray(arrayToList(range(1, 3))));
console.log(prepend(4, prepend(1, null)));
console.log(nth(arrayToList(range(1, 3)), 20));
console.log(nth(arrayToList(range(1, 3)), 2));
console.log(deepEqual("1", 1));
console.log(deepEqual(1, 1));
console.log(deepEqual({value:1}, 1));
console.log(deepEqual({value:1}, {value:2}));
console.log(deepEqual({value:1}, {value:1}));
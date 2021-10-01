/**
 * @param {string[]} ops
 * @return {number}
 */

//  Runtime: 72 ms, faster than 89.41% of JavaScript online submissions for Baseball Game.
//  Memory Usage: 39.5 MB, less than 60.17% of JavaScript online submissions for Baseball Game.

var calPoints = function (ops) {
	let tempArray = [];
	for (let i = 0; i < ops.length; i++) {
		switch (ops[i]) {
			case "+":
				tempArray.push(tempArray[tempArray.length - 1] + tempArray[tempArray.length - 2]);
				break;
			case "D":
				tempArray.push(tempArray[tempArray.length - 1] * 2);
				break;
			case "C":
				tempArray.pop();
				break;
			default:
				tempArray.push(parseInt(ops[i]));
				break;
		}
	}

	let sum = 0;
	for (let j = 0; j < tempArray.length; j++) {
		sum += tempArray[j];
	}

	return sum;
};
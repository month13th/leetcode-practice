/**
 * @param {number} num
 * @return {string}
 */

//  Runtime: 125 ms, faster than 7.19% of JavaScript online submissions for Base 7.
//  Memory Usage: 39.7 MB, less than 20.36% of JavaScript online submissions for Base 7.
var convertToBase7 = function (num) {
	let tempResult = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	let tempNum = num;
	let tempSign = "";
	let rounds = 9;

	if (num == 0) {
		return "0";
	} else if (num < 0) {
		tempNum = -num;
		tempSign = "-";
	}

	while (rounds >= 0) {
		if (tempNum >= Math.pow(7, rounds)) {
			if (rounds == 0) {
				tempResult[rounds] = tempNum;
			} else {
				tempResult[rounds] = parseInt(tempNum / Math.pow(7, rounds));
				tempNum -= Math.pow(7, rounds) * tempResult[rounds];
			}
		}
		rounds -= 1;
	}


	while (tempResult.length > 0) {
		if (tempResult[tempResult.length - 1] == "0") {
			tempResult.pop();
		} else {
			break;
		}
	}


	return tempSign + tempResult.reverse().join("");
};

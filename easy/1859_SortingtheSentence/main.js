/**
 * @param {string} s
 * @return {string}
 */

//  Runtime: 64 ms, faster than 95.43% of JavaScript online submissions for Sorting the Sentence.
//  Memory Usage: 38.6 MB, less than 49.56% of JavaScript online submissions for Sorting the Sentence.
var sortSentence = function (s) {
	// 先將字串依空白分開切成元素放入陣列
	let tempArray = s.split(" ")

	// 開始針對陣列中的元素進行排序；這邊用selection sort
	for (let i = 0; i < tempArray.length; i++) {
		let targetPosition = i;
		let minItem = tempArray[i];
		// 抓該元素最後一個字元(即他的順位數字)
		let minItemNum = parseInt(minItem[minItem.length - 1]);

		for (let j = i; j < tempArray.length; j++) {
			let tempItem = tempArray[j];
			let tempItemNum = parseInt(tempItem[tempItem.length - 1]);
			if (tempItemNum < minItemNum) {
				minItem = tempItem;
				minItemNum = tempItemNum;
				targetPosition = j;
			}
		}

		// 最小值放到最前方(做交換；新的javascript有支援這種寫法)
		[tempArray[i], tempArray[targetPosition]] = [tempArray[targetPosition], tempArray[i]];
	}

	// 將陣列中每個元素最後的數字拿掉
	for (let k = 0; k < tempArray.length; k++) {
		tempArray[k] = tempArray[k].slice(0, -1);
	}

	// 陣列轉字串後回傳
	return tempArray.join(" ");
};
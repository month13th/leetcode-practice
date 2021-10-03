/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//  Runtime: 204 ms, faster than 50.18% of JavaScript online submissions for Palindrome Linked List.
//  Memory Usage: 65.1 MB, less than 76.42% of JavaScript online submissions for Palindrome Linked List.
var isPalindrome = function (head) {
	let totalNodeCounts = getTotalNodeCounts(head);
	let isEvenItemNum = totalNodeCounts % 2 == 0 ? true : false;
	let tempArray = [];
	let currentCnt = 0;

	if (totalNodeCounts == 1) return true;

	while (currentCnt < totalNodeCounts) {
		if (!isEvenItemNum) {
			if (currentCnt == (totalNodeCounts - 1) / 2) {

			} else if (currentCnt > (totalNodeCounts - 1) / 2) {
				if (tempArray.pop() != head.val) {
					return false;
				}
			} else {
				tempArray.push(head.val)
			}
		} else {
			if (currentCnt > (totalNodeCounts / 2 - 1)) {
				if (tempArray.pop() != head.val) {
					return false;
				}
			} else {
				tempArray.push(head.val)
			}
		}
		head = head.next;
		currentCnt += 1;
	}
	return true;
};

var getTotalNodeCounts = function (head) {
	let sum = 1;
	while (head.next != null) {
		sum += 1;
		head = head.next;
	}
	return sum;
}

// Runtime: 228 ms, faster than 36.11% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 66.5 MB, less than 53.28% of JavaScript online submissions for Palindrome Linked List.
var isPalindrome = function (head) {
	let array1 = [];
	let array2 = [];

	while (head.next != null) {
		array1.push(head.val);
		head = head.next;
	}

	// 補上最後一個node的值，因為上面的while最後一次沒有加上最後的
	array1.push(head.val);

	array2 = [...array1];
	array2 = array2.reverse();

	return JSON.stringify(array1) == JSON.stringify(array2);
};
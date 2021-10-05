/**
 * @param {number[]} nums
 * @return {number}
 */
//  Runtime: 714 ms, faster than 5.05% of JavaScript online submissions for Single Number.
//  Memory Usage: 40.9 MB, less than 95.06% of JavaScript online submissions for Single Number.
var singleNumber = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		let singleton = true;
		for (let j = 0; j < nums.length; j++) {
			if ((nums[i] == nums[j]) && (i != j)) {
				singleton = false;
			}
		}
		if (singleton == true) {
			return nums[i];
		}
	}
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Runtime: 108 ms, faster than 52.44% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.5 MB, less than 71.18% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
	return [0, 0];
};

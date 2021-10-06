/**
 * @param {number[]} nums
 * @return {number}
 */

//  Runtime: 100 ms, faster than 40.14% of JavaScript online submissions for Maximum Subarray.
//  Memory Usage: 48.6 MB, less than 15.74% of JavaScript online submissions for Maximum Subarray.

var maxSubArray = function (nums) {
	// 當前左邊數來第幾個
	let left = 0;
	// 當前右邊數來第幾個
	let right = nums.length - 1;
	// 當前左邊數來總和
	let sumLeft = nums[0];
	// 當前右邊數來總和
	let sumRight = nums[nums.length - 1];
	// 當前左邊從第幾個開始數
	let targetLeft = 0;
	// 當前右邊從第幾個開始數
	let targetRight = nums.length - 1;
	let resultSum = 0;

	if (nums.length == 1) return nums[0];

	while (left <= right) {
		if (left == right) {
			break;
		}
		if (sumLeft < 0 && sumRight < 0) {
			if (sumLeft <= sumRight) {
				left += 1;
				sumLeft = nums[left];
				targetLeft = left;
			} else {
				right -= 1;
				sumRight = nums[right];
				targetRight = right;
			}
		} else if (sumLeft <= sumRight) {
			if (sumLeft < 0) {
				left += 1;
				sumLeft = nums[left];
				targetLeft = left;
			} else {
				left += 1;
				sumLeft += nums[left];
			}

		} else if (sumLeft > sumRight) {
			if (sumRight < 0) {
				right -= 1;
				sumRight = nums[right];
				targetRight = right;
			} else {
				right -= 1;
				sumRight += nums[right];
			}
		}

	}

	for (let i = targetLeft; i <= targetRight; i++) {
		resultSum += nums[i];
	}

	return resultSum;
};
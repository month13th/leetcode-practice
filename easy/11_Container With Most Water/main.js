
/**
 * @param {number[]} height
 * @return {number}
 */

// Timeout solution
var maxArea = function (height) {
	let maxArea = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			if (height[j] >= height[i]) {
				maxArea = Math.max(maxArea, height[i] * (j - i));
			}
		}
	}

	for (let i = height.length - 1; i >= 0; i--) {
		for (let j = i - 1; j >= 0; j--) {
			if (height[j] >= height[i]) {
				maxArea = Math.max(maxArea, height[i] * (i - j));
			}
		}
	}

	return maxArea;
};

// Runtime: 96 ms, faster than 48.14% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 47.9 MB, less than 54.41% of JavaScript online submissions for Container With Most Water.
var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;
	let tempArea = 0;
	let maxArea = 0;

	while (left < right) {
		tempArea = Math.min(height[left], height[right]) * (right - left);
		maxArea = Math.max(maxArea, tempArea);

		if (height[left] < height[right]) {
			left += 1;
		} else {
			right -= 1
		}
	}

	return maxArea;
};